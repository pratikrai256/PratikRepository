const mongoose=require('mongoose')
const Schema= mongoose.Schema



 const glucoSchema = new Schema({ 
      
    fbs: { type: String },
    ppbs: { type: String },
    gh: { type: String },
    calcium: { type: String },
    sdate:{ type: String},
    pName:{ type: String},
    email:{ type: String},
    sid: { type: String}


})

module.exports =mongoose.model("gcTest",glucoSchema)