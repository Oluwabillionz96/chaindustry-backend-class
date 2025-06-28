const express = require('express')

const { addCategory, editCategory, viewCategory, viewCategorys, deleteCategory } = require('../controllers/Category')

const route = express.Router()

route.post('/add', addCategory);
route.put('/edit', editCategory);
route.get('/view-one', viewCategory);
route.get('/payment', viewCategorys);
route.delete('/delete', deleteCategory);
//search category
// route.get('/search/:name', searchCategory)

module.exports = route