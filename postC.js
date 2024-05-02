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
    const postId = req.params.id;
    const index = post.findIndex(post => post.id === parseInt(postId));
    if (index !== -1) {
        posts.splice(index, 1);
         res.status(204).send();
    }else{
        res.status(404).json({message: 'Not found'})
    }
   
};

exports.updatePost = (req, res) => {
    const postId = req.params.id;
    const {title, content, author}= req.body;
    const postToUpdate = posts.find(post => post.id ===parseInt(postId));
    if(postToUpdate){
        postToUpdate.title = title || postToUpdate.title;
        postToUpdate.content = content || postToUpdate.content;
        postToUpdate.author = author || postToUpdate.author;
        res.json(postToUpdate);
    }else{
        res.status(404).json({message: 'Not found'});
    }
}

