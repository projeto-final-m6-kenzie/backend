import AppDataSource from '../../data-source';
import Vechicle from '../../entities/vehicle.entity';
import AppError from '../../errors/AppErrors';

const getUserByIdService = async (id: string): Promise<Vechicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vechicle);
  const vehicle = await vehicleRepository.findOneBy({ id });

  if (!vehicle) {
    throw new AppError('Vechicle not found', 404);
  }

  return vehicle;
};

export default getUserByIdService;
