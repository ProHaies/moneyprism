import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import useStyles from './styles';
import { Pagination, PaginationItem } from '@material-ui/lab';
const Paginate = () => {
    const classes = useStyles()
  return (
    <Pagination
    classes={{ ul: classes.ul }}
    count={5}
    page={1}
    variant="outlined"
    color="primary"
    renderItem={(item) => (
      <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
    )}
  />  )
}

export default Paginate