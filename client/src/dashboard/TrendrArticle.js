import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './TrendrArticle.css'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  null: {
    paper: {
      display: 'none'
    },
  },
}));

export default function TrendrArticle(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      Trendr Article
      <Table>
        <TableBody>
          {props.data ? (
            <TableRow key={props.data.article.articleTitle}>
            <TableCell><img src={props.data.image}></img></TableCell>
            <TableCell>{props.data.article.articleTitle}</TableCell>
            <TableCell>{props.data.article.snippet}</TableCell>
            <TableCell><a href={props.data.article.url}>Click here for the article!</a></TableCell>
            </TableRow>
          ) : null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
