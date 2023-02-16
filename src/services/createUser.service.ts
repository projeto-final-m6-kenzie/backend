import AppDataSource from '../data-source';
import User from '../entities/user.entity';
import { IUser } from '../interfaces/users';
import { v4 as uuidv4 } from 'uuid';
import { IAddress } from '../interfaces/address';
import createAddressService from './address/createAdress.service';

const createUserService = async (data: IUser, address: IAddress) => {
  const userRepository = AppDataSource.getRepository(User);

  const userAddress = await createAddressService(address)

  const newUser = userRepository.create(data);
  newUser.address = userAddress
  await userRepository.save(newUser);

  return newUser;
};

export default createUserService;
