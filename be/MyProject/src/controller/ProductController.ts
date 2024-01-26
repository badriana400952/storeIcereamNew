import { Request, Response,  } from "express"
import ProductService from "../service/ProductService"
class ProductController {

    findNav(req: Request, res: Response) {
        ProductService.findNav(req, res)
    }
    find(req: Request, res: Response) {
        ProductService.find(req, res)
    }
    findOne(req: Request, res: Response) {
        ProductService.findOne(req, res)
    }
    findOness(req: Request, res: Response) {
        ProductService.findOness(req, res)
    }
    create(req: Request, res: Response){
        ProductService.create(req, res)
    }
    patch(req: Request, res: Response){
        ProductService.patch(req, res)
    }
    delete (req: Request, res: Response) {
        ProductService.delete(req, res)
    }

}

export default new ProductController