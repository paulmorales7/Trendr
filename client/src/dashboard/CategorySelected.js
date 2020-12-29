import * as React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}


// we'll attempt to fix an image from the API call here
const useStyles = makeStyles({
  categoryIcon: {
    flex: 1,
  },
});

export default function CategorySelected() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Selected Category</Title>
      <Typography color="textPrimary">
        #live date#
      </Typography>      
      <Typography  color="textPrimary">
        #live clickcount#
      </Typography>
      <div>
        <Link color="primary" href="## API URL LINK HERE ##" onClick={preventDefault}>
          Go to source page
        </Link>
      </div>
    </React.Fragment>
  );
}
