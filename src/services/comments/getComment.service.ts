import AppDataSource from '../../data-source';
import Comment from '../../entities/comment.entity';
import Vehicle from '../../entities/vehicle.entity';

const getCommentService = async (): Promise<Comment[]> => {
  const userRepository = AppDataSource.getRepository(Comment);
  const comment = await userRepository.find();

  return comment;
};

export default getCommentService;