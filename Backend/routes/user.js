const router = require("express").Router()
const bcrypt = require("brcypt")
const User = require("../models/user")

// register

router.post("/", async (req, res) => {
    const newUser = new User(req.body)

    try {
        const saveUser = await newUser.save()
        res.status(200).json(saveUser)
    } catch (error) {
        res.status(500).json("errro =>", error)
    }
})


//login


router.post("/login", (req, res) => {

})



//logout


module.exports = router