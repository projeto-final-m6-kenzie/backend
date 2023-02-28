import { Request, Response } from 'express';
import { IComments, IUser } from '../../interfaces/users';
import { instanceToInstance } from 'class-transformer';
import createCommentsService from '../../services/comments/createComments.service';

const createCommentsController = async (req: Request, res: Response) => {
  const comment: IComments = req.newComments;
  const user = req.user
  const vehicleId = req.params.vehicleId
  const createUser = await createCommentsService(comment, vehicleId, user);
  return res.status(201).json(instanceToInstance(createUser));
};

export default createCommentsController;
