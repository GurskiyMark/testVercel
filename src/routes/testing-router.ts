import { Router } from 'express';
import { blogs, posts } from '../db';
import { HttpStatus } from '../enums';

export const testingRouter = Router();

testingRouter.delete('/all-data', (_req, res) => {
  blogs.length = 0;
  posts.length = 0;
  res.sendStatus(HttpStatus.NoContent); // 204
});
