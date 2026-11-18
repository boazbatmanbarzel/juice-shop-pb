const express = require('express')
const { sequelize } = require('../models')

const router = express.Router()

// GET /rest/training/products?q=apple
router.get('/rest/training/products', async (req, res, next) => {
  const q = req.query.q || ''
  try {
    const [products] = await sequelize.query(
      "SELECT id, name, price FROM Products WHERE name LIKE :search AND deletedAt IS NULL",
      {
        replacements: { search: `%${q}%` },
        type: sequelize.QueryTypes.SELECT
      }
    )
    res.json({ status: 'success', data: products })
  } catch (err) {
    next(err)
  }
})

module.exports = router
