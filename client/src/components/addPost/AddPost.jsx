import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Card, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';


const AddPost = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({  title: '', message: '', tags: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));  
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const navigate = useNavigate();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({  title: '', message: '', tags: '', selectedFile: '' });
  };

  const handleSubmit = async (e, _id) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost({ ...postData, name: user?.result?.name }, navigate ));  
          clear();
    } else {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));   
      navigate('/posts')
      window.location.reload(false);

         clear();
    }
  };

  
  if (!user?.result?.name) {
    return (
      <Paper className={classes.card}>
        <Button className={classes.formButton} onClick={() => navigate("/auth")}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own memories and like other's memories.
        </Typography>
        </Button>
      </Paper>
    );
  }

  return (
  
    <Card className={classes.card}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography className={classes.heading} variant="h6">{currentId ? `Editing "${post.title}"` : 'Creating a Memory'}</Typography>
        <TextField size="small" className={classes.inputs} name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField size="small" className={classes.inputs} name="message" variant="outlined" label="Message" fullWidth multiline  value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField size="small" className={classes.inputs} name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button size="small" className={classes.buttonSubmit} variant="contained" color="primary"  type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Card>
  ); 
};


export default AddPost;
