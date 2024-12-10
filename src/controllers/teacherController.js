


let teacherController=(req,res)=>{
    res.status(200).json({
        msg:"hi",
        myemail : req.email,
        myrole : req.role
    })
}


exports.teacherController=teacherController;