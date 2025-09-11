const mongoose = require('mongoose')

function Connect () {
    mongoose.connect(process.env.MONGODB_URI)
    .then(()=>{
        console.log("Connection Successful")
    })
    .catch((error)=>{
        console.log(error)
    })
}


module.exports = Connect