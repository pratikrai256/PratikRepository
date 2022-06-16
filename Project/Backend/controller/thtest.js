const thtestModel= require("../models/thytest")
const user = require("../models/users")
//Thyroid

const addthyDetail= async (req,res,next)=>{
    let {
        tri,
    thyroxine ,
    tsh, 
    sdate,
    pName,
    email,
    _id    } = req.body

        try{
            const uEmail= await user.findOne({_id:_id},{email:1}).lean()
            let {email}=uEmail
            const testExits= await thtestModel.findOne({_id:_id})
            if(testExits){
                res.status(400).json({
                    error:true,
                    message:"test id already exists",
                    data:null
                })
                

            }
            else{
                    await thtestModel.insertMany([
                        {
                                    tri,
                                    thyroxine ,
                                    tsh,
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
    let thData=await thtestModel.findOne({email}).lean()
    try{
    if (thData) {
        res.json({ 
            error:false,
            message:"Data fetched sucessfully",
            data:thData
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
    addthyDetail,viewRep
}