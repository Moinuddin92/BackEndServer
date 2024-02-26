const express = require("express");
const router = express.Router();
const User = require("../src/UserSchema");
const { checkAge } = require("../middleware/middleware");
const jwt = require('jsonwebtoken');

router.post("/createUser", checkAge, async (req, res) => {
    try {
        const user = await new User(req.body);
        user.save();
        res.status(200).json(req.body)
    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
router.get("/allUser", checkAge, async (req, res) => {
    try {
        const user = await User.find();
        // console.log("user fetched", user);
        res.status(200).json({ users: user })
    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
router.post("/signup", async (req, res) => {
    try {
        const { username, email } = req.body;
        jwt.sign(req.body, process.env.secretKey, (err, token) => {
            User.create({ ...req.body, token: token }).then((data) => {
                res.status(201).json({ message: 'success', data })
            }).catch((err) => {
                res.status(500).json({ message: 'failed' });
            })
        })

    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }

})
router.post("/login", async (req, res) => {
    try {
        User.find({ email: req.body.email }).then((data) => {
            console.log('token', data[0].token);
            console.log('secret Key', process.env.secretKey);
            jwt.verify(data[0].token, process.env.secretKey, (err, token) => {
                if (token) {
                    res.status(201).json({ message: 'login successful', token: token });
                }
            })
        }).catch((err) => {
            res.status(500).json({ message: 'user not found' });
        });


    } catch (err) {
        res.status(500).json({ status: "failed", message: "something went wrong" })
    }
})
module.exports = router;