import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './History.css'


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
  const [history, setHistory] = useState([]);

  const getSportsData = 
   sessionStorage.getItem("sports button");

   console.log('this is the props in history', props.item)
  return (
    <React.Fragment>
      History
      <Table>
        <TableBody>
          {/* {props.tweets.length > 0 && props.tweets.map(tweet => <TwitterTweetEmbed tweetId={tweet.id_str} />)} */}
          {props.item}
         
          {/* {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
