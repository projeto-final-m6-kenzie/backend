import AppDataSource from '../data-source';
import User from '../entities/user.entity';
import { IUser } from '../interfaces/users';
import { v4 as uuidv4 } from 'uuid';

const createUserService = async (data: IUser) => {
  const userRepository = AppDataSource.getRepository(User);

  const newUser = userRepository.create(data);
  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
