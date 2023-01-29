const mongoose = require("mongoose")

const orderHistorySchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    bookname: {
        type: String,
        required: true,
    },
    totalprice: {
        type: Number,
        required: true,
    },
    purchasetime: {
        type: Date,
        required: true
    }
},
    { timestambs: true }
)

module.exports = mongoose.model("orderhistory", orderHistorySchema)