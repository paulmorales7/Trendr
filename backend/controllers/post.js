const Post = require('../models/post');

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select('_id body')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const post = new Post(trend);

  post.save((err, result) => {
    if (err) {
        return res.status(400).json({
            error: err
        });
    }
    res.json(result);
});
};

