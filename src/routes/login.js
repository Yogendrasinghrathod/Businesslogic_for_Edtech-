const express=require('express')

const loginRoute=express.Router();
const {loginController}=require('../controllers/loginController')
const { body,validationResult } = require("express-validator")
const {validator}=require('../validators/validator')


loginRoute.post('/login',body('email').isEmail(),validator,loginController)





exports.loginRoute=loginRoute; 