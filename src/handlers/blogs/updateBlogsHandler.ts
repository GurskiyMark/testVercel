import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { blogs } from '../../db';
import { HttpStatus } from '../../enums';

export const updateBlogHandler = (req: Request<{ id: string }>, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array({ onlyFirstError: true }).map(err => ({
      message: (err as any).msg,
      field: (err as any).param,
    }));
    return res.status(HttpStatus.BadRequest).json({ errorsMessages: formattedErrors });
  }

  const blog = blogs.find(b => b.id === req.params.id);
  if (!blog) return res.sendStatus(HttpStatus.NotFound);

  blog.name = req.body.name;
  blog.description = req.body.description;
  blog.websiteUrl = req.body.websiteUrl;

  return res.sendStatus(HttpStatus.NoContent);
};
