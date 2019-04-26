//express import 
const express = require('express');

//database and router
const router = express.Router();
const project = require('../data/helpers/projectModel')

//error reply for 404 and 500
const sendError = (msg, res) => {
  res.status(500).json({ error: `${msg}`});
};

const missingError = res => {
  res.status(404).json({ error: 'This project does not exist'});
};

const newError = (sts, msg, res) => {
  res.status(sts).json({ error: `${msg}` })
}

//middleware


//export
module.exports = router;