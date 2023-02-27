import VehicleImage from '../../entities/vehicle_image.entity';
import AppError from '../../errors/AppErrors';
import AppDataSource from '../../data-source';

const deleteVehiclePhotoService = async (id: string) => {
  const imgRepository = AppDataSource.getRepository(VehicleImage);
  const img = await imgRepository.findOneBy({ id });

  if (!img) {
    throw new AppError('Photo not found', 404);
  }

  await imgRepository.delete({ id });

  return img;
};

export default deleteVehiclePhotoService;
