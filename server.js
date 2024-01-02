const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

app.use(morgan('dev'));
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('app running on port', port);
});
