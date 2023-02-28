import jwt from "jsonwebtoken"
import AppDataSource from "../../data-source"
import User from "../../entities/user.entity"
import nodemailer from 'nodemailer'
import AppError from "../../errors/AppErrors"
import Transporter from "../../transporterNodemailer"

const resetPasswordService = async (email: string) => {
    if (!email) {
        throw new AppError("Email não informado na requisição")
    } 

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ email })
    
    if (!user) {
        throw new AppError("Usuário não encontrado")
    }

    const token = jwt.sign({ email: user.email, finality: true }, process.env.SECRET_KEY as string, { expiresIn: '1h' })
    
    const mailOptions = {
        from: `Grupo 4 - Alex <${process.env.SMTP_USER}>`,
        to: user.email,
        subject: 'Recuperação de senha',
        text: `Olá ${user.name},\n\nVocê solicitou uma redefinição de senha em nosso sistema. Para continuar o processo, utilize o seguinte token:\n\n${token}\n\nAtenciosamente,\nEquipe de suporte`,
    };    
    
    Transporter.transporter.sendMail(mailOptions).then(info => {
        console.log("Message sent: %s", info.messageId)
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
        return "Email enviado"
    }).catch((err) => {
        throw new AppError(err.message)
    })
    
}

export default resetPasswordService
