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

exports.deletePost = (res, req) => {
  historyModel.findByIdAndDelete(id, function(err, res){
    if (err){ 
      console.log(err) 
  } 
  else{ 
      console.log("Deleted: ", res); 
  } 
  })
};