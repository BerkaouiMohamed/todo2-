
const { getLoginPage, getRegisterPage ,register, login} = require('../controllers/authControllers')
const { body } = require('express-validator');
const authRouter=require('express').Router()


authRouter.route('/login').get(getLoginPage)
authRouter.post("/login",login)

authRouter.get('/register',getRegisterPage)

function test(){
    return body('userEmail').notEmpty().isEmail()}
authRouter.post('/register',test(),register)

module.exports=authRouter