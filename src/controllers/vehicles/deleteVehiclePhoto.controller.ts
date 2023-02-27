import deleteVehiclePhotoService from '../../services/vehicles/deleteVehiclePhoto.service';
import { Request, Response } from 'express';

const deleteVehicleImageController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteVehiclePhotoService(id);
  return res.status(204).json(result);
};

export default deleteVehicleImageController;
