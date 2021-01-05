import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Title from './Title';


function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  hroot: {
    marginRight: '3%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #790909 30%, #ff4b22 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
  sroot: {
    marginRight: '3%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b22 30%, #d6ce18 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
  mroot: {
    marginRight: '3%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #d6ce18 30%, #32c613 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
  troot: {
    marginRight: '3%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #32c613 30%, #5d45ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
  broot: {
    marginRight: '3%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5d45ff 30%, #00cfff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
  eroot: {
    marginRight: '3%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00cfff 30%, #b545ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #b545ff 40%, #790909 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    fontSize: '0.6rem'
  },
});


export default function CategoryButtons(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Categories</Title>
      <div id="flexcenter" style={{ marginLeft: '15%', marginRight: '15%' }}>
        <Typography color="primary" className={classes.categoryIcon}>
          <Toolbar variant="spaced" color="primary" aria-label="contained primary button group" onClick={preventDefault}>
            <Button id="h" size='large' onClick={props.getTopData} className={classes.hroot}>Top</Button>
            <Button id="s" size='large' onClick={props.getData} className={classes.sroot}>Sports</Button>
            <Button id="m" size='large' className={classes.mroot}>Health</Button>
            <Button id="t" size='large' className={classes.troot}>Technology</Button>
            <Button id="b" size='large' onClick={props.getBusinessData} className={classes.broot}>Business</Button>
            <Button id="e" size='large' className={classes.eroot}>Entertainment</Button>
            <Button id="all" size='large' className={classes.allroot}>All</Button>
          </Toolbar>
        </Typography>
      </div>
    </React.Fragment>
  );
}
