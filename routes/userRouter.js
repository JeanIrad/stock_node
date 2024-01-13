const { Router } = require('express');
const authController = require('../controllers/authController');
const { signup, login } = authController;
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController');

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);
module.exports = router;
