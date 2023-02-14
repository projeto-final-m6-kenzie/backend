import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import getUserByIdService from '../services/getUserById.service';

const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdService(id);
  return res.status(200).json(instanceToPlain(user));
};

export default getUserByIdController;
