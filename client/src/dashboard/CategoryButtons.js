import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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

export default function CategoryButtons() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Categories</Title>

      <Typography color="textSecondary" className={classes.categoryIcon}>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={preventDefault}>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
          <Button>Four</Button>
          <Button>Five</Button>
          <Button>Six</Button>
        </ButtonGroup>
      </Typography>      
    </React.Fragment>
  );
}
