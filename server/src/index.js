require('dotenv').config();

const Express = require('express');
const ExpressValidator = require('express-validator');
const BodyParser = require('body-parser');
const Path = require('path');
const Logger = require('morgan');
const { NOT_FOUND } = require('http-status-codes');

const { runScraper, loadScraperCron } = require('./bin/postScraper');
const { sendNotFound } = require('./utils/http-error');
const celebRoute = require('./celebs');
const postRoute = require('./posts');


// Constants
const PORT = process.env.PORT || 9000;
const HOST = process.env.HOST || 'localhost';
const CLIENT_BUILD_PATH = Path.join(__dirname, '../../client/build');

// App
const app = Express();

app.use(Express.static(CLIENT_BUILD_PATH));

app.use(Logger('combined'));
app.use(ExpressValidator());
app.use(BodyParser.json());

app.use('/api', [
  celebRoute,
  postRoute,
]);

const notFoundError = (req, res) => res.status(NOT_FOUND).json(sendNotFound());

// Index request return the React app, so it can handle routing.
app.get('/', (request, response) => {
  response.sendFile(Path.join(CLIENT_BUILD_PATH, 'index.html'));
});

app.all('*', notFoundError);

app.listen(PORT, HOST, async () => {
  // Do somethings when server is ready
  // runScraper();
  loadScraperCron();
});

console.log(`Running on http://${HOST}:${PORT}`);

module.exports = app; // for testing
