'use strict'

const express = require('express')
const generalRouter = express.Router()
const generalController = require('../controller/generalController')
//const verifyToken = require("../middleware/verifyToken");

generalRouter.get('/', generalController.getAll)

module.exports = generalRouter
