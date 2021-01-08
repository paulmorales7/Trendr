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
import TrendrArticle from './dashboard/TrendrArticle';
import TwitterStream from './dashboard/TwitterStream';
import History from './dashboard/History';
import API from './utils/API';
import TrendrLogo from './trendrLogo.png'
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
    <Typography variant="body2" align="center">
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
    background: '#FFFEF2',
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
  logo: {
    maxHeight: '75px'
  },
  hroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #790909 65%, #ff4b22 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  sroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #ff4b22 65%, #d6ce18 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  mroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #d6ce18 65%, #32c613 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  troot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #32c613 65%, #00cfff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  broot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00cfff 65%, #5d45ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  eroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #5d45ff 65%, #b545ff 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  allroot: {
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #b545ff 65%, #790909 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white'
  },
  null: {
    paper: {
      display: 'none'
    },
  },
}));

export default function Dashboard() {
  //Login Stuff////////////////////////////////
  const [{ user }, dispatch] = useStateValue();
  /////////////////////////////////////////////

  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const [trendrData, settrendrData] = React.useState({});
  // const [business, setBusiness] = React.useState({});

  
  const getSportsData = () => {
    API.getResultsSPORTS()
      .then(res => {
        const sportsData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(sportsData)
        
      })
  }

  const getBusinessData = () => {
    API.getResultsBUSINESS()
      .then(res => {
        const businessData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(businessData)
        
      })
  }
  
  const getTopData = () => {
    API.getResultsTOP()
      .then(res => {
        const TopData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(TopData)
        
      })
  }
  const getHealthData = () => {
    API.getResultsHEALTH()
      .then(res => {
        const HealthData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(HealthData)
        
      })
  }
  const getTechData = () => {
    API.getResultsTECH()
      .then(res => {
        const TechData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(TechData)
        
      })
  }
  const getEntertainmentData = () => {
    API.getResultsENTERTAINMENT()
      .then(res => {
        const EntertainmentData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(EntertainmentData)
        
      })
  }
  const getAllData = () => {
    API.getResultsALL()
      .then(res => {
        const AllData = {
          ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(AllData)
        
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
          <img src={TrendrLogo} alt="trendr-logo" className={classes.logo} />
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            
            {/* CategoryButtons */}
            <Grid item xs={12} md={12} lg={12}>
              <CategoryButtons
                getSportsData={getSportsData}
                getBusinessData={getBusinessData}
                getTopData={getTopData}
                getHealthData={getHealthData}
                getTechData={getTechData}
                getEntertainmentData={getEntertainmentData}
                getAllData={getAllData}
              />
            </Grid>
            {/* TrendrArticle */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <TrendrArticle
                  data={trendrData.googleData}
                />
              </Paper>
            </Grid>
            {/* TwitterStream */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
              {Object.keys(trendrData).length > 0 && 
              <TwitterStream 
                tweets={
                  trendrData.twitterData                
                } />}
              </Paper>
            </Grid>
            {/* TwitterStream */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={classes.paper}>
              <History
                // data={trendrData.historyData}   <--- simply a placeholder for the actual meat and potatoes
              />
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