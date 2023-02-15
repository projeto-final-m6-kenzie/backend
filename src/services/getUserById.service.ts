import AppDataSource from '../data-source';
import User from '../entities/user.entity';
import AppError from '../errors/AppErrors';

const getUserByIdService = async (id: string): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  return user;
};

export default getUserByIdService;
