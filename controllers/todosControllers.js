const todoModel = require("../models/todoModel");
const asyncHandler = require("../utils/asyncHandler");

module.exports={
    getTodos:asyncHandler(async(req,res)=>{
    
       const token=req.headers.token
     
       
       const userTodos=await todoModel.find({userId:token._id})
    
       
       res.render('home.ejs',{userTodos,user:token.userName})
    }),
    addTodo:asyncHandler(async(req,res)=>{
        const token=req.headers.token
        await todoModel.create({...req.body,userId:token._id})
        res.redirect("/todos")
    })
}