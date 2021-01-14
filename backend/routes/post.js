const express = require('express');
const { getPosts, createPost, deletePost  } = require('../controllers/post');

const router = express.Router();

router.get('/history', getPosts);
router.post('/save', createPost);
router.delete('/delete/:id', deletePost);
module.exports = router;
