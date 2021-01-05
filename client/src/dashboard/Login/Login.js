import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from '../firebase'
import { useStateValue } from '../../StateProvider'
import { actionTypes } from '../../Reducer'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import trendrLogo from './trendrLogo.png'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
      }
}));

const Login = () => {
    const classes = useStyles();
    const [state, dispatch] = useStateValue()

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(result => {
                console.log(result)

                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })

            }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <Paper className={classes.paper}>
                <div className="login__logo">
                    <img src={trendrLogo} alt="trendr-logo" />
                </div>
                <Button type='submit' onClick={signIn}>Sign In</Button>
            </Paper>

        </div>
    )
}

export default Login