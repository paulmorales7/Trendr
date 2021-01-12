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
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff0032 65%, #ff4b22 90%)',
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
    background: 'linear-gradient(45deg, #00cfff 65%, #0036ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  eroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #0036ff 65%, #8200ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black'
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #8200ff 65%, #ff006e 90%)',
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

const setSportsData = () => {
  localStorage.setItem('sports button', 'Sports')
}

export default function CategoryButtons(props) {
  const classes = useStyles();
  return (
    <React.Fragment className={classes.centeredDiv}>
      <Toolbar className={classes.toolbar} color="primary" aria-label="contained primary button group" onClick={preventDefault}>
        <img src={trendrLogo} alt="trendr-logo" className={classes.logo} />
      </Toolbar>
      <Toolbar className={classes.toolbar} color="primary" aria-label="contained primary button group" onClick={preventDefault}>
        <Button id="h" size='large' onClick={() => { props.getTopData(); props.saveHistory('Top') }} className={classes.hroot}><span className={classes.buttonText}>Top</span></Button>
        <Button id="s" size='large' onClick={() => { props.getSportsData(); props.saveHistory('Sports') }} className={classes.sroot}><span className={classes.buttonText}>Sports</span></Button>
        <Button id="m" size='large' onClick={() => { props.getHealthData(); props.saveHistory('Health') }} className={classes.mroot}><span className={classes.buttonText}>Health</span></Button>
        <Button id="t" size='large' onClick={() => { props.getTechData(); props.saveHistory('Tech') }} className={classes.troot}><span className={classes.buttonText}>Tech</span></Button>
        <Button id="b" size='large' onClick={() => { props.getBusinessData(); props.saveHistory('Biz') }} className={classes.broot}><span className={classes.buttonText}>Biz</span></Button>
        <Button id="e" size='large' onClick={() => { props.getEntertainmentData(); props.saveHistory('Entmt') }} className={classes.eroot}><span className={classes.buttonText}>Entmt</span></Button>
        <Button id="all" size='large' onClick={props.getAllData} className={classes.allroot}><span className={classes.buttonText}>All</span></Button>
      </Toolbar>
    </React.Fragment>
  );
}
