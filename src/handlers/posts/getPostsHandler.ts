import { Request, Response } from 'express';
import { posts } from '../../db';
import { HttpStatus } from '../../enums';

export const getPostsHandler = (req: Request, res: Response) => {
  return res.status(HttpStatus.OK).json(posts);
};
