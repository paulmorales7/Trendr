const googleTrends = require('google-trends-api');
const client = require('./twitter')

function gTrend(trendQuery) { 

return googleTrends.realTimeTrends({
    // trendDate: Date.now(),
    geo: 'US',
    category: trendQuery
  })
  // .then(results => {
  //   // if (err) {
  //   //   console.log(err);
  //   // }else{
  //     var jsonRes = JSON.parse(results)
  //     // let trendRes = jsonRes.default.trendingSearchesDays[0].trendingSearches[0].title.query;

  //     // var resArticles = jsonRes.storySummaries.trendingStories[0].articles
  //     // var resTitle = jsonRes.storySummaries.trendingStories[0].

  //     console.log(jsonRes.storySummaries.trendingStories[0].articles[0].articleTitle); 
  //     const trendTopic = jsonRes.storySummaries.trendingStories[0].articles[0].articleTitle
  //     client.get('search/tweets', {q: trendTopic}, function(error, tweets, response) {
  //       console.log(tweets);
  //    });
  //     // return trendRes
  //   })
  

} 

module.exports =  gTrend ;