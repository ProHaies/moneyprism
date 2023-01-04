import React from 'react'
import useStyles from './styles';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import "./Auth.css";
const AuthenticationButton = () => {
  const classes = useStyles()
    const user = 1;
  return (
    <div className={classes.main}>
      
      {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt="1" src="2">123</Avatar>
            <Button variant="contained" className={classes.logout} color="secondary" onClick=''>Logout</Button>
          </div>
        ) : (
          <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary">Sign In or Log in</Button>
        )}
</div>
  )
}

export default AuthenticationButton