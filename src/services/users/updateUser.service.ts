import AppDataSource from '../../data-source';
import User from '../../entities/user.entity';
import { IUserRequest, IUserUpdate } from '../../interfaces/users';
import AppError from '../../errors/AppErrors';
import { hash } from 'bcrypt';

const updateUserService = async (
  data: IUserUpdate,
  id: string
): Promise<User> => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError('User not found', 404);
  }

  await userRepository.update(id, {
    name: data.name ? data.name : user.name,
    email: data.email ? data.email : user.email,
    phone: data.phone ? data.phone : user.phone,
    password: data.password ? await hash(data.password, 10) : user.password,
  });

  const userUpdated = await userRepository.findOneBy({ id });
  return userUpdated!;
};

export default updateUserService;
