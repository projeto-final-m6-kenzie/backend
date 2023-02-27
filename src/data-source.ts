import { DataSource } from "typeorm"
import "dotenv/config"
import User from "./entities/user.entity"
import Vehicle from "./entities/vehicle.entity"
import Comment from "./entities/comment.entity"
import Address from "./entities/address.entity"
import VehicleImage from "./entities/vehicle_image.entity"
import {database1677508044390} from "./migrations/1677508044390-database"


const AppDataSource = new DataSource(
    process.env.NODE_ENV === "test" ?
    {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/entities/*.ts"]
    } :
    {
        type: "postgres",
        url: process.env.DATABASE_URL,
        ssl: process.env.NODE_ENV === "production"
            ? {rejectUnauthorized: false} : false,
        logging: true,
        synchronize: false,
        entities: process.env.NODE_ENV === "production" ? [ User, Comment, Vehicle, VehicleImage, Address ] : [ User, Comment, Vehicle, VehicleImage, Address ],
        migrations: process.env.NODE_ENV === "production" ? [database1677508044390] : [database1677508044390]
    }
)

export default AppDataSource