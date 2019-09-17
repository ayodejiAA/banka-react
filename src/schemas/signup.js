import Joi from 'joi-browser';
import setCustomMessage from '../helpers/validationHelper';

export default {
  firstName: Joi.string()
    .trim()
    .strict()
    .max(15)
    .required()
    .regex(/^[a-zA-Z]+$/)
    .error(setCustomMessage('first name')),
  lastName: Joi.string()
    .trim()
    .strict()
    .max(15)
    .required()
    .regex(/^[a-zA-Z]+$/)
    .error(setCustomMessage('last name')),

  email: Joi.string()
    .trim()
    .strict()
    .min(2)
    .max(255)
    .email()
    .required()
    .error(setCustomMessage('email')),

  password: Joi.string()
    .min(5)
    .max(20)
    .required()
    .strict()
    .regex(/^(?=.*[0-9]+.*)(?=.*[A-Z]+.*)[0-9a-zA-Z]+/)
    .error(setCustomMessage('password', 'password')),

  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .strict()
    .error(setCustomMessage('confirm password'))
};
