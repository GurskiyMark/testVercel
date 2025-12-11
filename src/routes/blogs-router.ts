import { Router } from 'express';
import { basicAuthMiddleware } from '../middlewares/basicAuthMiddleware';
import { createBlogValidation } from '../handlers/blogs/validators/createBlogValidation';
import { getBlogByIdHandler } from '../handlers/blogs/getBlogsByIdHandler';
import { getBlogsHandler } from '../handlers/blogs/getBlogsHandler';
import { createBlogHandler } from '../handlers/blogs/createBlogHandler';
import { updateBlogHandler } from '../handlers/blogs/updateBlogsHandler';
import { deleteBlogHandler } from '../handlers/blogs/deleteBlogHandler';


export const blogsRouter = Router();

blogsRouter.get('/', getBlogsHandler);
blogsRouter.get('/:id', getBlogByIdHandler);

blogsRouter.post('/', basicAuthMiddleware, createBlogValidation, createBlogHandler);
blogsRouter.put('/:id', basicAuthMiddleware, createBlogValidation, updateBlogHandler);
blogsRouter.delete('/:id', basicAuthMiddleware, deleteBlogHandler);
