import AppError from '../../errors/AppErrors';
import AppDataSource from '../../data-source';
import Comment from '../../entities/comment.entity';

const deleteCommentService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const comment = await commentRepository.findOneBy({ id });

  await commentRepository.delete({ id });

  return comment;
};

export default deleteCommentService;
