const dotenv = require('dotenv');
const morgan = require('morgan');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
  .connect(process.env.DB)
  .then(() => console.log('DB connected Successfully!'))
  .catch((err) => console.log('error!', err));
app.use(morgan('dev'));
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log('app running on port', port);
});
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
});
// console.log(process.env.NODE_ENV);
