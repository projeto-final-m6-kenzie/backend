import { Request, Response } from 'express';
import { IUserRequest, IUserUpdate } from '../../interfaces/users';
import { instanceToPlain } from 'class-transformer';
import updateUserService from '../../services/users/updateUser.service';

const updateUserController = async (req: Request, res: Response) => {
  const data: IUserUpdate = req.body;
  const { id } = req.params;
  const updateUser = await updateUserService(data, id);

  return res.status(202).json(instanceToPlain(updateUser));
};

export default updateUserController;
