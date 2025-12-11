import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { blogs } from '../../db';
import { HttpStatus } from '../../enums';
import { v4 as uuidv4 } from 'uuid';

export const createBlogHandler = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array({ onlyFirstError: true }).map(err => ({
      message: (err as any).msg,
      field: (err as any).param,
    }));
    return res.status(HttpStatus.BadRequest).json({ errorsMessages: formattedErrors });
  }

  const newBlog = {
    id: uuidv4(),
    name: req.body.name,
    description: req.body.description,
    websiteUrl: req.body.websiteUrl,
  };

  blogs.push(newBlog);
  return res.status(HttpStatus.Created).json(newBlog);
};
