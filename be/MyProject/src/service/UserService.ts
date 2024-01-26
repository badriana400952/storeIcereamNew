import { Repository } from "typeorm"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
import bcrypt = require("bcrypt")
import jwt = require("jsonwebtoken")
import { LoginSchema, RegisSchema } from "../utils/UserSchema"

class UserService {
    private readonly userRepository: Repository<User> = AppDataSource.getRepository(User)
    
    async check(req:Request,res:Response){
        const loginSesion = res.locals.loginSesion
    try {
        const check = await this.userRepository.findOne({
            where: {
                id: loginSesion.users.id
            },
            select: ["id","firstName","handphone","email","password"],
            // relations: ["product", "checkoute", "topping"]
        // relations: ['checkouts', 'checkouts.user', 'checkouts.product',  'product', 'product.user', 'product.topings', 'toping'],

        })
        const response = res.status(200).json({message:"berhasil", check: {
            id: check.id,
            firstName: check.firstName,
            handphone: check.handphone,
            email: check.email,
            checkouts: check.checkouts,

        }}) 

        return response
        
    } catch (error) {
        console.log(error);
    }
    }
    async login(req:Request,res:Response){
        try {
            const data = req.body
            const {error, value} = LoginSchema.validate(data)
            if (error){
                res.status(400).json({error: error.message})
            }

            const cekEmail = await this.userRepository.findOne({
                where: {
                    firstName: value.firstName,
                    email: value.email
                },
                select:["id","firstName","handphone","email","password"]
            })

            if(!cekEmail){
                res.status(404).json("user tidak ditemukan")
            }
            const isPsswordValid = bcrypt.compareSync(value.password, cekEmail.password)
            if(!isPsswordValid){
                return res.status(400).json({error: "Email atau password salah"})
            }

            const users =  this.userRepository.create({
                id: cekEmail.id,
                firstName: cekEmail.firstName,
                handphone: cekEmail.handphone,
                email: cekEmail.email,
                
            })
            const token = jwt.sign({users}, "bagiansecret",{expiresIn: "1h"})
            res.status(200).json({users, token})
        } catch (error) {
            console.log({error:"errorrrr"})
        }
    }
    async find(req: Request, res:Response) {
        try {
            const user = await this.userRepository.find()
            res.status(200).json(user)
        } catch (error) {
            console.log(error);
        }
    }
    async findOne(req: Request, res:Response) {
    try {
        const {id} = req.params
        const user =  await this.userRepository.findOne({
            where: {
                id:Number(id)
            }
        })
        res.status(200).json(user)
    } catch (error) {
        console.log(error);}
    }

    async create(req: Request, res:Response) {
        try {
        const data = req.body
        
        const {error, value} = RegisSchema.validate(data)
        if (error){
            res.status(400).json({error: error.message})
        }

        const BCpassword = await bcrypt.hash(value.password, 10)
        const checkEmail = await this.userRepository.count({
            where: {
                email: value.email,
                firstName: value.firstName
            }
        })

        if(checkEmail > 0) {
            res.status(400).json("Email sudah ada")
        }

        const user = this.userRepository.create({
            firstName: value.firstName,
            handphone: value.handphone,
            email: value.email,
            password: BCpassword
        })
        console.log("ini user",user)
        const userSaave = await this.userRepository.save(user)
        console.log("userSaave",userSaave)

        res.status(200).json("Berhasil di tambah")
        } catch (error) {
            console.log(error);
        }
    }

    async patch(req: Request, res:Response) {
        const {id} = req.params
        const {firstName, handphone, email, password} = req.body
        try {
            const editID = await this.userRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            editID.firstName = firstName,
            editID.handphone= handphone,
            editID.email = email,
            editID.password = password
            const saveEdit = await this.userRepository.save(editID)
            res.status(200).json('berhasil di edit')
        } catch (error) {
            console.log(error);
        }
    }
    async delete(req:Request, res:Response){
        const {id} = req.params
        try {
            const deleteID = await this.userRepository.findOne({
                where: {
                    id: Number(id)
                }
            })
            const deletes = await this.userRepository.remove(deleteID)
            res.status(200).json('Berhasil di hapus')
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UserService