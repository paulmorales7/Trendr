import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  hroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #790909 65%, #ff4b22 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  sroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b22 65%, #d6ce18 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  mroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #d6ce18 65%, #32c613 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  troot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #32c613 65%, #00cfff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  broot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00cfff 65%, #5d45ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  eroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5d45ff 65%, #b545ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #b545ff 65%, #790909 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  null: {
    paper: {
      display: 'none'
    },
  },
}));

export default function TrendrBody(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Trendr Icon</Title>
      <Table className={classes.null}>
        <TableBody>
          {props.data ? (
            <TableRow key={props.data.article.articleTitle}>
              <TableCell>
                <img src={props.data.image}></img>
              </TableCell>
              <TableCell>
                {props.data.article.articleTitle}
                </TableCell>
              <TableCell>
                {props.data.article.snippet}
                </TableCell>
              <TableCell>
                <a href={props.data.article.url}>Click here for the article!</a>
              </TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
