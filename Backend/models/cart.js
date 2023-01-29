const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    bookname: {
        type: String,
        required: true
    },

},
    { timestamps: true }
)


module.exports = mongoose.model("cart", cartSchema)