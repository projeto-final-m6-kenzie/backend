import { Request, Response } from "express";
import newPasswordService from "../../services/users/newPassword.service";

const newPasswordController = async (req: Request, res: Response) => {
    const token: string = req.user.token
    const { password } = req.body
    
    const success = await newPasswordService(token, password)

    if (success) {
        return res.status(202).json("Senha redefinida")
    }
}

export default newPasswordController
