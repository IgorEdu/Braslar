'use strict'

const express = require('express')
const topRouter = express.Router()
const topController = require('../controller/topController')
//const verifyToken = require("../middleware/verifyToken");

topRouter.get('/', topController.getAll)

module.exports = topRouter
