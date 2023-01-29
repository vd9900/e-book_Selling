const express = require("express")
const mongoose = require("mongoose")

const app = express();


//middlewares
app.use(express.json())

mongoose.connect("mongodb+srv://new-user_99:vinith9900@cluster0.koih8os.mongodb.net/E-book?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log("database connected"))
    .catch((err) => console.log("something went worng on Database"))


//routes
const userRouter = require("./routes/user")
const cartRouter = require("./routes/carts")

app.use("/api/cart", cartRouter)
app.use("/api/user",userRouter)


app.listen(4400, () => console.log("server started"))