const express = require('express');
const { getPosts, createPost } = require('../controllers/post');

const router = express.Router();

router.get('/', getPosts);
router.post('/post', createPost);

module.exports = router;
