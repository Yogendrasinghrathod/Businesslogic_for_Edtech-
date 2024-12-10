const mongoose = require('mongoose')
require('dotenv').config()

// mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_DB}.mtxxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
mongoose.connect(`mongodb://localhost:27017/`)
.then(d=>{
    console.log("connected")
})
.catch(err=>{
    console.log(err,"not connected")
})

exports.mongoose=mongoose;