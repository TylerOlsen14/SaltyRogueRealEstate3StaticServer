const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const FormSchema = new Schema({
  name: {
    type: String,
    required: false
  },
  question: {
    type: String,
    required: false
  },
  phoneNumber: {
    type: number,
    required: false
  }
})

module.exports = form = mongoose.model('ReactForm', FormSchema)