import React, { useState, useEffect } from 'react';
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


  return (
    <React.Fragment>
      History
      <Table>
        <TableBody>
          {/* {props.tweets.length > 0 && props.tweets.map(tweet => <TwitterTweetEmbed tweetId={tweet.id_str} />)} */}

          {props.history.map((row, i) => (

            <TableRow key={i}>
              <TableCell>{row}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
