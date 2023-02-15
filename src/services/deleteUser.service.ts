import AppDataSource from '../data-source';
import AppError from '../errors/AppErrors';
import User from '../entities/user.entity';

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await userRepository.delete({ id });
  return {};
};

export default deleteUserService;
