const express=require('express')

const teacherRoute=express.Router();
const {teacherController}=require('../controllers/teacherController')
const jwt=require('jsonwebtoken')
const{authmiddleware,teacheRAuthMiddleware}=require('../middlewares/authmiddleware')





teacherRoute.post('/teacher/create',authmiddleware,teacheRAuthMiddleware,teacherController)





exports.teacherRoute=teacherRoute; 