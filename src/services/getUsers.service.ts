import AppDataSource from '../data-source';
import User from '../entities/user.entity';
import AppError from '../errors/AppErrors';

const getUsersService = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();

  if (!users.length) {
    throw new AppError("There's no users available");
  }

  return users;
};

export default getUsersService;
