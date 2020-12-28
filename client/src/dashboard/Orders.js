import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// This is a placeholder for API data to fill into the segments of the component

function createData( id, title, image, mainContent, trendURL) {
  return { id, title, image, mainContent, trendURL };
}

const rows = [
  createData(
    0,
    // id
  ),
  createData(
    1,
    // title (trend) -or- twitter stream (other components become null) 
  ),
  createData(
    2, 
    // image
  ),
  createData(
    3,
    // main content
  ),
  createData(
    4,
    // URL, et al
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

export default function Orders() {
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.image}</TableCell>
              <TableCell>{row.mainContent}</TableCell>
              <TableCell>{row.trendURL}</TableCell>
            </TableRow>
          ))}
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
