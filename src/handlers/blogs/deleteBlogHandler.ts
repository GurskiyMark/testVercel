import { Request, Response } from 'express';
import { blogs } from '../../db';
import { HttpStatus } from '../../enums';

export const deleteBlogHandler = (req: Request<{ id: string }>, res: Response) => {
  const index = blogs.findIndex(b => b.id === req.params.id);
  if (index === -1) return res.sendStatus(HttpStatus.NotFound);

  blogs.splice(index, 1);
  return res.sendStatus(HttpStatus.NoContent);
};
