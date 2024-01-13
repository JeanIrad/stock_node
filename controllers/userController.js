const User = require('../Models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      size: users.length,
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateUser = async (req, res) => {
  try {
    // console.log(req.params);

    await user.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: 'success',
      message: 'user Updated successfully!',
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
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
