const router = require("express").Router();
const gTrend = require("../helpers/gTrend");
const client = require('../helpers/twitter')

router.route("/:trend").get(async (req, res) => {
  console.log(req.params.trend);
  try {
    const results = await gTrend(req.params.trend);
    var jsonRes = JSON.parse(results);

    console.log(
      jsonRes.storySummaries.trendingStories[0].articles[0].url
    );
    const trendTopic =
      jsonRes.storySummaries.trendingStories[0].articles[0].url
    client.get(
      "search/tweets",
      { q: trendTopic },
      function (error, tweets, response) {
        console.log(tweets)
        res.json(tweets)
      }
    );
  } catch (err) {
    res.status(400).json("Error: " + err);
  }
});
module.exports = router;
