import { IUser, IUserRequest } from './../../interfaces/users/index';
import * as express from 'express';

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        isAnnouncer: boolean;
      };
      newUser: IUser;
    }
  }
}
