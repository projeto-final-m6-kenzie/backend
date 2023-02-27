import { Router } from 'express';
import createVehicleController from '../controllers/vehicles/createVehicle.controller';
import deleteVehicleImageController from '../controllers/vehicles/deleteVehiclePhoto.controller';
import getVehicleByIdController from '../controllers/vehicles/getUserById.controller';
import getVehiclesController from '../controllers/vehicles/getVehicles.controller';
import updateVehicleController from '../controllers/vehicles/updateVehicle.controller';
import userAuthMiddleware from '../middlewares/userAuth.middleware';
import deleteVehicleService from '../services/vehicles/deleteVehicle.service';

const vehicleRouter = () => {
  const router = Router();
  router.post('', userAuthMiddleware, createVehicleController);
  router.get('', getVehiclesController);
  router.get('/:id', getVehicleByIdController);
  router.patch('/:id', userAuthMiddleware, updateVehicleController);
  router.delete('/:id', userAuthMiddleware, deleteVehicleService);
  router.delete(
    '/photos/:id',
    userAuthMiddleware,
    deleteVehicleImageController
  );

  return router;
};

export default vehicleRouter;
