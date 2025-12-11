import { Request, Response } from 'express';
import { posts } from '../../db';
import { HttpStatus } from '../../enums';

export const deletePostHandler = (req: Request<{ id: string }>, res: Response) => {
  const index = posts.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.sendStatus(HttpStatus.NotFound);

  posts.splice(index, 1);
  return res.sendStatus(HttpStatus.NoContent);
};
