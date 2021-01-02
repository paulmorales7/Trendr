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

      <Typography color="primary" className={classes.categoryIcon}>
        <ButtonGroup variant="text" aria-label="contained primary button group" onClick={preventDefault}>
          <Button id="s">Sports</Button>
          <Button id="m">Health</Button>
          <Button id="t">Science/Tech</Button>
          <Button id="b">Business</Button>
          <Button id="e">Entertainment</Button>
          <Button id="all">All</Button>
        </ButtonGroup>
      </Typography>      
    </React.Fragment>
  );
}
