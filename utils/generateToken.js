const jwt=require('jsonwebtoken')


const generateToken= (params)=>{
 const token=  jwt.sign(params,process.env.JWT_PASSWORD,{expiresIn:"1h"})
 return token
}

module.exports=generateToken