const Product = require('../Models/productModel');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      size: products.length,
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createProduct = async (req, res) => {
  try {
    // const products = await Product.find();
    const products = await Product.create(req.body);
    res.status(201).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const product = await Product.findById(req.params);
    res.status(200).json({
      status: 'success',
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    // console.log(req.params);

    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      message: 'Product Updated successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params);
    res.status(200).json({
      status: 'success',
      message: 'Deleted successfully!',
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
