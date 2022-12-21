import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
import Form from '../Form/Form';
const Posts = ({ setCurrentId,currentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item >
            <Post post={post} setCurrentId={setCurrentId} />
           
          </Grid>
        ))}
         <Form currentId={currentId} setCurrentId={setCurrentId} />
      </Grid>
    )
  );
};

export default Posts;
