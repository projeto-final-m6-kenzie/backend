import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle.entity';
import AppError from '../../errors/AppErrors';
import { hash } from 'bcrypt';
import { IVehicleUpdate } from '../../interfaces/vehicles';

const updateVehicleService = async (
  data: IVehicleUpdate,
  id: string
): Promise<Vehicle> => {
  const vehicleRepository = AppDataSource.getRepository(Vehicle);
  const vehicle = await vehicleRepository.findOneBy({ id });

  if (!vehicle) {
    throw new AppError('Vehicle not found', 404);
  }

  await vehicleRepository.update(id, {
    brand: data.brand ? data.brand : vehicle.brand,
    model: data.model ? data.model : vehicle.model,
    coverPhoto: data.coverPhoto ? data.coverPhoto : vehicle.coverPhoto,
    year: data.year ? data.year : vehicle.year,
    published: data.published ? data.published : vehicle.published,
    price: data.price ? data.price : vehicle.price,
    description: data.description ? data.description : vehicle.description,
    km: data.km ? data.km : vehicle.km,
  });

  const vehicleUpdated = await vehicleRepository.findOneBy({ id });
  return vehicleUpdated!;
};

export default updateVehicleService;
