import React, { useState, useEffect } from 'react';
import { Container,  Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import { getPosts } from '../../../actions/posts';
import useStyles from './styles';
import AuthenticationButton from '../Authentication/AuthenticationButton';
const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container className={classes.main}>
      
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={6} sm={8} lg={12}>
              <Posts setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
      <AuthenticationButton/>
    </Container>

  );
};
export default Home