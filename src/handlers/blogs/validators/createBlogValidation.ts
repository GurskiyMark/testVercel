import { body } from 'express-validator';

export const createBlogValidation = [
  body('name')
    .exists().withMessage('Поле "name" обязательно')
    .isString().withMessage('Поле "name" должно быть строкой')
    .isLength({ max: 15 }).withMessage('Максимальная длина "name" — 15 символов'),

  body('description')
    .exists().withMessage('Поле "description" обязательно')
    .isString().withMessage('Поле "description" должно быть строкой')
    .isLength({ max: 500 }).withMessage('Максимальная длина "description" — 500 символов'),

  body('websiteUrl')
    .exists().withMessage('Поле "websiteUrl" обязательно')
    .isString().withMessage('Поле "websiteUrl" должно быть строкой')
    .isLength({ max: 100 }).withMessage('Максимальная длина "websiteUrl" — 100 символов')
    .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
    .withMessage('websiteUrl должен соответствовать шаблону https://example.com'),
];
