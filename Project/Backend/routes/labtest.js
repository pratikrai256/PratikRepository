const express = require('express');
const testRouter = express.Router();

const testController= require('../controller/hmtest')
const thtestController=require('../controller/thtest')
const gltestController=require('../controller/gltest')
testRouter.post('/addhtreport',testController.addhtDetail)
testRouter.post('/addthyreport',thtestController.addthyDetail)
testRouter.post('/addglreport',gltestController.addglDetail)


testRouter.post('/viewthrepo',thtestController.viewRep);
testRouter.post('/viewglrepo',gltestController.viewRep);
testRouter.post('/viewrepo',testController.viewRep);

module.exports=testRouter
