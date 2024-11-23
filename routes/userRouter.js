const express = require('express')
const router = express.Router();
const {registerUser} = require("../controllers/authController")


router.get("/", function (req, res) {
    res.send("hello there");
})

router.post("/register",registerUser )


module.exports = router;