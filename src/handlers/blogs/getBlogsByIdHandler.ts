import { Request, Response } from 'express';
import { blogs } from '../../db';
import { HttpStatus } from '../../enums';

export const getBlogByIdHandler = (req: Request<{ id: string }>, res: Response) => {
  const blog = blogs.find(b => b.id === req.params.id);
  if (!blog) return res.sendStatus(HttpStatus.NotFound);
  return res.status(HttpStatus.OK).json(blog);
};
