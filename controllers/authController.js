const jwt = require('jsonwebtoken');
const User = require('../Models/userModel');
const bcrypt = require('bcryptjs');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};

exports.signup = async (req, res) => {
  try {
    const { name, email, password, passwordConfirm } = req.body;
    const newUser = await User.create({
      name,
      email,
      password,
      passwordConfirm,
    });
    console.log('new user created successfully!');
    const token = signToken(newUser._id);
    res.status(201).json({
      status: 'success',
      token,
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!password || !email)
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide password and email',
      });
    const user = await User.findOne({ email }).select('+password');
    if (!user || !(await user.checkPassword(password, user.password))) {
      return res.status(400).json({
        status: 'fail',
        message: 'Invalid user or password',
      });
    }
    token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
