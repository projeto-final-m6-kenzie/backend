import { Router } from "express";
import createVehicleController from "../controllers/vehicles/createVehicle.controller";
import userCreateValidationMiddleware from "../middlewares/userCreate.middlware";

const vehicleRouter = () => {
    const router = Router();
    router.post('', userCreateValidationMiddleware, createVehicleController);
  
    return router;
  };
  
  export default vehicleRouter;