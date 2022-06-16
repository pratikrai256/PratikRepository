
const mongoose=require('mongoose')
const Schema= mongoose.Schema


   const thySchema = new Schema({
    
    tri: { type: String },
    thyroxine: { type: String },
    tsh: { type: String },
    sdate:{ type: String},
    pName:{ type: String},
    email:{ type: String},
    sid: { type: String}


})

module.exports =mongoose.model("thyTest",thySchema)
