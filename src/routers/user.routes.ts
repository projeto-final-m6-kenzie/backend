import { Router } from 'express';
import createUserController from '../controllers/users/createUser.controller';
import deleteUserController from '../controllers/users/deleteUser.controller';
import getUserByIdController from '../controllers/users/getUserById.controller';
import getUsersController from '../controllers/users/getUsers.controller';
import updateUserController from '../controllers/users/updateUser.controller';

import userAuthMiddleware from '../middlewares/userAuth.middleware';
import userCreateValidationMiddleware from '../middlewares/userCreate.middlware';


const userRouter = () => {
  const router = Router();
  router.post('', userCreateValidationMiddleware, createUserController);
  router.get('', getUsersController);
  router.get('/:id', getUserByIdController); 
  router.patch('/:id', userAuthMiddleware, updateUserController); //middle de auth
  router.delete('/:id', userAuthMiddleware, deleteUserController); //middle de auth

  return router;
};

export default userRouter;
