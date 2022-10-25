const mongoose = require('mongoose')

const Leads = mongoose.model('leads!', {
    name: String,
    email: String,
      })

  module.exports = Leads