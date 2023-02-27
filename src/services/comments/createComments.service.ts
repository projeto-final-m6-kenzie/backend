import { IComments } from './../../interfaces/users/index';
import AppDataSource from "../../data-source"

import Comment from '../../entities/comment.entity';
import User from '../../entities/user.entity';
import AppError from '../../errors/AppErrors';
import Vehicle from '../../entities/vehicle.entity';

const createCommentsService = async (data: IComments, idUser: string, idVehicle: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({id: idUser})

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
