const express = require('express');
const router = express.Router();

const authorController = require("../controller/authorController")
const BlogController = require("../controller/blogController")
const auth = require('../middlewares/auth')

//----------------------------------------------Public APIs-----------------------------------------------------------
router.post("/authors", authorController.createAuthor)
router.post("/login", authorController.login)

//-----------------------------------------------Protected APIs--------------------------------------------------------
router.post("/blogs", auth.authenticate, BlogController.createNewBlog)
router.get("/blogs", auth.authenticate, BlogController.getAllBlogs)
// router.get("/blogs", middilewares.authenticate, BlogController.getBlogsbyQuery)
router.put("/blogs/:blogId", auth.authenticate, auth.Authorisation, BlogController.updateBlog)
router.delete("/blogs/:blogId", auth.authenticate, auth.Authorisation, BlogController.deleteBlog)
router.delete("/blogs", auth.authenticate, BlogController.deleteAllBlogs)

//----------------------------------------EndPoint Error for all API's--------------------------------------------------
router.all("/*", function (req, res) {
    res.status(404).send({ status: false, msg: "make sure your endpont is correct" })
})

module.exports = router  
