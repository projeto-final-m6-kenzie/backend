import { Request, Response } from 'express';
import deleteUserService from '../services/deleteUser.service';

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteUser = await deleteUserService(id);

  return res.status(204).json();
};

export default deleteUserController;
