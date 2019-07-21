const express = require('express')
const app = express()

app.use(express.urlencoded())

app.post('/submit-form', (req, res) => {
  const name = req.body.name
  const question = req.body.question
  const phonenumber = req.body.phonenumber
})