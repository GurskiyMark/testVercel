import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { posts, blogs, PostType } from '../../db';
import { HttpStatus } from '../../enums';
import { v4 as uuidv4 } from 'uuid';

export const createPostHandler = (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const formattedErrors = errors.array({ onlyFirstError: true }).map(err => ({
      message: (err as any).msg,
      field: (err as any).param,
    }));
    return res.status(HttpStatus.BadRequest).json({ errorsMessages: formattedErrors });
  }

  const blog = blogs.find(b => b.id === req.body.blogId);

  const newPost: PostType = {
    id: uuidv4(),
    title: req.body.title,
    shortDescription: req.body.shortDescription,
    content: req.body.content,
    blogId: req.body.blogId,
    blogName: blog ? blog.name : 'unknown',
  };

  posts.push(newPost);
  return res.status(HttpStatus.Created).json(newPost);
};
