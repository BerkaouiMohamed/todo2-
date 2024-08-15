const { validationResult } = require("express-validator");
const userModel = require("../models/userModel");
const asyncHandler = require("../utils/asyncHandler");
const comparePassword = require("../utils/comparePassword");
const generateToken = require("../utils/generateToken");

module.exports = {
  getRegisterPage: (req, res) => {
    res.render("register");
  },
  register: asyncHandler(async (req, res) => {
    const result = validationResult(req);
 

    
    if(result.errors){
      
        
  throw new Error('email not valid')
    }
          var user = new userModel(req.body);

    await user.save();

    res.redirect("/user/register");
  }),
  getLoginPage: (req, res) => {
    res.render("login");
  },
  login: asyncHandler(async (req, res) => {
  
    const existUser = await userModel.findOne({
      userEmail: req.body.userEmail,
    });

    if (!existUser) {
      throw new Error("user not exist");
    }
    if (!comparePassword(req.body.password, existUser.password)) {
      throw new Error("password is wrong");
    }

    const token = generateToken({
      _id: existUser._id,
      userName: existUser.userName,
    });
    console.log(token);

    res.cookie("token", token).redirect("/todos");
  }),
};
