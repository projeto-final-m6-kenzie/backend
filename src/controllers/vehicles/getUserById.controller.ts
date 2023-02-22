import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import getVehicleByIdService from '../../services/vehicles/getVehicleById.service';

const getVehicleByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const vehicle = await getVehicleByIdService(id);
  return res.status(200).json(instanceToPlain(vehicle));
};

export default getVehicleByIdController;
