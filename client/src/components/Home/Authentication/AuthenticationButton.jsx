import React from 'react'
import useStyles from './styles';
import { Avatar, Button } from '@material-ui/core';
import { Link} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import decode from 'jwt-decode';


const AuthenticationButton = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    navigate('/auth');

    setUser(null);
    window.location.reload(false);

  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    
   
  }, [location]);
  return (
    <div className={classes.main}>
      
      {user ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button className={classes.button} component={Link} to="/auth" variant="contained" color="primary">Sign In or Log in</Button>
        )}
</div>
  )
}

export default AuthenticationButton