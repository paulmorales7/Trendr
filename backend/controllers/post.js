const Post = require('../models/post');
const gTrend = require('./gTrend')

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .select('_id body')
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => console.log(err));
};

exports.createPost = (req, res) => {
  try {
    const results = await gTrend(req.params.trend);
    var jsonRes = JSON.parse(results);

    console.log(
      jsonRes.storySummaries.trendingStories[0]
    );
    const trendTopic =
      jsonRes.storySummaries.trendingStories[0].articles[0].articleTitle
    console.log(trendTopic)


  const post = new Post(trendTopic);

  post.save().then((result) => {
    res.json({
      post: result,
    });
  });
}


//////////////////////////////////////////////
