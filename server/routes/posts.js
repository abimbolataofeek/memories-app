import  express from "express";

import {getPosts, createPost} from '..controllers/posts.js'
//check out express route
const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);

export default router;