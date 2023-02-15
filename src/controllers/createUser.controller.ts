import { Request, Response } from 'express';
import { IUser } from '../interfaces/users';
import createUserService from '../services/createUser.service';
import { instanceToPlain, instanceToInstance } from 'class-transformer';

const createUserController = async (req: Request, res: Response) => {
  const user: IUser = req.newUser;
  const createUser = await createUserService(user);
  return res.status(201).json(instanceToInstance(createUser));
};

export default createUserController;
