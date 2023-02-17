import { Request, Response } from "express";
import createVehicleService from "../../services/vehicles/createVehicle.service";

const createVehicleController = async (req: Request, res: Response) => {
    const data = req.body
    const user = req.user
    const vehicle = await createVehicleService(data, user)
    return vehicle
}

export default createVehicleController
