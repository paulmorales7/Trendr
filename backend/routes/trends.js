const router = require("express").Router();
const gTrend = require("../controllers/gTrend");
const client = require('../controllers/twitter')

router.route("/:trend").get(async (req, res) => {
  console.log(req.params.trend);
  try {
    const results = await gTrend(req.params.trend);
    var jsonRes = JSON.parse(results);

    console.log(
      jsonRes.storySummaries.trendingStories[0]
    );
    const trendTopic =
      jsonRes.storySummaries.trendingStories[0].articles[0].articleTitle
    console.log(trendTopic)
    client.get(
      "search/tweets",
      { q: trendTopic },
      function (error, tweets, response) {
        console.log("****")
        console.log(tweets.statuses[0].id_str)
        const results = {
          ...tweets,
          googleResults:
          {
            article: jsonRes.storySummaries.trendingStories[0].articles[0],
            image: jsonRes.storySummaries.trendingStories[0].image.imgUrl
          }
        }
        res.json(results)
      }
    );
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
module.exports = router;
