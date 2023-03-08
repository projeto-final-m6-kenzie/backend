import { Request, Response } from 'express';
import { IComments, ICommentsUpdate } from '../../interfaces/users';
import updateCommentService from '../../services/comments/updateComments.service';

const updateCommentController = async (req: Request, res: Response) => {
  const data: ICommentsUpdate = req.body;
  const { id } = req.params;
  const updateComment = await updateCommentService(data, id);

  return res.status(202).json(updateComment);
};

export default updateCommentController;
