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
  ButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    flex: 1,
  },
});

export default function CategoryButtons() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Categories</Title>
        <div id="flexcenter" style={{ marginLeft: '25%', marginRight: '25%' }}>
        <Typography color="primary" className={classes.categoryIcon}>
          <ButtonGroup variant="text" aria-label="contained primary button group" onClick={preventDefault}>
            <Button id="h" style={{ color:"red" }}>Top Trends</Button>
            <Button id="s" style={{ color:"orange" }}>Sports</Button>
            <Button id="m" style={{ color:"yellow" }}>Health</Button>
            <Button id="t" style={{ color:"green" }}>Science/Tech</Button>
            <Button id="b" style={{ color:"blue" }}>Business</Button>
            <Button id="e" style={{ color:"violet" }}>Entertainment</Button>
            <Button id="all" style={{ color:"white" }}>All</Button>
          </ButtonGroup>
        </Typography>   
        </div>   
    </React.Fragment>
  );
}
