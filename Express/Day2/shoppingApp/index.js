const express= require('express');
const exphbs= require('express-handlebars');
const port=4000;

const app= express();
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

const productsRoute=require('./routes/products')

// let products=[
// {
// _id:1, 
// pName:'Bag',
// pDesc:'wearable',
// pPrice:1200
// }
// ]

//body parser middleware
app.use(express.urlencoded({extended:true}));

// Router level Middleware 
app.use('/products',productsRoute);

app.get('/',(req, res)=>{
    res.render('./landingpage.handlebars');
})

// app.get('/products/products',(req, res)=>{
//     res.render('./products.handlebars',{products})
// })


// //Adding the Product
// app.get('/products/add-products',(req, res)=>{
//     res.render('./add-product.handlebars')
// })

// app.post('/products/add-products',(req, res)=>{
//     fs.appendFileSync('demo/demo.txt',JSON.stringify(req.body));
//     console.log(req.body);
//     let{_id,pName,pDesc,pPrice}=req.body;
//     _id=parseInt(_id);
//     pPrice=parseInt(pPrice);
//     products.push({
//         _id,
//         pName,
//         pDesc,
//         pPrice
//     })
//     res.redirect('/products/products');
// })

// //Edit Product
// app.get('/products/edit-product/:_id',(req, res)=>{
//     console.log(req.params._id);
//     _id=parseInt(req.params._id);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
// const selectedProduct=products[index]
// res.render('./edit-product.handlebars',{selectedProduct});
// })
// //Save Changes of edit-product
// app.post('/products/edit-product',(req, res)=>{
//     console.log(req.body);
//     let{_id,pName,pDesc,pPrice}=req.body;
//     _id=parseInt(_id);
//     pPrice=parseInt(pPrice);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
//     products.splice(index,1,{_id,
//         pName,
//         pDesc,
//         pPrice});
//         res.redirect('/products/products');

// })
// app.get('/products/delete-product/:_id',(req, res)=>{
//     console.log(req.params._id);
//     _id=parseInt(req.params._id);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
    
//     products.splice(index,1);
//         res.redirect('/products/products');

// })



app.listen(port,()=>{
    console.log(`The server is listening on port ${port}`);
})