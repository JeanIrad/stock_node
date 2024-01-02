const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productRouter');

const app = express();
app.use(express.json());

mongoose
  .connect(process.env.DB)
  .then(() => console.log('DB connected Successfully!'))
  .catch((err) => console.log('error!', err));

app.use('/api/products', router);
// app.all('*', (err, req, res, next) => {
//   res.status(404).json({
//     status: 'Not found',
//     message: err,
//   });
// });

module.exports = app;
