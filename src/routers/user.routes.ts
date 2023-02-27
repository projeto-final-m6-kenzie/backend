import { Router } from 'express';
import createUserController from '../controllers/users/createUser.controller';
import deleteUserController from '../controllers/users/deleteUser.controller';
import getUserByIdController from '../controllers/users/getUserById.controller';
import getUsersController from '../controllers/users/getUsers.controller';
import resetPasswordController from '../controllers/users/resetPassword.controller';
import updateUserController from '../controllers/users/updateUser.controller';
import userLoginController from '../controllers/users/userLogin.controller';

import userAuthMiddleware from '../middlewares/userAuth.middleware';
import userCreateValidationMiddleware from '../middlewares/userCreate.middlware';


const userRouter = () => {
  const router = Router();
  router.post('', userCreateValidationMiddleware, createUserController);
  router.post('/login', userLoginController)
  router.post('/new-password', resetPasswordController)
  router.get('', getUsersController);
  router.get('/:id', getUserByIdController); 
  router.patch('/:id', userAuthMiddleware, updateUserController); //middle de auth
  router.delete('/:id', userAuthMiddleware, deleteUserController); //middle de auth

  return router;
};

export default userRouter;
