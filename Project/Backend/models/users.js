const mongoose = require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    fname: {
        type: String,
        minlength: 3,
        maxlength: 15
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 30
    },
    password: {
        type: String,
        minlength: 6,
     
    },
    role: {
       
            type: String,
            minlength: 3,
            maxlength: 10
       
    },
  
      
})
module.exports =mongoose.model('users',userSchema)