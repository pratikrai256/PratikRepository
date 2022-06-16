const express = require('express');
const UserRouter = express.Router();
const authorize= require('../middleware/auth')

const userController = require('../controller/users')

//Registration
UserRouter.post('/register',authorize.authorizeAdmin,userController.register)


UserRouter.get("/users",authorize.authorizeAdmin,userController.allDetails)
//Login
UserRouter.post('/login',userController.login)

module.exports =UserRouter