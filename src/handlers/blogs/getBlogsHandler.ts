import { Request, Response } from 'express';
import { blogs } from '../../db';
import { HttpStatus } from '../../enums';

export const getBlogsHandler = (req: Request, res: Response) => {
  return res.status(HttpStatus.OK).json(blogs);
};
