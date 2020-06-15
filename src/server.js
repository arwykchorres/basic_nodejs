const express = require('express');
const bodyParser = require('body-parser');
// logger
const logger = require('morgan');
// Helmet helps protect the application from some known web vulnerabilities by correctly setting HTTP headers.
const helmet = require('helmet');
// middleware to compress the size of http responses (gzip compression)
const compression = require('compression');
const cors = require('cors');
const config = require('./config');
const sequelize = require('./dal/connection');
const handleErrors = require('./api/errors/handleErrors');

const app = express();
const basePath = '/api';

app.set('env', config.env || 'development');

if (config.env !== 'production') {
  app.use(logger('dev')); // combined
}

// app.disable('x-powered-by'); helmet disable this header automatically

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());

app.use(basePath, require('./api/routes/user.routes'));
app.use(basePath, require('./api/routes/movie.routes'));
app.use('*', (req, res) => res.status(404).json({ error: 'not found' }));
app.use(handleErrors);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection with DB has been established successfully.');
    app.listen(config.port, () => {
      console.log(`Server started on http://localhost:${config.port}${basePath}  (${config.env})`);
    });
  })
  .catch(console.error);
