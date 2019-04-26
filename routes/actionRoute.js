//express import 
const express = require('express');

//database and router
const router = express.Router();
const actions = require('../data/helpers/actionModel')

//error reply for 404 and 500
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

const missingError = res => {
  res.status(404).json({ error: 'This action does not exist'});
};

//middleware


//export
module.exports = router;