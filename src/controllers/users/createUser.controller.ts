import { Request, Response } from 'express';
import { IUser } from '../../interfaces/users';
import createUserService from '../../services/users/createUser.service';
import { instanceToInstance } from 'class-transformer';
import { IAddress } from '../../interfaces/address';

const createUserController = async (req: Request, res: Response) => {
  const address: IAddress = req.address
  const user: IUser = req.newUser;
  const createUser = await createUserService(user, address);
  return res.status(201).json(instanceToInstance(createUser));
};

export default createUserController;
