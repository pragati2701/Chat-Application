// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.s11qz.mongodb.net/chatAppMern?retryWrites=true&w=majority`, ()=> {
//   console.log('connected to mongodb')
// })


//mongodb+srv://pragatidosad:<password>@cluster0.fg21ikv.mongodb.net/?retryWrites=true&w=majority

const dotenv = require("dotenv");
const mongoose = require('mongoose');
dotenv.config();
const { DB_USER, DB_PW } = process.env;
mongoose.connect(
  `mongodb+srv://pragatidosad:12345@cluster0.fg21ikv.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
