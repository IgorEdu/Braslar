'use strict'

const express = require('express')
const topStates = express.Router()
const topController = require('../controller/topController')
//const verifyToken = require("../middleware/verifyToken");

topStates.get('/', topController.getStates)

module.exports = topStates
