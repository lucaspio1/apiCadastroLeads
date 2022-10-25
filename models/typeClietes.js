const mongoose = require('mongoose')

const Leads = mongoose.model('leads!', {
    name: String,
    email: String,
    data_cadastro: { type: Date, default: Date.now }
      })

  module.exports = Leads