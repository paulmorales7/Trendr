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
    // twitter stream 
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

export default function TwitterStream() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Trendr Icon</Title>

      <Table size="small">
        <TableBody>
          {/* twitter API summoning here */}

          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
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
