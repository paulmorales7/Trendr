import * as React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// import Chart from './dashboard/Chart';
import CategoryButtons from './dashboard/CategoryButtons';
import CategorySelected from './dashboard/CategorySelected';
import TrendrBody from './dashboard/TrendrBody';
import TwitterStream from './dashboard/TwitterStream';
import API from './utils/API';

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
      <Link color="inherit" href="https://material-ui.com/">
        Trendr
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
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
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Trendr
          </Typography>
          {/* login button below? maybe his/herstory? */}
          {/* <Typography color="primary" className={classes.categoryIcon}>
            <ButtonGroup variant="text" aria-label="contained primary button group" onClick={preventDefault}>
              <Button id="h" style={{ color: "red" }}>Top Trends</Button>
              <Button id="s" style={{ color: "orange" }}>Sports</Button>
              <Button id="m" style={{ color: "yellow" }}>Health</Button>
              <Button id="t" style={{ color: "green" }}>Science/Tech</Button>
              <Button id="b" style={{ color: "blue" }}>Business</Button>
              <Button id="e" style={{ color: "violet" }}>Entertainment</Button>
              <Button id="all" style={{ color: "white" }}>All</Button>
            </ButtonGroup>
          </Typography> */}
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
            {/* Recent CategorySelected */}
            <Grid item xs={12} md={12} lg={12}>
              <CategorySelected />
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
                <TwitterStream tweets={Category === 's' ? sports.twitterData : Category === 'b' ? business.twitterData : []} />
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