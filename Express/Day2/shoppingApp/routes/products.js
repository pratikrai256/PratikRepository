const express = require('express');
const fs = require('fs');
const router=express.Router();
let products=[
    {
        _id:1,
        pName:'Bag',
        pDesc:'wearable',
        pPrice:1200
    }
]

//Adding the new Products

router.get('/products',(req, res)=>{
    res.render('./products.handlebars',{products})
})

router.get('/add-products',(req, res)=>{
    res.render('./add-product.handlebars')
})

router.post('/add-products',(req, res)=>{
    fs.appendFileSync('demo/demo.txt',JSON.stringify(req.body));
    console.log(req.body);
    let{_id,pName,pDesc,pPrice}=req.body;
    _id=parseInt(_id);
    pPrice=parseInt(pPrice);
    products.push({
        _id,
        pName,
        pDesc,
        pPrice
    })
    res.redirect('/products/products');
})

//Edit the Product

router.get('/edit-product/:_id',(req, res)=>{

    console.log(req.params._id);
    _id=parseInt(req.params._id);
    const index=products.findIndex((product)=>{
        return parseInt(product._id)===parseInt(_id)
    })
const selectedProduct=products[index]
res.render('./edit-product.handlebars',{selectedProduct});

})

//Save Changes of edit-product
router.post('/edit-product',(req, res)=>{
    console.log(req.body);
    let{_id,pName,pDesc,pPrice}=req.body;
    _id=parseInt(_id);
    pPrice=parseInt(pPrice);
    const index=products.findIndex((product)=>{
        return parseInt(product._id)===parseInt(_id)
    })
       const data= fs.readFileSync('demo/demo.txt' );
       console.log(data);
       products.push(data)

    products.splice(index,1,{_id,
        pName,
        pDesc,
        pPrice});
        res.redirect('/products/products');
        fs.writeFileSync('demo/demo.txt', JSON.stringify(req.body));


})


//Deleting the Product

router.get('/delete-product/:_id',(req, res)=>{
    console.log(req.params._id);
    _id=parseInt(req.params._id);
    const index=products.findIndex((product)=>{
        return parseInt(product._id)===parseInt(_id)
    })
    
    products.splice(index,1);
        res.redirect('/products/products');

})
module.exports =router