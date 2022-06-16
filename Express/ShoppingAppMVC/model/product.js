const mongoose = require('mongoose')
const Schema=mongoose.Schema
const productSchema=new Schema({ 
   
    pName:{
        type: 'String',
        required: true
    },
    pDesc:{
        type: 'String',
        required: true
    },
    pPrice:{
        type: 'Number',
        required: true
    }
})
module.exports =mongoose.model('Products',productSchema)//it will taek all the mongodb queries and export it(mongoose.model)