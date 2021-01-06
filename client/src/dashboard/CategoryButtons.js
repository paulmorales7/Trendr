import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import trendrLogo from './trendrLogo.png'

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  },
  hroot: {
    fontWeight: '50 px',
    background: 'linear-gradient(45deg, #790909 65%, #ff4b22 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  sroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b22 65%, #d6ce18 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  mroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #d6ce18 65%, #32c613 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  troot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #32c613 65%, #00cfff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  broot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00cfff 65%, #5d45ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  eroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5d45ff 65%, #b545ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #b545ff 65%, #790909 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  toolbar: {
    justifyContent: 'space-around',
    padding: '1rem 3rem'
  },
  logo: {
    justifyContent: 'center',
    padding: '1rem 3rem',
  }
}));


export default function CategoryButtons(props) {
  const classes = useStyles();
  return (
    <React.Fragment className={classes.centeredDiv}>
      <Toolbar className={classes.toolbar} color="primary" aria-label="contained primary button group" onClick={preventDefault}>
        <img src={trendrLogo} alt="trendr-logo" className={classes.logo} />
      </Toolbar>
      <Toolbar className={classes.toolbar} color="primary" aria-label="contained primary button group" onClick={preventDefault}>
        <Button id="h" size='large' onClick={() => props.getTrendData("h")} className={classes.hroot}><span className={classes.buttonText}>Top</span></Button>
        <Button id="s" size='large' onClick={props.getSportsData} className={classes.sroot}><span className={classes.buttonText}>Sports</span></Button>
        <Button id="m" size='large' className={classes.mroot}><span className={classes.buttonText}>Health</span></Button>
        <Button id="t" size='large' className={classes.troot}><span className={classes.buttonText}>Tech</span></Button>
        <Button id="b" size='large' onClick={props.getBusinessData} className={classes.broot}><span className={classes.buttonText}>Biz</span></Button>
        <Button id="e" size='large' className={classes.eroot}><span className={classes.buttonText}>Entmt</span></Button>
        <Button id="all" size='large' className={classes.allroot}><span className={classes.buttonText}>All</span></Button>
      </Toolbar>
    </React.Fragment>
  );
}
