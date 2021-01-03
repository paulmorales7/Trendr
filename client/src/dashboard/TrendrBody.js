import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// This is a placeholder for API data to fill into the segments of the component

function createData(id, title, image, mainContent, trendURL) {
  return { id, title, image, mainContent, trendURL };
}

const rows = [
  createData(
    0,
    // id
  ),
  createData(
    1,
    // title (trend)
    "SPORT TRENDS"
  ),
  createData(
    2,
    // image
    "<HELLO I AM AN IMAGE>"
  ),
  createData(
    3,
    // main content
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function TrendrBody(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Trendr Icon</Title>
      <Table size="small">

        {/* this creates vertical columns, when we want horizontal rows */}
        {/* <TableHead>
          <TableRow>
            <TableCell>Trend</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Main Content</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Sale Amount</TableCell>
          </TableRow>
        </TableHead> */}

        <TableBody>
          {Array.isArray(props.data) ? props.data.map((row) => (
            <TableRow key={row.articleTitle}>
              <TableCell>{row.articleTitle}</TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell>{row.snippet}</TableCell>
              <TableCell>{row.url}</TableCell>
            </TableRow>
          )): null }
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="## API URL HERE ##" onClick={preventDefault}>
          Go to source page
        </Link>
      </div>
    </React.Fragment>
  );
}
