const express = require('express')

const { addProduct, viewProduct } = require('../controllers/product');
const validateData = require('../middlewares/products/addProductValidation');

const route = express.Router()

route.post('/add', validateData, addProduct);
// route.put('/edit', editProduct);
route.get('/view-one/:id', viewProduct);
// route.get('/view', viewProducts);
// route.delete('/delete', deleteProduct);

module.exports = route