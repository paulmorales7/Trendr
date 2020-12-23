const router = require("express").Router();
const gTrend = require("../utils/gTrend");
const client = require('../utils/twitter')

router.route("/:trend").get(async (req, res) => {
  console.log(req.params.trend);
  try {
    const results = await gTrend(req.params.trend);
    var jsonRes = JSON.parse(results);

    console.log(
      jsonRes.storySummaries.trendingStories[0].articles[0].articleTitle
    );
    const trendTopic =
      jsonRes.storySummaries.trendingStories[0].articles[0].articleTitle;
    client.get(
      "search/tweets",
      { q: trendTopic },
      function (error, tweets, response) {
        res.json(tweets)
      }
    );
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
module.exports = router;
