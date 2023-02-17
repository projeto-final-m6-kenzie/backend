import AppDataSource from "../../data-source";
import User from "../../entities/user.entity";
import Vehicle from "../../entities/vehicle.entity";
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

    const vehicleRepository = AppDataSource.getRepository(Vehicle)

    const vehicle = vehicleRepository.create(data)
    vehicle.user = userRequest
    await vehicleRepository.save(vehicle)

    //##########
    console.log(vehicle)
    if (!vehicle) {
        throw new AppError("A requisição é inválida")
    }
    //##########

    return vehicle
}

export default createVehicleService
