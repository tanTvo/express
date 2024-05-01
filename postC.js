const Post = require('./post')

let posts = []; 

exports.getAllPosts = (req, res) => {
    res.json(posts);
}

exports.createPost = (req, res) => {
    const {title, content, author} = req.body;
    const newPost = new Post(posts.length + 1, title, content, author);
    posts.push(newPost);
    res.status(201).json(newPost);
};

exports.deletePost = (req, res) => {
    
}