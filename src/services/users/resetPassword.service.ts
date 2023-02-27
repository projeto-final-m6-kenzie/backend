import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"
import AppError from "../../errors/AppErrors"

const resetPasswordService = async (email: string) => {
    if (!email) {
        throw new AppError("Email não informado na requisição")
    } 

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ email })
    
    if (!user) {
        throw new AppError("Usuário não encontrado")
    }

    
}

export default resetPasswordService
