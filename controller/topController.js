'use strict'

const topClients = require('../services/topClients')
const topProducts = require('../services/topProducts')
const topVendors = require('../services/topVendors')
const topStates = require('../services/topStates')

exports.getClients = async (req, res) => {
  try {
    const result = await topClients.getClients()
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getProducts = async (req, res) => {
  try {
    const result = await topProducts.getProducts()
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getVendors = async (req, res) => {
  try {
    const result = await topVendors.getVendors()
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getStates = async (req, res) => {
  try {
    const result = await topStates.getStates()
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
