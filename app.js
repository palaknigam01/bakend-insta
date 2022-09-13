const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://root:root@cluster0.xabd45y.mongodb.net/?retryWrites=true&w=majority").then((res)=>{
    console.log("Database connencted...")
}).catch((err)=>{
    console.log("unable to connect");
})

const port = process.env.PORT || 3000;
const app = express();
const userRouter = require('./routes/user.routes');

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(cors());

app.use("/api/user",userRouter);

app.listen(port, () => {
  console.log("server Is running..." + port);
});
