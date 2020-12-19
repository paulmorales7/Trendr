const googleTrends = require('google-trends-api');

function gTrend() { 

googleTrends.dailyTrends({
    // trendDate: Date.now(),
    geo: 'US'
    // category: 'all'
  }, function(err, results) {
    if (err) {
      console.log(err);
    }else{
      var jsonRes = JSON.parse(results)
      // let trendRes = jsonRes.default.trendingSearchesDays[0].trendingSearches[0].title.query;

      // var resArticles = jsonRes.storySummaries.trendingStories[0].articles
      // var resTitle = jsonRes.storySummaries.trendingStories[0].

      console.log(jsonRes.default.trendingSearchesDays[0].trendingSearches[0].title.query); // .storySummaries.trendingStories[0].title

      // return trendRes
    }
  });

} 

// module.exports = { gTrend };