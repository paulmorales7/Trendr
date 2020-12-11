const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const Entry = require('../../models/Entry');
const User = require('../../models/User');
const checkObjectId = require('../../middleware/checkObjectId');

// Route to create entry (saved search)
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    //   const user = await User.findById(req.user.id).select('-password');
      const newEntry = new Entry({
        text: req.body.text,
        user: req.user.id
      });

      const entry = await newEntry.save();

      res.json(entry);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// Route to fetch entries
router.get('/', auth, async (req, res) => {
  try {
    const entries = await Post.find().sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;