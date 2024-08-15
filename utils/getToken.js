
const jwt=require('jsonwebtoken')
const asyncHandler = require('./asyncHandler')
module.exports=asyncHandler(async(req,res,next)=>{
    const token=req.cookies.token
    
    jwt.verify(token,process.env.JWT_PASSWORD,(err,decode)=>{
        if(err){
            throw new Error('invalid Token')
        }
        req.headers.token=decode
        next()
    })

})