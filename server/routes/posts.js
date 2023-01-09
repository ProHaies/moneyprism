import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost, deletePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router = express.Router();


router.get('/', getPosts);
router.post('/',  createPost);
router.patch('/:id',  updatePost);
router.delete('/:id',  deletePost);
router.patch('/:id/likePost',  likePost);

export default router;