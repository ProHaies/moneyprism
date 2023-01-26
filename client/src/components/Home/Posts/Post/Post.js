import React, {useState} from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import { useNavigate } from 'react-router-dom';
import { likePost, deletePost } from '../../../../actions/posts';
import useStyles from './styles';
import { getPost } from '../../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const [likes, setLikes] = useState(post?.likes);

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post?.likes?.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };
  const Likes = () => {
    if (likes.length > 0) {
      return post.likes.find((like) => like === userId)
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openPost = (e) => {
    dispatch(getPost(post._id));
    navigate(`/posts/${post._id}`);
    window.location.reload(false);
  };


  return (
    <Card className={classes.card} raised elevation={6}>
  
  
  <div onClick={openPost} className={classes.cardActions}>
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
     
      <div className={classes.details}>
        <Typography variant="body2" color="white" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="white" component="p">{post.message}</Typography>
      </CardContent>
      </div>
      <CardActions className={classes.cardActions}>
      <Button size="small" color="primary" disabled={!user?.result} onClick={handleLike}>
          <Likes className={classes.likes} />
        </Button>
        {userId === post?.creator && (
          <div>
        <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
          <DeleteIcon fontSize="small" /> Delete
        </Button>
        <Button     onClick={(e) => {
              e.preventDefault();
              setCurrentId(post._id);
              navigate("/posts/addPost")
            }} style={{ color: 'red', zIndex:"1" }} size="small">
        <MoreHorizIcon fontSize="small" />  &nbsp; Edit
        </Button>
        </div>
        )}      </CardActions>
    </Card>
  );
};

export default Post;
