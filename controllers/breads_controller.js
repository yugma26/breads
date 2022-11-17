const express = require('express')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
  res.send('This is the index at /breads')
})

module.exports = breads

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

