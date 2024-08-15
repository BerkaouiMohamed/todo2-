const { Schema, model, Types } = require("mongoose");


const todoSchema = new Schema({
  todo: { type: String, required: true },
  status: { type: String, enum:{values:["pending","done"],message:"values maust be done or pending"},default:"pending" },
  userId: { type:Types.ObjectId, required: true ,ref:"user"},
},{timestamps:true,versionKey:false});

module.exports=new model('todo',todoSchema)