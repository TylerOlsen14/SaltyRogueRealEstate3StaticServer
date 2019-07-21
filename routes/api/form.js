const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const BodyParser = require('body-parser');

// Form model = save form entries
const form = require('../../models/form')

router.post('/form/', async (req, res) => {
  const fullForm = new form({
    name: req.body.name, // comes from a request
    question: req.body.question,
    phoneNumber: req.body.phoneNumber,
  });
  fullForm.save().then(form => res.json(form)); //save to the database, spit out JSON
})

module.exports = router