import { Router } from 'express';
import createCommentsController from '../controllers/comments/createComments.controller';
import deleteCommentController from '../controllers/comments/deleteComment.controller';
import getCommentController from '../controllers/comments/getComments.controller';

import userAuthMiddleware from '../middlewares/userAuth.middleware';


const commentRouter = () => {
  const router = Router();
  router.post('/:vehicleId', userAuthMiddleware, createCommentsController);
  router.get('', getCommentController );
  router.delete('/:id', userAuthMiddleware, deleteCommentController);

  return router;
};

export default commentRouter;
