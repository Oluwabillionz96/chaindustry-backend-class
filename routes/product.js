const express = require('express')

const { addProduct, editProduct, viewProduct, viewProducts, deleteProduct } = require('../controllers/product')

const route = express.Router()

route.post('/add', addProduct);
route.put('/edit', editProduct);
route.get('/view-one', viewProduct);
route.get('/payment', viewProducts);
route.delete('/delete', deleteProduct);

module.exports = route