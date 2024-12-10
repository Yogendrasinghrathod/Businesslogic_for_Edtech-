const { User } = require("../models/User");
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
require('dotenv').config()


let loginController=(req,res)=>{


    // step 1.) recieve the email and password
    const{email,password}=req.body;  //Destructing

    // step 2 .) check if the username /email available in db
    
    User.findOne({email:email})
    .then(user1=>{
        if(user1!==null){    //if user already registered ? yes then  
            //3.1 So email is available  Say "User exists now we can give token "
            

            //3.1 lets access the existing db hash
            bcrypt.compare(password,user1.password,function(err,result){
                if(result){
                    res.status(200).json({
                        msg:"login success",
                        data:user1,
                        token:jwt.sign({user:user1.email,role:user1.role},process.env.JWT_TOKEN_KEY,{expiresIn :"1d"})
    
                    });

                }
                else{
                    res.status(403).json({
                        msg:"Invalid credentials"
                    }); 

                }

                

            }) 
        }
        else{   //User not registered 
            
            res.status(403).json({
                msg:"Invalid credentials"
            }); 

        }

    })
    .catch(err=>{
        res.status(400).json({
            msg:"Error in findOne promise chain"
        });

    })


    
}

exports.loginController=loginController;