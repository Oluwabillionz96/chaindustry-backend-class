const express = require('express')

const { addShop } = require('../controllers/shop');
const validateShopData = require('../middlewares/shops/addShopValidation');

const route = express.Router()

route.post('/add', validateShopData,  addShop);

module.exports = route