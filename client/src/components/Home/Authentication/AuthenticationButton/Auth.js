import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles'
import Input from './Input';
import { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../../../../api';
import { AUTH } from '../../../../constants/actionTypes';
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };


const Auth = () => {
  
  const navigate = useNavigate();
  const classes = useStyles(); 
  const dispatch = useDispatch();
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState(initialState);
  const [isValid, setIsValid] = useState("")

  const handleShowPassword = () => setShowPassword(!showPassword);
  const switchMode = () => {
   
    setIsSignup(!isSignup);
  
  };

   const signin = (form, navigate) => async (dispatch) => {
    try {
      const { data } = await api.signIn(form);

      dispatch({ type: AUTH, data });
  
      navigate('/');
    } catch (error) {
      console.log(error);
      setIsValid("Incorrect username or password")
    }
  };
   const signup = (form, navigate) => async (dispatch) => {
    try {
      const { data } = await api.signUp(form);

      dispatch({ type: AUTH, data });
  
      navigate('/');
    } catch (error) {
      setIsValid("Incorrect credentials")
    }
  };


  const handleSubmit = (e,error) => {
    e.preventDefault();
    if (isSignup) {
      dispatch(signup(form, navigate));
    } else  {
      dispatch(signin(form, navigate));
    } 

    if (error) {
      setIsValid("Google Sign In was unsuccessful. Try again later")

    }
  }
  const handleChange = (e) => {
   setForm({ ...form, [e.target.name]: e.target.value });

  }
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: "AUTH", data: { result, token } });

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  } 
const googleError = (error) => {
 console.log(error)
 setIsValid("Google Sign In was unsuccessful. Try again later")
}
  return (
    <Container component="main" maxWidth="xs">
       <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon/>
        </Avatar>
        <Typography variant='h5'>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <Typography className={classes.invalid}>{isValid}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'password' : 'text'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary'className={classes.submit}> { isSignup ? 'Sign Up' : 'Sign In' }</Button>
          <GoogleLogin
            clientId="968045220354-tifpe8pasu8snm8rf0g440bodb0q78po.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon="" variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          />
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
       </Paper>
    </Container>
  )
}

export default Auth