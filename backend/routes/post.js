const express = require('express');
const { getPosts, createPost } = require('../controllers/post');

const router = express.Router();

router.get('/', getPosts);
router.post('/save', createPost);

module.exports = router;
