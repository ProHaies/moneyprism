import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
const Posts = ({ setCurrentId,currentId }) => {
  const {posts , isLoading} = useSelector((state) => state.posts);
  const classes = useStyles();
  if (!posts.length && !isLoading) return 'No posts';
  return (
    isLoading ? <CircularProgress /> : (
      <Grid className={classes.mainContainer} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item >
            <Post post={post} setCurrentId={setCurrentId} />
           
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
