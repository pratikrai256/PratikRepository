const mongoose=require('mongoose')
const Schema= mongoose.Schema

const htSchema = new Schema({
    
        haemoglobin: { type: String },
        neutrophils: { type: String },
        eosinophiles: { type: String },
        basophills: { type: String },
        pcv: { type: String },
        wbc: { type: String },
        lymphocytes: { type: String },
        monocytes: { type: String },
        rbc: { type: String },
        mcv: { type: String },
        sdate:{ type: String},
        pName:{ type: String},
        email:{ type: String},
        sid: { type: String}
  
})
   

 
     

module.exports =mongoose.model("htTest",htSchema)




