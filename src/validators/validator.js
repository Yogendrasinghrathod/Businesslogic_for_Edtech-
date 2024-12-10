const { validationResult } = require("express-validator")



const validator=(req,res,next)=>{
    const error=validationResult(req);
    if(!error.isEmpty()){
        res.status(404).json({
            msg:"Please enter email"
        })
    }
    else{
        next();
    }
}
exports.validator=validator