const express = require('express');
const postC = require('../postC');

const router = express.Router();

router.get('/', postC.getAllPosts);

router.post('/', postC.createPost);

module.exports = router;

