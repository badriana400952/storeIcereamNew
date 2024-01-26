
import joy = require("joi")

export const LoginSchema = joy.object({
    email: joy.string().email().required(),
    password: joy.string().required()
}) 

export const RegisSchema = joy.object({
    firstName: joy.string().required(),
    handphone: joy.string().required(),
    email: joy.string().email().required(),
    password: joy.string().required()
    
})