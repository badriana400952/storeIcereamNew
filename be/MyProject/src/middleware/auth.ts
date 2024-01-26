import { NextFunction, Request, Response } from "express"
import jwt = require("jsonwebtoken")

const authenticate = (req:Request, res:Response, next:NextFunction) => {
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({error: "Unauthorized"})
    }
    const token = authHeader.split(" ")[1]

    try {
        const loginSesion = jwt.verify(token, "bagiansecret")
        console.log("this is login sesion", loginSesion)
        res.locals.loginSesion = loginSesion
        next()
    } catch (error) {
        return res.status(401).json({error: "Unauthorized"})
    }
}
export default authenticate