const express = require('express');
const product= require('../model/product')
//Reading Product Details
const getAllproducts=async(req, res, next) => {
    try {
       const products= await product.find().lean();
       res.json({
           error:false,
           messages:"",
           data: products
       })
    }catch(err) {
        next(err)
    }
}
//Adding Product Details

const addProduct=async(req, res, next) => {
    try {
        let{pName,pDesc,pPrice}=req.body
        await product.insertMany([{
            pName,pDesc,pPrice
        }])
        res.json({
            error:false,
            messages:"Product has been added successfully",
            data: null
        })

     }catch(err) {
         next(err)
     }
 }
//Editing Product Details

 const editProduct=async(req, res, next) => {
    try {
        let{_id,pName,pDesc,pPrice}=req.body;
        await product.updateOne(
            { _id},
            {$set:{pName,pDesc,pPrice}
        }
        )
        res.json({
            error:false,
            messages:"Product has been updated successfully",
            data: null
        })

     }catch(err) {
         next(err)
     }
 }

 //Deleting Product Details

 const deleteProduct=async(req, res, next) => {
    let{_id}=req.body;
    try {
        await product.deleteOne(
            { _id:_id }
        )
        res.json({
            error:false,
            messages:"Product has been deleted successfully",
            data: null
        })

     }catch(err) {
         next(err)
     }
 }
module.exports={
    getAllproducts,
    addProduct,
    editProduct,
    deleteProduct
}