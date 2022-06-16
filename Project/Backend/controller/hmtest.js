const testModel= require("../models/httest")
const user=require("../models/users")

//Heamatology

const addhtDetail= async (req,res,next)=>{
    let {
        haemoglobin,
        neutrophils,
        eosinophiles,
        basophills,
        pcv,
        wbc,
        lymphocytes,
        monocytes,
        rbc,
        mcv,
        sdate,
        pName,
        email,
         _id   } = req.body

        try{
            const uEmail= await user.findOne({_id:_id},{email:1}).lean()
            let {email}=uEmail
            const testExits= await testModel.findOne({_id:_id})
            if(testExits){
                res.status(400).json({
                    error:true,
                    message:"test id already exists",
                    data:null
                })
                

            }
            else{
                    await testModel.insertMany([
                        {
                            haemoglobin,
                                    neutrophils,
                                    eosinophiles,
                                    basophills,
                                    pcv,
                                    wbc,
                                    lymphocytes,
                                    monocytes,
                                    rbc,
                                    mcv,
                                    sdate,
                                    pName,
                                    email,
                                   
                        }
                    ])
                    res.status(200).json({
                        error:false,
                        message:"Heamatology test detail submitted successful",
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
    let hemoData=await testModel.findOne({email}).lean()
    try{
    if (hemoData) {
        res.json({ 
            error:false,
            message:"Data fetched sucessfully",
            data:hemoData
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
    addhtDetail,viewRep,
}