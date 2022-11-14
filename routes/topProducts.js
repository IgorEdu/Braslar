'use strict'

const express = require('express')
const topProducts = express.Router()
const topController = require('../controller/topController')
//const verifyToken = require("../middleware/verifyToken");

topProducts.get('/', topController.getProducts)

module.exports = topProducts
