import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle.entity';

const getVehiclesService = async (): Promise<Vehicle[]> => {
  const userRepository = AppDataSource.getRepository(Vehicle);
  const vehicles = await userRepository.find();

  return vehicles;
};

export default getVehiclesService;