const historyModel = require('../models/historyModel');

exports.getPosts = (req, res) => {
  historyModel.find()
    // .select('_id headline url')
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  const history = new historyModel(req.body);

  history.save().then((result) => {
    res.json(result);
  });
};

//Maybe async...

// exports.createPost = async (req, res) => {

//   const newPost = new Post(req.body);

//   try {
//       await newPost.save();

//       res.status(201).json(newPost);
//   } catch (error) {
//       res.status(409).json({ message: error.message });
//   }
// } 
