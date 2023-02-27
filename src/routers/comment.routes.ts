import { Router } from 'express';
import createCommentsController from '../controllers/comments/createComments.controller';

import userAuthMiddleware from '../middlewares/userAuth.middleware';


const commentRouter = () => {
  const router = Router();
  router.post('/:vehicleId', userAuthMiddleware, createCommentsController);
  // router.patch('/:id', userAuthMiddleware, updateUserController); //middle de auth
  // router.delete('/:id', userAuthMiddleware, deleteUserController); //middle de auth

  return router;
};

export default commentRouter;
