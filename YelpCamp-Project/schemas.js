const Joi = require("joi")
const campgroundSchema = Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    // images: Joi.string().required(),
    location: Joi.string().required(),
    description: Joi.string().required(),
    deleteImages:Joi.array().optional()
}).required()


const reviewSchema = Joi.object({
    rating: Joi.number().required().min(1).max(5),
    body:Joi.string().required()    
}).required()

module.exports = {campgroundSchema,reviewSchema}