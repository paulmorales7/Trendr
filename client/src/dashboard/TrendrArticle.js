import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import './TrendrArticle.css'


const rows = [
  
];

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
      {props.data ? (
        <Table key={props.data.article.articleTitle}>
          <TableBody><img src={props.data.image}></img></TableBody>
          <TableBody>{props.data.article.articleTitle.replace(/&#39;/g, "'").replace("&amp;", "&").replace(/&quot;/g, '"')}</TableBody>
          <TableBody>{props.data.article.snippet.replace(/&#39;/g, "'").replace("&amp;", "&").replace(/&quot;/g, '"')}</TableBody>
          <TableBody><a href={props.data.article.url}>Click here for the article!</a></TableBody>
        </Table>
      ) : null}
    </React.Fragment>
  );
}
