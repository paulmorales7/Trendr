import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  hroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #790909 30%, #ff4b22 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  sroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b22 30%, #d6ce18 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  mroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #d6ce18 30%, #32c613 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  troot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #32c613 30%, #5d45ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  broot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5d45ff 30%, #00cfff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  eroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00cfff 30%, #b545ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #b545ff 40%, #790909 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
});


export default function CategoryButtons(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Categories</Title>
      <div id="flexcenter" style={{ marginLeft: '15%', marginRight: '15%' }}>
        <Typography color="primary" className={classes.categoryIcon}>
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" onClick={preventDefault}>
            <Button id="h" onClick={props.getTopData} className={classes.hroot}>Top</Button>
            <Button id="s" onClick={props.getData} className={classes.sroot}>Sports</Button>
            <Button id="m" className={classes.mroot}>Health</Button>
            <Button id="t" className={classes.troot}>Technology</Button>
            <Button id="b" onClick={props.getBusinessData} className={classes.broot}>Business</Button>
            <Button id="e" className={classes.eroot}>Entertainment</Button>
            <Button id="all" className={classes.allroot}>All</Button>
          </ButtonGroup>
        </Typography>
      </div>
    </React.Fragment>
  );
}
