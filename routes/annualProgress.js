'use strict'

const express = require('express')
const annualProgressRouter = express.Router()
const generalController = require('../controller/generalController')
//const verifyToken = require("../middleware/verifyToken");

annualProgressRouter.get('/', generalController.getAnnualProgress)

module.exports = annualProgressRouter
