const jwt=require('jsonwebtoken')


let authmiddleware=(req,res,next)=>{

    // string.split(" ")
    // req.headers.authorization =string
    // req.headers.authorization.split(" ")
    // req.headers.authorization.split(" ")[1]  -> for token only

    if(req.headers.authorization){   // checking has user uploaded token or not ?
        // yes move forward
        let token=req.headers.authorization.split(" ")[1];
        try {
            // var decoded=jwt.verify(token,Secret_Key)
            var decoded=jwt.verify(token,process.env.JWT_TOKEN_KEY)

            // decode krke token se email and role nikal liya 
            req.email=decoded.user;
            req.role=decoded.role;
            next();
        
        } catch (error) {
            res.status(403).json({
                msg:"invalid credentials"
            })
        }
    }
    else{
        res.status(404).json({
            msg:"Token not found"
        })
    }

    
}





let teacheRAuthMiddleware=(req,res,next)=>{

    //check role has access or not  
    if(req.role=='admin'){
        next();
        
    }
    else{
        res.status(403).json({
            msg:"unauthorized access"
        })
    }
}
let studentAuthMiddleware=(req,res,next)=>{

    //check role has access or not  
    if(req.role==='student'){
        next();
        
    }
    else{
        res.status(403).json({
            msg:"unauthorized access"
        })
    }
}
let adminAuthMiddleware=(req,res,next)=>{

    //check role has access or not  
    if(req.role==='admin'){
        next();
        
    }
    else{
        res.status(403).json({
            msg:"unauthorized access"
        })
    }
}


module.exports={authmiddleware,teacheRAuthMiddleware,studentAuthMiddleware,adminAuthMiddleware}