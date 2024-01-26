import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import {Product} from "./entity/Product"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "123456789",
    database: "tugas-massundus",
    synchronize: true,
    logging: false,
    entities: ["src/entity/*.ts"],
    migrations: ["src/migration/*.ts"],
    subscribers: [],
})
