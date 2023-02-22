import { Request, Response } from 'express';
import deleteVehicleService from '../../services/vehicles/deleteVehicle.service';

const deleteVehicleController = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteVehicleService(id);

  return res.status(204).json("Veículo deletado");
};

export default deleteVehicleController;
