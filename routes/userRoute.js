const express = require("express");
const router = express.Router();
const User = require("../src/UserSchema");

router.post("/createUser", async (req, res) => {
    try {
        const user = await new User(req.body);
        user.save();
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
router.get("/allUser", async (req, res) => {
    try {
        const user = await User.find();
        // console.log("user fetched", user);
        res.status(200).json({ users: user })
    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
module.exports = router;