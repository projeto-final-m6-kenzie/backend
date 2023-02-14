import { IUser } from './../interfaces/users/index';
import { SchemaOf } from 'yup';
import * as yup from 'yup';
import { v4 } from 'uuid';
import { hashSync } from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import AppDataSource from '../data-source';
import User from '../entities/user.entity';

export const userCreateSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup
    .string()
    .transform(() => v4())
    .default(() => v4())
    .notRequired(),

  name: yup
    .string()
    .required('Name is required')
    .max(70, 'Maximum of 70 characters'),

  email: yup
    .string()
    .email()
    .required('Email is required')
    .max(70, 'Maximum of 70 characters'),

  isAnnouncer: yup.bool().required('IsAnnouncer is required'),

  phone: yup.string().required('Phone is required'),

  password: yup
    .string()
    .transform((pwd) => hashSync(pwd, 10))
    .required('Password is required'),

  createdAt: yup
    .date()
    .transform(() => new Date())
    .default(() => new Date())
    .notRequired(),

  updatedAt: yup
    .date()
    .transform(() => new Date())
    .default(() => new Date())
    .notRequired(),
});

const userCreateValidationMiddleware =
  () => async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User);
    const userFind = await userRepository.findOneBy({ email: req.body.email });
    if (userFind) {
      return res.status(400).json({ message: 'This user already exists' });
    }

    try {
      const data = req.body;

      const validateData: IUser = await userCreateSchema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.newUser = validateData;
    } catch (error: any) {
      return res.status(400).json({
        error: error.message,
      });
    }

    next();
  };

export default userCreateValidationMiddleware;
