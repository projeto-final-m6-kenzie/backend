import { Request, Response } from 'express';
import { IUserLogin } from '../../interfaces/users';
import userLoginService from '../../services/users/userLogin.service';

const userLoginController = async (req: Request, res: Response) => {
    const data: IUserLogin = req.body
    const token = await userLoginService(data)

    return res.status(200).json({token: token})
}

export default userLoginController