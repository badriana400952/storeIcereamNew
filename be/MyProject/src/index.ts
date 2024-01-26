import { AppDataSource } from "./data-source"
import router from './routes'
// import { User } from "./entity/User"
// import * as express from 'express';
import  express = require("express")
var cors = require('cors')

AppDataSource.initialize().then(async () => {
    const app = express();
    const port = 5000;

    app.use(express.json());
    app.use(cors())

    app.use('/', router)
    app.use(express.static("uploads"));

    app.listen(port, () => {
        console.log(`Express server has started on port ${port}.`)
    })
    
    app.use(cors({
        origin: 'http://localhost:5000', // Ganti dengan alamat aplikasi frontend Anda
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true, // Izinkan pengiriman kredensial (contoh: cookie) dari frontend
      }));
      
}).catch(error => console.log(error))
