import React, { useEffect } from 'react';
import { Paper, Typography,  Divider, Box } from '@material-ui/core/';
import useStyles from './styles'
import {Avatar} from '@material-ui/core/';
const UserDetails = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    const classes = useStyles();
    return (

        <Paper className={classes.paper} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{user?.result.name}</Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>Realtime Chat - coming soon!</strong></Typography>
            <Divider style={{ margin: '20px 0' }} />
            <Typography variant="body1"><strong>
              </strong></Typography>
            <Divider style={{ margin: '20px 0' }} />
          </div>
          <div className={classes.imageSection}>
            <Avatar src={user?.result.imageUrl} className={classes.media}>{user?.result.name.charAt(0)}</Avatar>
          </div>
        </div>
        
      </Paper>
    
    );
}

export default UserDetails