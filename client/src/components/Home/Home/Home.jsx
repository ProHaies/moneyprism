import React, { useState } from 'react';
import { Container,  Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useNavigate, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts';
import { getPosts, getPostsBySearch } from '../../../actions/posts';
import useStyles from './styles';
import AuthenticationButton from '../Authentication/AuthenticationButton';
import Paginate from '../../Pagination';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ setCurrentId,currentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const query = useQuery();
  const navigate = useNavigate();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);

  const handleKeyPress = (e) => {
        if (e.keyCode === 13) {
     searchPost();
    }
  }
  const handleAddChip = (tag) => setTags([...tags, tag]);
  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));


  const searchPost = () => {
    if (search.trim() || tags) {
      dispatch(getPostsBySearch({ search, tags: tags.join(',') }));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
     } else {
      navigate('/posts')
    }
  }

  
  return (
    <Container className={classes.main}>
      
      <Grow in>
        
        <Container>
        <AppBar className={classes.appBarSearch} position="static" color="inherit">
          <TextField onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Memories" className={classes.textfield}  value={search} onChange={(e) => setSearch(e.target.value)} />     
          <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">S3arch</Button>
                <ChipInput
                className={classes.tags}
                value={tags}
                onAdd={handleAddChip}
                onDelete={handleDeleteChip}
                label="Search Tags"
                variant="outlined"
              />
              {}
             
            </AppBar>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={6} sm={8} lg={12}>
              <Posts setCurrentId={setCurrentId} currentId={currentId} />
            </Grid>
          </Grid>

            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Paginate page={page} className={classes.number} />
              </Paper>
            )}
        </Container>
      </Grow>
      <AuthenticationButton/>
    </Container>

  );
};
export default Home