import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { Icon } from '@material-ui/core';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './TrendrArticle.css'
import axios from "axios";


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  table: {
    display: 'flex',
  },
  borderedImg: {
    border: '2px solid black',
  },
  paper: {
    display: 'flex',
  },
  favoritesIcon: {
    marginLeft: "auto",
  },
  null: {
    paper: {
      display: 'none'
    },
  },
}));

// onClick function -here- to save Trendr title & URL to history component

export default function TrendrArticle(props) {
  const classes = useStyles();

  const saveHistory = (headline, url) => {
    axios.post("/save", {headline, url})
    .then((res) => {
      console.log(res)
    })
  }

  return (

    <React.Fragment>
      Trendr Article
      {}
      {props.data ? (

        <Table key={props.data.article.articleTitle}>
          <TableBody className={classes.table}><img className={classes.borderedImg} src={props.data.image}></img><StarBorderIcon className={classes.favoritesIcon} onClick={() => {saveHistory(props.data.article.articleTitle, props.data.article.url)}}/></TableBody>
          <br></br>
          <TableBody>{props.data.article.articleTitle.replace(/&#39;/g, "'").replace("&amp;", "&").replace(/&quot;/g, '"')}</TableBody>
          <TableBody>{props.data.article.snippet.replace(/&#39;/g, "'").replace("&amp;", "&").replace(/&quot;/g, '"')}</TableBody>
          <TableBody><a href={props.data.article.url}>Click here for the article!</a></TableBody>
        </Table>
      ) : null}
    </React.Fragment>
  );
}
