import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import updateUserService from '../../services/users/updateUser.service';
import { IVehicleUpdate } from '../../interfaces/vehicles';

const updateVehicleController = async (req: Request, res: Response) => {
  const data: IVehicleUpdate = req.body;
  const { id } = req.params;
  const updatedVehicle = await updateUserService(data, id);

  return res.status(202).json(instanceToPlain(updatedVehicle));
};

export default updateVehicleController;
