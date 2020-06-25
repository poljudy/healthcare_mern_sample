const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const config = require('config');
const auth = require('../middleware/auth');
const {check, validationResult} = require('express-validator');

// const User = require('../models/User');
const db = require('../models');
// @route     GET api/auth
// @desc      Get logged in user
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await db.User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route     POST api/auth
// @desc      Auth user & get token
// @access    Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    const {email, password, role} = req.body;

    try {
      let user = await db.User.findOne({email});

      if (!user) {
        return res.status(400).json({msg: 'Invalid Credentials'});
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({msg: 'Invalid Credentials'});
      }

      const payload = {
        user: {
          id: user.id,
          role: user.role
        },
      };
// add name and role above?
      jwt.sign(
        payload,
        // config.get('jwtSecret'),
        process.env.jwtSecret,
        {
          expiresIn: 360000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({token});
        },
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  },
);

module.exports = router;
