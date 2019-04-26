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

//add middleware

//setup routes
server.use('/api/actions', actionRoute);
server.use('/api/projects', projectRoute);

//test if it's on
server.get('/', (req, res) => {
  res.send( 'Are we on the air right now?' );
})


//export
module.exports = server;