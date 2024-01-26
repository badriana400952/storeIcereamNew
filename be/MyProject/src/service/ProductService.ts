import { Repository } from "typeorm"
import { Product } from "../entity/Product"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
const cloudinary = require('cloudinary').v2
require('dotenv').config()
class ProduceService{
    private readonly productRepository: Repository<Product> = AppDataSource.getRepository(Product)
  
      async find(req: Request, res: Response) {
        try {
            
       const products = await this.productRepository
         .createQueryBuilder('product')
         .leftJoinAndSelect('product.topings', 'toping')
         .leftJoinAndSelect('product.user', 'user')
         .getMany();
         
    
         const formattedProducts = products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            topings: product.topings.map((toping) => ({
              id: toping.id,
              name: toping.name,
              price: toping.price,
              image: toping.image,
            })),
            user: product.user
              ? {
                  id: product.user.id,
                  firstName: product.user.firstName,
                  email: product.user.email,
                  handphone: product.user.handphone,
                }
              : null,
          }));
          
    
          res.status(200).json(formattedProducts);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    
    
    
    async findOne(req:Request,res:Response){
        const idid = res.locals.loginSesion
        console.log("idid",idid)
        const {id} = req.params
        try {
            const product = await this.productRepository.find({
                where:{
                  user:{
                      id : idid.users.id
                  }
                },
                relations : ["topings"]
            })
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
        }
    }

    async findOness(req:Request,res:Response){
        
        const {id} = req.params
        try {
            const product = await this.productRepository.findOne({
                where:{
                  id : Number(id)
                },
                relations : ["topings"]
            })
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
        }
    }
    async create(req:Request,res:Response){
        const {name, price,userId} = req.body
        const filename = res.locals.filename
        console.log('filename',filename)

        try {

            if(!userId) {
                return res.status(400).json({error: 'User not found'})
            }
            const product = this.productRepository.create({
                name: name,
                price: price,
                image: filename,
                user: {id: userId}

            })
            console.log("product",product)
            
            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
            })

            const uploadCloudenary = await cloudinary.uploader.upload("./upload/" + filename)
            console.log("uploadCloudenary",uploadCloudenary)

            const uploadCloude =  this.productRepository.create({
                name: product.name,
                price: product.price,
                image: uploadCloudenary.secure_url,
                user: {id: userId}
            })

            const saveProduct = await this.productRepository.save(uploadCloude)
            console.log("saveProduct",saveProduct)
            console.log("uploadCloude",uploadCloude)
            res.status(200).json(uploadCloude)
        } catch (error) {
            console.log(error)
        }
    }

    async patch(req:Request, res:Response){
        const {id} = req.params
        const {name,price,} = req.body
        const filename = res.locals.filename
        try {
            const product = await this.productRepository.findOne({
                where:{
                    id: Number(id)
                }
            })
            product.name = name,
            product.price = price,
            product.image = filename

            cloudinary.config({
                cloud_name: process.env.CLOUD_NAME,
                api_key: process.env.API_KEY,
                api_secret: process.env.API_SECRET,
            })
            const cloudeResponse = await cloudinary.uploader.upload("./upload/" + filename)

            const uploadCloude =  this.productRepository.create({
                name: product.name,
                price: product.price,
                image: cloudeResponse.secure_url
            })
            await this.productRepository.save(uploadCloude)
            res.status(200).json("Berhasil di edit")
        } catch (error) {
            console.log(error)
        }
    }
    async delete(req:Request,res:Response){
        const {id} = req.params
        try {
            const product = await this.productRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            await this.productRepository.remove(product)
            res.status(200).json("Berhasil di hapus")
        } catch (error) {
            console.log(error)
        }
    }
    async findNav(req:Request,res:Response){
        try {
            const product = await this.productRepository.find()
            res.status(200).json(product)
        } catch (error) {
            console.log(error)
        }
    }
}
export default new ProduceService