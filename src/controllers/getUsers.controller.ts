import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import getUsersService from '../services/getUsers.service';

const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();
  return res.status(200).json(instanceToPlain(users));
};

export default getUsersController;
