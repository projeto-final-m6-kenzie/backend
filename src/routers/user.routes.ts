import { Router } from 'express';
import createUserController from '../controllers/createUser.controller';
import deleteUserController from '../controllers/deleteUser.controller';
import getUserByIdController from '../controllers/getUserById.controller';
import getUsersController from '../controllers/getUsers.controller';
import updateUserController from '../controllers/updateUser.controller';
import userCreateValidationMiddleware from '../middlewares/userCreate.middlware';

// import userCreateController from "../controllers/users/userCreate.controller";
// import userListController from "../controllers/users/userList.controller";
// import userPatchController from '../controllers/users/userPatch.controller';

// import userAuthMiddleware from '../middlewares/userAuth.middleware';
// import userDeleteController from '../controllers/users/userDelete.controller';

const userRouter = () => {
  const router = Router();
  router.post('', userCreateValidationMiddleware, createUserController);
  router.get('', getUsersController);
  router.get('/:id', getUserByIdController); //middle de auth
  router.patch('/:id', updateUserController); //middle de auth
  router.delete('/:id', deleteUserController); //middle de auth

  return router;
};

export default userRouter;
