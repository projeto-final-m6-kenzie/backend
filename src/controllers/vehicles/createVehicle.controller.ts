import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { IUser } from "../../interfaces/users";
import createVehicleService from "../../services/vehicles/createVehicle.service";

const createVehicleController = async (req: Request, res: Response) => {
    const data = req.body
    const user = req.user
    const vehicle = await createVehicleService(data, user)
    return res.json(instanceToInstance(vehicle))
}

export default createVehicleController
