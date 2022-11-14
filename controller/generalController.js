'use strict'

const generalService = require('../services/generalService')
const annualProgress = require('../services/annualProgress')

exports.getAll = async (req, res) => {
  try {
    const result = await generalService.getAll()
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

exports.getAnnualProgress = async (req, res) => {
  try {
    const result = await annualProgress.getAll()
    res.json(result.recordset)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}
