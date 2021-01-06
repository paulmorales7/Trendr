import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './TwitterStream.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from 'react-twitter-embed';


const rows = [
  
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TwitterStream(props) {
  const classes = useStyles();
  const [tweets, setTweets] = useState([]);
  console.log('This is tweets', tweets, typeof(tweets))
  console.log('This is tweets', props.tweets, typeof(props.tweets))
  return (
    <React.Fragment>
      Tweets
      <Table>
        <TableBody>
          {props.tweets.length > 0 && props.tweets.map(tweet => <TwitterTweetEmbed tweetId={tweet.id_str} />)}

          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
