const express = require('express');
const router = express.Router();
const blogCtrl = require('../controllers/blog')
const authCtrl = require('../controllers/auth')

router.get('/',blogCtrl.rootRoute);
router.get('/blog', blogCtrl.getBlogs)
router.get('/blog/new',blogCtrl.getNewBlogs);
router.post('/blog',blogCtrl.postBlog);
router.get('/blog/:id', blogCtrl.getShowBlog);
router.get('/edit/:id', blogCtrl.getEditBlog);
router.put('/update/:id', blogCtrl.putEditBlog);
router.delete('/blog/:id', blogCtrl.deleteBlog);


module.exports = router
// authCtrl.isLoggedIn,
