const express = require('express');
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post(
  '/sign-up',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('state', 'State is required').not().isEmpty(),
    check('password', 'Password must be at least 6 characters long').isLength({
      min: 6,
    }),
    check('confirmPassword', 'Confirmation Password is required').exists(),
  ],
  authController.signUp
);

router.post(
  '/sign-in',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.signIn
);

router.get('/profile', authMiddleware, authController.getProfile);
router.delete('/delete-account', authMiddleware, authController.deleteAccount);

router.put(
  '/update-profile',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('state', 'State is required').not().isEmpty(),
    check('currentPassword', 'Current password is required').exists(),
  ],
  authMiddleware,
  authController.updateProfile
);

module.exports = router;
