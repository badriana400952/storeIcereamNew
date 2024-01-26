import { Request, Response } from "express";
import CheckoutService from "../service/CheckoutService";


class CheckoutController{

    find(req:Request, res:Response) {
        CheckoutService.find(req, res)
    }

    create(req:Request, res:Response) {
        CheckoutService.create(req, res)
    }

    delete(req:Request, res:Response) {
        CheckoutService.delete(req, res)
    }

}
export default new CheckoutController