import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { posts, blogs } from '../../db';
import { HttpStatus } from '../../enums';

export const updatePostHandler = (req: Request<{ id: string }>, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array({ onlyFirstError: true }).map(err => ({
      message: (err as any).msg,
      field: (err as any).param,
    }));
    return res.status(HttpStatus.BadRequest).json({ errorsMessages: formattedErrors });
  }

  const post = posts.find(p => p.id === req.params.id);
  if (!post) return res.sendStatus(HttpStatus.NotFound);

  const blog = blogs.find(b => b.id === req.body.blogId);

  post.title = req.body.title;
  post.shortDescription = req.body.shortDescription;
  post.content = req.body.content;
  post.blogId = req.body.blogId;
  post.blogName = blog ? blog.name : 'unknown';

  return res.sendStatus(HttpStatus.NoContent);
};
