const express= require('express')
const registerRoute= express.Router()
const {registerController}=require('.././controllers/registerController')
const { body,validationResult } = require("express-validator")
const {validator}=require('../validators/validator')


registerRoute.get('/register',body('email').isEmail(),validator,registerController);

exports.registerRoute=registerRoute;