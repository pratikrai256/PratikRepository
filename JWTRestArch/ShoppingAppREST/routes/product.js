const express = require('express');
const router = express.Router();

const auth=require('../middleware/auth');

const productController =require('../controller/products');

router.get('/products',auth.authorizeUserAdmin,productController.getAllproducts);
router.post('/add-product',auth.authorizeAdmin,productController.addProduct);
router.put('/edit-product',auth.authorizeAdmin,productController.editProduct);
router.delete('/delete-product',auth.authorizeAdmin,productController.deleteProduct);
module.exports =router;