import { Router } from 'express';
import { basicAuthMiddleware } from '../middlewares/basicAuthMiddleware';
import { getPostsHandler } from '../handlers/posts/getPostsHandler';
import { getPostByIdHandler } from '../handlers/posts/getByIdHandler';
import { createPostHandler } from '../handlers/posts/createPosthandler';
import { deletePostHandler } from '../handlers/posts/deletePostHandler';
import { updatePostHandler } from '../handlers/posts/updatePostHandler';
import { createPostValidation } from '../handlers/blogs/validators/createPostsValidation';



export const postsRouter = Router();

postsRouter.get('/', getPostsHandler);
postsRouter.get('/:id', getPostByIdHandler);

postsRouter.post('/', basicAuthMiddleware, createPostValidation, createPostHandler);
postsRouter.put('/:id', basicAuthMiddleware, createPostValidation, updatePostHandler);
postsRouter.delete('/:id', basicAuthMiddleware, deletePostHandler);
