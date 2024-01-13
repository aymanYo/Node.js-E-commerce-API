import joi from 'joi'
import { generalFields } from '../../middleware/validation.js'


export const createProduct = joi.object({
    name: joi.string().min(2).max(50).required(),
    description: joi.string().min(2).max(15000),
    size: joi.array(),
    colors: joi.array(),
    stock: joi.number().positive().integer().min(1).required(),
    price: joi.number().positive().min(1).required(),
    discount: joi.number().positive().min(1),

    categoryId: generalFields.id,
    subcategoryId: generalFields.id,
    brandId: generalFields.id,
    file: joi.object({
        mainImage: joi.array().items(generalFields.file.required()).length(1).required(),
        subImages: joi.array().items(generalFields.file).min(1).max(5),

    }).required()

}).required()


export const updateProduct = joi.object({
    name: joi.string().min(2).max(50),
    description: joi.string().min(2).max(15000),
    size: joi.array(),
    colors: joi.array(),
    stock: joi.number().positive().integer().min(1),
    price: joi.number().positive().min(1),
    discount: joi.number().positive().min(1),

    categoryId: generalFields.id,
    subcategoryId: generalFields.id,
    brandId: generalFields.id,
    file: joi.object({
        mainImage: joi.array().items(generalFields.file).max(1),
        subImages: joi.array().items(generalFields.file).min(1).max(5),

    }).required()

}).required()