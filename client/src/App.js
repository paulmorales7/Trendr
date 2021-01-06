import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import CategoryButtons from './dashboard/CategoryButtons';
import TrendrBody from './dashboard/TrendrBody';
import TwitterStream from './dashboard/TwitterStream';
import API from './utils/API';
import './App.css'


// Login Stuff//////////////////////////////////
import Login from './dashboard/Login/Login';
import { useStateValue } from './StateProvider';
////////////////////////////////////////////////

function preventDefault(event) {
  event.preventDefault();
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/paulmorales7/Trendr">
        Trendr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    background: '#00cfff',
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    backgroundColor:
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    background: '#00cfff',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  //Login Stuff////////////////////////////////
  const [{ user }, dispatch] = useStateValue();
  /////////////////////////////////////////////

  const classes = useStyles();
  const [Category, setCategory] = React.useState(null); 
  const [open, setOpen] = React.useState(true);
  const [sports, setSports] = React.useState({});
  const [business, setBusiness] = React.useState({});

  
  const getData = () => {
    API.getResultsSPORTS()
      .then(res => {
        const sportsData = {
          ...sports,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        setSports(sportsData)
        setCategory("s")
      })
  }

  const getBusinessData = () => {
    API.getResultsBUSINESS()
      .then(res => {
        const businessData = {
          ...business,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        setBusiness(businessData)
        setCategory("b")
      })
  }

  return (
    <div id="App">
    {
      user ? (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
            Trendr
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Recent CategoryButtons */}
            <Grid item xs={12} md={12} lg={12}>
              <CategoryButtons
                getData={getData}
                getBusinessData={getBusinessData}
              />
            </Grid>
            {/* Recent TrendrBody */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TrendrBody
                  data={sports.googleData}
                />
              </Paper>
            </Grid>
            {/* TwitterStream */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
              <TwitterStream 
                tweets={
                  Category === 's' ? sports.twitterData 
                : Category === 'b' ? business.twitterData 
                // : Category === 'h' ? top.twitterData 
                // : Category === 'm' ? health.twitterData 
                // : Category === 't' ? tech.twitterData 
                // : Category === 'e' ? entertainment.twitterData 
                // : Category === 'all' ? all.twitterData 
                : []} />
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ pt: 4 }}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
    ) : ( <Login />)
    }
    </div>
  );
}