const router = require("express").Router()
const Cart = require("../models/cart")


//add cart
router.post("/", async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const saveCart = await newCart.save()
        res.status(200).json(saveCart)

    } catch (error) {
        res.status(500).json("errro =>")

    }
})



//get cart
router.get('/', async (req, res) => {
    try {
        const getAllCart = await Cart.find();
        res.status(200).json(getAllCart)
    } catch (error) {
        console.log(error);
        res.status(500).json("errro =>")

    }
// res.json("hlsad")

})


module.exports = router