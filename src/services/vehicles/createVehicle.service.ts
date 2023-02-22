import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import Vehicle from "../../entities/vehicle.entity";
import VehicleImage from "../../entities/vehicle_image.entity";
import AppError from "../../errors/AppErrors";
import { IAuthReq } from "../../interfaces/users";
import { IVehicle } from "../../interfaces/vehicles";

const createVehicleService = async (data: IVehicle, user: IAuthReq) => {
    if (!user.isAnnouncer) {
        throw new AppError("Apenas anunciantes podem realizar essa operação")
    }

    const userRepository = AppDataSource.getRepository(User)
    const userRequest = await userRepository.findOneBy({id: user.id})

    if (!userRequest) {
        throw new AppError("User not found", 404)
    }

    const {coverPhoto, ...dataVehicle} = data

    const vehicleImageRepository = AppDataSource.getRepository(VehicleImage)
    const vehicleImage = vehicleImageRepository.create(coverPhoto)

    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    const vehicle = vehicleRepository.create(dataVehicle)
   
    vehicle.user = userRequest
    vehicle.coverPhoto = vehicleImage

    await vehicleRepository.save(vehicle).catch(err => {
        if (err) {
          throw new AppError("Requisição incorreta. Confira os campos obrigatórios")
        }
    })

    return vehicle
}

export default createVehicleService
