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
    marginRight: '6%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #790909 30%, #ff4b22 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  sroot: {
    marginRight: '6%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b22 30%, #d6ce18 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  mroot: {
    marginRight: '6%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #d6ce18 30%, #32c613 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  troot: {
    marginRight: '6%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #32c613 30%, #5d45ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  broot: {
    marginRight: '6%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5d45ff 30%, #00cfff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  eroot: {
    marginRight: '6%',
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00cfff 30%, #b545ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #b545ff 40%, #790909 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
});


export default function CategoryButtons(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Categories</Title>
      <div style={{ marginLeft: '5%', marginRight: '5%' }}>
        <Typography variant="button" color="primary" className={classes.categoryIcon}>
          <Toolbar variant="spaced" color="primary" aria-label="contained primary button group" onClick={preventDefault}>
            <Button id="h" size='large' onClick={props.getTopData} className={classes.hroot}><span className={classes.buttonText}>Top</span></Button>
            <Button id="s" size='large' onClick={props.getData} className={classes.sroot}><span className={classes.buttonText}>Sports</span></Button>
            <Button id="m" size='large' className={classes.mroot}><span className={classes.buttonText}>Health</span></Button>
            <Button id="t" size='large' className={classes.troot}><span className={classes.buttonText}>Tech</span></Button>
            <Button id="b" size='large' onClick={props.getBusinessData} className={classes.broot}><span className={classes.buttonText}>Biz</span></Button>
            <Button id="e" size='large' className={classes.eroot}><span className={classes.buttonText}>Entmt</span></Button>
            <Button id="all" size='large' className={classes.allroot}><span className={classes.buttonText}>All</span></Button>
          </Toolbar>
        </Typography>
      </div>
    </React.Fragment>
  );
}
