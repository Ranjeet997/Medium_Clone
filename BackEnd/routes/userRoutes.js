const express = require('express')
const userController = require('../controllers/userController')
const { signup, login } = userController
const { googlesignup } = require('../controllers/googleController')
const { facebooksignup } = require('../controllers/facebookController')
const { twitterLogin } = require('../controllers/twitterController')
const { postComment, postLike } = require('../controllers/commentController')
const userAuth = require('../middlewares/userAuth')
const blogAuth = require('../middlewares/blogAuth')
const { createBlog, updateBlog, readAllBlogs, readOneBlogs, readIndividualData, dropBlogTable } = require("../controllers/blogController");

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/signup', userAuth.saveUser, signup)
router.post('/googlesignup', googlesignup)
router.post('/facebooksignup', facebooksignup)

// TWITTER LOGIN
router.post('/twitterLogin', twitterLogin);

// LOGIN ROUTE
router.post('/login', login )

// CREATE BLOGS
router.post('/createblog', createBlog)

// DELTE BLOGS TABLE
router.delete('/deleteblog/:slug_id', dropBlogTable)

// UPDATE BLOGS
router.put('/updateblog', blogAuth.updatePost, updateBlog)

// READ BLOGS
router.get('/readBlog', readAllBlogs)

// READ SINGLE BLOG
router.get('/readOneBlog/:slug_id', readOneBlogs)

// READ SINGLE BLOG
router.get('/readIndividualData/:user_id', readIndividualData)

// POST COMMENT ON BLOG
router.post('/postComment', postComment)

// POST LIKE
router.post('/postLike', postLike)


module.exports = router