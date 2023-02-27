import { Request, Response } from "express";
import resetPasswordService from "../../services/users/resetPassword.service";

const resetPasswordController = async (req: Request, res: Response) => {
    const { email } = req.body
    await resetPasswordService(email)

    return res.status(201).json({"resultado": "Senha redefinida"})
}

export default resetPasswordController
