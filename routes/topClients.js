'use strict'

const express = require('express')
const topClients = express.Router()
const topController = require('../controller/topController')
//const verifyToken = require("../middleware/verifyToken");

topClients.get('/', topController.getClients)

module.exports = topClients
