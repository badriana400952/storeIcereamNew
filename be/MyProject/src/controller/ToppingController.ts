import { Request, Response } from "express"
import TopingService from "../service/TopingService"

class ToppingController {
    find(req: Request, res: Response) {
        TopingService.find(req,res)
    }
    findOne(req: Request, res: Response) {
        TopingService.findOne(req,res)
    }
    create(req: Request, res: Response) {
        TopingService.create(req,res)
    }
    patch(req: Request, res: Response) {
        TopingService.patch(req,res)
    }
    delete(req: Request, res: Response) {
        TopingService.delete(req,res)
    }
}
export default new ToppingController