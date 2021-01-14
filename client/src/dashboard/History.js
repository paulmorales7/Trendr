import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './History.css'
import axios from "axios";



const rows = [];

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
      Favorites
      <Table>
        <TableBody>

          {props.history.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.headline}</TableCell>
              <TableCell><a href={row.url}>{row.url}</a></TableCell>
              <button onClick={ () => {props.deleteHistory(row._id)}}>Remove</button>
            </TableRow>
          ))}

        </TableBody>
      </Table>
    </React.Fragment>
  );
}