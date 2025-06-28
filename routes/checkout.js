const express = require('express')
const { cartController, paymentController } = require('../controllers/checkout')

const route = express.Router()

route.get('/cart', cartController)
route.post('/payment', paymentController)

module.exports = route