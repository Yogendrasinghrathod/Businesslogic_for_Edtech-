const express=require('express')
const{ User}=require('../models/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()




let registerController=(req,res)=>{

    // 3.1.) check if user already registered or not ?
    User.findOne({
        username:req.body.username,
        email:req.body.email,
        
    })
    .then(user1=>{

        const saltRounds=10;
        let encryptedpassword=bcrypt.hashSync(req.body.password, saltRounds);
        req.body.password=encryptedpassword;
        
        
        //3.2 if not registered before then insert the user info in mongodb
       
        if(user1===null){   //not found
            // then DB insert
            const user1=new User(req.body);
            user1.save()
            .then(d=>{
                // 3.3 generate JWT tokens and give api response
                // 3.3.1 generate JWT tokens
                const token=jwt.sign(req.body,process.env.JWT_TOKEN_KEY)   //.sign(,secret key)
                res.status(200).json({
                    msg:"succesfully registered new collection",
                    // 3.3.2   give api response
                    // token:token
                });    
            })
            .catch(err=>{
                res.status(400).json({
                    msg:"Issue in model creation"
                });
            });
        }
        // if found same username 
        else{
            res.status(400).json({
                 msg:"user already registered"
            })

        }
    })
    .catch(err=>{  //if there is error in findOne promise chain
        msg:"error occured in findOne"
    });
}

exports.registerController=registerController;