import express from 'express';
import { HttpStatus } from './enums';
import { blogsRouter } from './routes/blogs-router';
import { postsRouter } from './routes/posts-router';

export const app = express();
app.use(express.json());

app.get('/', (_req, res) => {
  res.status(HttpStatus.OK).send('Server is up');
});

app.use('/blogs', blogsRouter);
app.use('/posts', postsRouter);