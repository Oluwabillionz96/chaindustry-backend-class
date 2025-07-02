const express = require('express')

const { addCategory } = require('../controllers/category');
const validateCategoryData = require('../middlewares/categories/addCategoryValidation');

const route = express.Router()

route.post('/add', validateCategoryData,  addCategory);

module.exports = route