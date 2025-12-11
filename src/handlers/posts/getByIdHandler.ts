import { Request, Response } from 'express';
import { posts } from '../../db';
import { HttpStatus } from '../../enums';

export const getPostByIdHandler = (req: Request<{ id: string }>, res: Response) => {
  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.sendStatus(HttpStatus.NotFound);
  return res.status(HttpStatus.OK).json(post);
};
