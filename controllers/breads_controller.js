const express = require('express')
const breads = express.Router()
const bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.send('breads')
})
// INDEX
breads.get('/', (req, res) => {
    res.render('index'),
    {
        breads: Bread,
        title: 'index page'
      }
  // res.send(Bread)
})


// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  

  module.exports = breads