const Joi = require("joi");
const ErrorResponse = require("../../utils/ErrorResponse");

const schema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number().required(),
    images: Joi.any().required(),
    quantity: Joi.number().min(1).required()
});

const validateData = async (req, res, next) => {
    try {
        const result = await schema.validateAsync(req.body)
        req.body = result
        next()
    } catch (err){
        console.log(err.message)
        next(new ErrorResponse(err.message, 400))
    }
}

module.exports = validateData


