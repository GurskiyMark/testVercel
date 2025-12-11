import { Request, Response, NextFunction } from 'express';
import { HttpStatus } from '../enums';

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'qwerty';

export const basicAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.sendStatus(HttpStatus.Unauthorized);

  const [authType, token] = authHeader.split(' ');

  if (authType !== 'Basic' || !token) return res.sendStatus(HttpStatus.Unauthorized);

  const credentials = Buffer.from(token, 'base64').toString('utf-8');
  const [username, password] = credentials.split(':');

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.sendStatus(HttpStatus.Unauthorized);
  }

  next();
};
