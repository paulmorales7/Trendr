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
          <Button style={{ color:"red" }} id="h">Top Trends</Button>
          <Button style={{ color:"orange" }} id="s">Sports</Button>
          <Button style={{ color:"yellow" }} id="m">Health</Button>
          <Button style={{ color:"green" }} id="t">Science/Tech</Button>
          <Button style={{ color:"blue" }} id="b">Business</Button>
          <Button style={{ color:"violet" }} id="e">Entertainment</Button>
          <Button style={{ color:"white" }} id="all">All</Button>
        </ButtonGroup>
      </Typography>      
    </React.Fragment>
  );
}
