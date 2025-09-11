const mongoose = require('mongoose')



const User = new mongoose.Schema({
    FullName : {
        type : String ,
        required : true
    },
    Email : {
        type : String ,
        required : true
    },
    Phone : {
        type : String ,
        required :true
    },
    Password :{
        type : String ,
        required : true 
    },
    Aadhar : {
        type: String,
   },
    FamilyID :{
        type : String
    },
    Address : String,
    Family : []

},{timestamps : true})


const UserModel = mongoose.model('User',User)

module.exports = UserModel