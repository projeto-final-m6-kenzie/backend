import AppDataSource from '../../data-source';
import Comment from '../../entities/comment.entity';
import { ICommentsUpdate } from '../../interfaces/users';
import AppError from '../../errors/AppErrors';

const updateCommentService = async (
  data: ICommentsUpdate,
  id: string
): Promise<Comment> => {
  const commentsRepository = AppDataSource.getRepository(Comment);
  const comment = await commentsRepository.findOneBy({ id });

  if (!comment) {
    throw new AppError('User not found', 404);
  }

  await commentsRepository.update(id, {
    text: data.text ? data.text : comment.text,
  });

  const commentUpdated = await commentsRepository.findOneBy({ id });
  return commentUpdated!;
};

export default updateCommentService;
