import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"
import AppError from "../../errors/AppErrors"
import jwt from 'jsonwebtoken'
import { hashSync } from "bcrypt"

const newPasswordService = async (token: string, newPassword: string) => {
    return new Promise(async (resolve, reject) => {
        const userRepository = AppDataSource.getRepository(User);
    
        try {
            const decodedToken = jwt.verify(token, process.env.SECRET_KEY as string);

            if (typeof decodedToken === "object") {
                const email = decodedToken.email;
                const user = await userRepository.findOneBy({ email });
            
                if (!user) {
                    throw new AppError("Usuário não encontrado");
                }

                if (!newPassword) {
                    throw new AppError("Nova senha não foi informada");
                }

                if (decodedToken.finality) {
                    const newPasswordEncrypted = hashSync(newPassword, 10);
            
                    await userRepository.update(user.id, {
                        password: newPasswordEncrypted,
                    });
                }
                resolve(true);
            }
                
        } catch (error: any) {
            reject(new AppError(error.message))
        }
    });
}

export default newPasswordService
