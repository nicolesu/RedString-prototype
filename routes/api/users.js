const express = require('express');
const router = express.Router();

// User Model
const User = require('../../models/User');

// @route   GET api/items
// @desc    Get All events
// @access  Public
router.get('/', (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(users => res.json(users));
});

// @route   POST api/items
// @desc    Create an event
// @access  Public
router.post('/', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    nickname: req.body.nickname,
    username: req.body.username,
    password: req.body.password


  });

  newUser.save().then(user => res.json(user));
});

// @route   DELETE api/items/:id
// @desc    Delete an event
// @access  Public
router.delete('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;