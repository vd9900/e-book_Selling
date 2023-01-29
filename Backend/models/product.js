const mongoose = require("mongoose")

const bookSchema = mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    booktype: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    }

},
    { timestamps: true }
)


module.exports = mongoose.model("cart", bookSchema)