require('dotenv').config();

const Express = require('express');
const ExpressValidator = require('express-validator');
const BodyParser = require('body-parser');
const Path = require('path');
const Logger = require('morgan');
const Mongoose = require('mongoose');
const ConnectMongo = require('connect-mongo');
const ExpressSession = require('express-session');
const { NOT_FOUND } = require('http-status-codes');

const { sendNotFound } = require('./utils/http-error');

// Constants
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';
const CLIENT_BUILD_PATH = Path.join(__dirname, '../../client/build');

// App
const app = Express();

// Mongoose config
Mongoose.Promise = global.Promise;

// Connect mongo
const mongoUrl = `${process.env.MONGO_URL}?reconnectTries=10&reconnectInterval=3000`;

Mongoose.connect(mongoUrl);
Mongoose.connection.on('open', () => {
  // Static files
  app.use(Express.static(CLIENT_BUILD_PATH));

  app.use(Logger('combined'));
  app.use(ExpressValidator());
  app.use(BodyParser.json());


  const notFoundError = (req, res) => res.status(NOT_FOUND).json(sendNotFound());

  // Index request return the React app, so it can handle routing.
  app.get('/', (request, response) => {
    response.sendFile(Path.join(CLIENT_BUILD_PATH, 'index.html'));
  });

  app.all('*', notFoundError);

  app.listen(PORT, HOST, async () => {
    console.log(`Running on http://${HOST}:${PORT}`);
  });
});

// Mongoose connection error handler
Mongoose.connection.on('error', (err) => {
  console.log('Mongoose failed to connect', err);      // eslint-disable-line no-console
  Mongoose.disconnect();
});

// Mongoose connection close handler
Mongoose.connection.on('close', () => {
  console.log('Mongoose connection closed');                      // eslint-disable-line no-console
});

module.exports = app; // for testing
