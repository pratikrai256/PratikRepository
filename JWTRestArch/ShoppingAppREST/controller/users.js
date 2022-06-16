const userModel= require("../models/users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
SECRET_KEY ="TechnoElevate"

const register=async(req, res, next) => {
   let {fname,lname,email,password,role}=req.body
   try {
    const emailExists=await userModel.findOne({email: email})
    if(emailExists) {
        res.status(400).json({
            error:true,
            message:"email already exists",
            data:null
        })
    }else {
       const saltrounds=10
       //salt of the password,we are encrypting the password using saltround
       const salt= await bcrypt.genSalt(saltrounds)

       //hash password,it makes the password encrypted
       const hashpassword=await bcrypt.hash(password,salt)

       await userModel.insertMany([
            {fname,lname,email,role,password:hashpassword}
       ])
       res.status(200).json({
        error:false,
        message:"registration successful",
        data: null
    })
}
   }
    catch(err) {
        next(err)
        }
    }
        // login Logic
        const login=async(req, res, next) => {
            let{email,password}=req.body
            try{
                const userData= await userModel.findOne({email}).lean()
                if(userData){
                    let{fname,lname,role}=userData
                    const isPasswordMatch=await bcrypt.compare(password, userData.password)

                    if(isPasswordMatch){
                        const payload={fname,lname,role}
                        const token=await jwt.sign(payload,SECRET_KEY,{
                            expiresIn:"5h"
                        })
                        res.status(200).json({
                            error:false,
                            message:"login successful",
                            data: {
                                fname,role,token
                            }
                        })
                    }else{
                        res.status(401).json({
                            error:true,
                            message:"Invalid password",
                            data: null
                        })
                    }
                }
                else{
                    res.status(401).json({
                        error:true,
                        message:"User not registered",
                        data: null
                })
        }
    }catch(err) {
            next(err)
        }
    }

    module.exports ={
        login,register
    }