import express = require("express")
import UserController from '../controller/UserController'
import ProductController from '../controller/ProductController'
import ToppingController from '../controller/ToppingController'
import CheckouteController from '../controller/CheckouteController'
import { upload } from '../middleware/uploadFile'
import authenticate from '../middleware/auth'




const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello World!")
})

router.post('/login', UserController.login)
router.post('/users', UserController.create)


router.get('/users', authenticate,UserController.find)
router.get('/users/:id', authenticate,UserController.findOne)
router.patch('/users/:id', authenticate,UserController.patch)
router.delete('/users/:id', authenticate,UserController.delete)
router.get('/check', authenticate,UserController.check)

router.get('/product', authenticate,ProductController.find)
router.get('/productnav',ProductController.findNav)
router.get('/producted', authenticate,ProductController.findOne)
router.get('/productid/:id', authenticate,ProductController.findOness)
router.post('/product',authenticate, upload("image"), ProductController.create)
router.patch('/product/:id', authenticate,ProductController.patch)
router.delete('/product/:id', authenticate,ProductController.delete)

router.get('/toping', authenticate,ToppingController.find)
router.get('/toping/:id', authenticate,ToppingController.findOne)
router.post('/toping',authenticate, upload("image"), ToppingController.create)
router.patch('/toping/:id', authenticate,ToppingController.patch)
router.delete('/toping/:id', authenticate,ToppingController.delete)

router.get('/checkoute', authenticate,CheckouteController.find)
// router.get('/checkoute/:id', CheckouteController.findOne)
router.post('/checkoute',authenticate, CheckouteController.create)
// router.patch('/checkoute/:id', CheckouteController.patch)
router.delete('/checkoute/:id',authenticate, CheckouteController.delete)

export default router