import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import getCommentService from "../../services/comments/getComment.service";

const getCommentController = async (req: Request, res: Response) => {
    const comment = await getCommentService();
    return res.status(200).json(instanceToInstance(comment));
};

export default getCommentController;