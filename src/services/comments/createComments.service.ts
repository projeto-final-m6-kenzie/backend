import { IComments, IUser } from './../../interfaces/users/index';
import AppDataSource from "../../data-source"

import Comment from '../../entities/comment.entity';
import User from '../../entities/user.entity';
import AppError from '../../errors/AppErrors';
import Vehicle from '../../entities/vehicle.entity';

const createCommentsService = async (data: IComments, idVehicle: string, userData: any) => {
    const userRepository = AppDataSource.getRepository(User)
    console.log("user data: ", userData)
    const user = await userRepository.findOneBy({id:userData.id})
    console.log("usuário: ", user)
    if(!user){
        throw new AppError('Usuario nao encontrado',404)
    }

    const vehicleRepository = AppDataSource.getRepository(Vehicle)
    const vehicle = await vehicleRepository.findOneBy({id: idVehicle})

    if(!vehicle){
        throw new AppError('Anuncio nao encontrado',404)
    }

    const commentRepository = AppDataSource.getRepository(Comment)
    const comment = commentRepository.create(data)
    comment.user = user
    comment.vehicle = vehicle
    await commentRepository.save(comment)

    return comment
}

export default createCommentsService
