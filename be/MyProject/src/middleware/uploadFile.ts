
import { NextFunction, Request,Response } from "express";
// import * as multer from "multer"
import  multer = require("multer")

export const upload = (filedName: string) => {
    const storage = multer.diskStorage({
        destination: function(_req, _res, cb){
            cb(null, "./upload")
        },

        filename: function(_req, file, cb){
            const uniqueName = Date.now()
            cb(null, file.fieldname + "-" + uniqueName + "jpg")
        }
    })

    const uploadFile = multer({storage: storage})
    return(req:Request, res:Response, next:NextFunction) => {
        uploadFile.single(filedName)(req,res, function(err:any){
            if(err){
                res.status(400).json({error: err.message})
            }
            res.locals.filename = req.file.filename
            next()
        })
    }
}