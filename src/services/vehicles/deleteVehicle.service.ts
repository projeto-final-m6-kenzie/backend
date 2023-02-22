import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle.entity';
import AppError from '../../errors/AppErrors';

const deleteVehicleService = async (id: string) => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOneBy({ id });

  if (!vehicle) {
    throw new AppError('Vehicle not found', 404);
  }

  await vehicleRepository.delete({ id });
  return {};
};

export default deleteVehicleService;
