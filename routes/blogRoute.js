const express = require("express");
const router = express.Router();
const Blog = require("../src/BlogSchema");

router.post("/createBlog", async (req, res) => {
    try {
        const blog = await new Blog(req.body);
        blog.save();
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
router.get("/allBlog", async (req, res) => {
    try {
        const blog = await Blog.find();
        // console.log("user fetched", user);
        res.status(200).json({ blogs: blog })
    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
module.exports = router;