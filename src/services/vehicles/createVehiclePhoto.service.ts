import AppDataSource from '../../data-source';
import Vehicle from '../../entities/vehicle.entity';
import VehicleImage from '../../entities/vehicle_image.entity';
import AppError from '../../errors/AppErrors';

const createVehiclePhotoService = async (data: any, vehicleId: string) => {
  const imgRepository = AppDataSource.getRepository(VehicleImage);
  const vehicleRepository = AppDataSource.getRepository(Vehicle);

  const vehicle = await vehicleRepository.findOneBy({ id: vehicleId });

  if (!vehicle) {
    throw new AppError('Vehicle not found', 404);
  }

  for (let i = 0; i < data.length; i++) {
    const photoUrl = data[i];

    const photo = imgRepository.create({
      url: photoUrl,
      vehicle,
    });

    await imgRepository.save(photo);
  }
};

export default createVehiclePhotoService;
