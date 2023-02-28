import { Request, Response } from 'express';
import deleteCommentService from '../../services/comments/deleteComment.service';

const deleteCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteCommentService(id);
  return res.status(204).json(result);
};

export default deleteCommentController;
