import { Express } from 'express';
import userRouter from './user.routes';

const appRouter = (app: Express) => {
  app.use('/users', userRouter());
};

export default appRouter;
