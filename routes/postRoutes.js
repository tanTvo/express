const express = require('express');
const postC = require('../postC');

const router = express.Router();

router.get('/', postC.getAllPosts);

router.post('/', postC.createPost);

router.delete('/:id', postC.deletePost)

module.exports = router;

