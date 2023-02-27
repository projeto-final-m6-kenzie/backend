import { Express } from 'express';
import commentRouter from './comment.routes';
import userRouter from './user.routes';
import vehicleRouter from './vehicle.routes';

const appRouter = (app: Express) => {
  app.use('/users', userRouter());
  app.use('/vehicles', vehicleRouter())
  app.use('/comment', commentRouter())

};

export default appRouter;
