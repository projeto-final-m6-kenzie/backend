import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import getVehiclesService from "../../services/vehicles/getVehicles.service";

const getVehiclesController = async (req: Request, res: Response) => {
    const vehicle = await getVehiclesService();
    return res.status(200).json(instanceToInstance(vehicle));
  };
  
  export default getVehiclesController;
  