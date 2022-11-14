'use strict'

const express = require('express')
const topVendors = express.Router()
const topController = require('../controller/topController')
//const verifyToken = require("../middleware/verifyToken");

topVendors.get('/', topController.getVendors)

module.exports = topVendors
