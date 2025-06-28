const express = require('express')

const { addProduct, editProduct, viewProduct, viewProducts, deleteProduct } = require('../controllers/product');
const validateData = require('../middlewares/products/addProductValidation');

const route = express.Router()

route.post('/add', validateData, addProduct);
route.put('/edit', editProduct);
route.get('/view-one', viewProduct);
route.get('/payment', viewProducts);
route.delete('/delete', deleteProduct);

module.exports = route