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

exports.deletePost = (req, response) => {
  console.log('this is req', req.params)
  historyModel.findByIdAndDelete(req.params.id, function(err, res){
    
    if (err) throw err;

    response.sendStatus(204);
  })
};