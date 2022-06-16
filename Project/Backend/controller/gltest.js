const gltestModel= require("../models/glucotest")
const user=require("../models/users")

//Glucometry

const addglDetail= async (req,res,next)=>{
    let {
        fbs,
    ppbs,
    gh,
    calcium,
    sdate,
    pName,
    email,
    _id   } = req.body

        try{
            const uEmail= await user.findOne({_id:_id},{email:1}).lean()
            let {email}=uEmail
            const testExits= await gltestModel.findOne({_id:_id})
            if(testExits){
                res.status(400).json({
                    error:true,
                    message:"test id already exists",
                    data:null
                })
                

            }
            else{
                    await gltestModel.insertMany([
                        {
                                    fbs,
                                    ppbs,
                                    gh,
                                    calcium,
                                    sdate,
                                    pName,
                                    email,
                                     
                        }
                    ])
                    res.status(200).json({
                        error:false,
                        message:"Thyroid test detail submitted successful",
                        data: null
                    })


            }
    
        }
        catch(err){
            next(err)
        }


} 


let viewRep=async(req,res,next)=>{
    let {email}=req.body
    let glData=await gltestModel.findOne({email}).lean()
    try{
    if (glData) {
        res.json({ 
            error:false,
            message:"Data fetched sucessfully",
            data:glData
        })
        
    }else{
        console.log(email);
        res.json({
            error:true,
            message:"Faild to fetch"
            ,data:null
        })
    }
    }
    catch (err) {
        next(err)
    }

}

module.exports ={
    addglDetail,viewRep
}