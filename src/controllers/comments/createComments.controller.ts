import { Request, Response } from 'express';
import { IComments } from '../../interfaces/users';
import { instanceToInstance } from 'class-transformer';
import createCommentsService from '../../services/comments/createComments.service';

const createCommentsController = async (req: Request, res: Response) => {
  const comment: IComments = req.newComments;
  const userId = req.user.id
  const vehicleId = req.params.vehicleId
  const createUser = await createCommentsService(comment, userId, vehicleId);
  return res.status(201).json(instanceToInstance(createUser));
};

export default createCommentsController;
