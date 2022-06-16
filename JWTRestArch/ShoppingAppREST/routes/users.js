const express = require('express');
const UserRouter = express.Router();

const userController = require('../controller/users')
const auth=require('../middleware/auth')

//Registration
UserRouter.post('/register',userController.register)

//Login
UserRouter.post('/login',userController.login)

module.exports =UserRouter