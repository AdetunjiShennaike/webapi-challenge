//imports
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

//define server
const server = express();
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('dev'));

//import routes
const actionRoute = require('./routes/actionRoute');
const projectRoute = require('./routes/actionRoute');

//add middleware and env item
const question = process.env.QUESTION

//setup routes
server.use('/api/actions', actionRoute);
server.use('/api/projects', projectRoute);

//test if it's on
server.get('/', (req, res) => {
  res.send( `"Quick question" ... "Yeah"... "${question}"` );
})


//export
module.exports = server;