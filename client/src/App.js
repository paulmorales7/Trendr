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
import Button from '@material-ui/core/Button';
import CategoryButtons from './dashboard/CategoryButtons';
import TrendrArticle from './dashboard/TrendrArticle';
import TwitterStream from './dashboard/TwitterStream';
import History from './dashboard/History';
import API from './utils/API';
import TrendrLogo from './trendrLogo.png'
import './App.css'
import axios from "axios"


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
    display: 'flex',
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
  logout: {
    marginLeft: "auto",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    background: 'linear-gradient(to left, #232526, #414345)',
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
    background: {
      hroot: {
        background: 'linear-gradient(45deg, #790909 65%, #ff4b22 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
      sroot: {
        background: 'linear-gradient(45deg, #ff4b22 65%, #d6ce18 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
      mroot: {
        background: 'linear-gradient(45deg, #d6ce18 65%, #32c613 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
      troot: {
        background: 'linear-gradient(45deg, #32c613 65%, #00cfff 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
      broot: {
        background: 'linear-gradient(45deg, #00cfff 65%, #0036ff 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
      eroot: {
        background: 'linear-gradient(45deg, #0036ff 65%, #b545ff 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
      allroot: {
        background: 'linear-gradient(45deg, #b545ff 65%, #790909 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white'
      },
    },
  },
  fixedHeight: {
    height: 240,
  },
  logo: {
    maxHeight: '75px'
  },

}));

export default function Dashboard() {
  //Login Stuff////////////////////////////////
  const [{ user }, dispatch] = useStateValue();
  /////////////////////////////////////////////

  const classes = useStyles();
  const [history, setHistory] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [trendrData, settrendrData] = React.useState({});
  // const [business, setBusiness] = React.useState({});

  React.useEffect(() => {
    getHistory()
  }, [])

  const getSportsColor = () => {
    API.getResultsSPORTS()
      .then(res => {
        // set className here = to sRoot
      })
  }

  const getBusinessColor = () => {
    API.getResultsBUSINESS()
      .then(res => {
        // set className here = to bRoot
      })
  }

  const getTopColor = () => {
    API.getResultsTOP()
      .then(res => {

      })
  }

  const getHealthColor = () => {
    API.getResultsHEALTH()
      .then(res => {

      })
  }

  const getTechColor = () => {
    API.getResultsTECH()
      .then(res => {

      })
  }

  const getEntertainmentColor = () => {
    API.getResultsENTERTAINMENT()
      .then(res => {

      })
  }

  const getAllColor = () => {
    API.getResultsALL()
      .then(res => {

      })
  }

  const getSportsData = () => {
    API.getResultsSPORTS()
      .then(res => {
        const sportsData = {
          // ...trendrData,
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
          // ...trendrData,
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
          // ...trendrData,
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
          // ...trendrData,
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
          // ...trendrData,
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
          // ...trendrData,
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
          // ...trendrData,
          googleData: res.data.googleResults,
          twitterData: res.data.statuses
        }
        settrendrData(AllData)

      })
  }

  const getHistory = () => {
    axios.get("/history")
      .then((res) => {
        console.log(res)

        setHistory(res.data)
      })
  }

  const saveHistory = (headline, url) => {
    axios.post("/save", { headline, url })
      .then((res) => {
        console.log(res)
        getHistory()
      })
  }

  const deleteHistory = (id) => {
    axios.delete("/delete")
      .then((res) => {
        console.log('just deleted', res)
        getHistory()
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
                <Button color="secondary" alt="Logout" className={classes.logout} href="/" >Logout</Button>
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
                        saveHistory={saveHistory}
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
                  {/* Trendr History */}
                  <Grid item xs={12} md={6} lg={6}>
                    <Paper className={classes.paper}>
                      <History
                        getHistory={getHistory}
                        history={history}
                        deleteHistory={deleteHistory}
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
        ) : (<Login />)
      }
    </div>
  );
}