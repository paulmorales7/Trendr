const Post = require('../models/post');

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select('_id body')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

// exports.createPost = (req, res) => {
//   const post = new Post(req.body);

//   post.save((err, result) => {
//     if (err) {
//         return res.status(400).json({
//             error: err
//         });
//     }
//     res.json(result);
// });
// };
  
exports.createPost = async (req, res) => {

  const newPost = new Post(req.body);

  try {
      await newPost.save();

      res.status(201).json(newPost);
  } catch (error) {
      res.status(409).json({ message: error.message });
  }
}