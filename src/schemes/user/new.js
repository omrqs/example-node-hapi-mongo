import Joi from '@hapi/joi';

export default Joi.object({
  fullname: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
});
