const { getTodos, addTodo } = require('../controllers/todosControllers')
const getToken = require('../utils/getToken')

const todosRouter=require('express').Router()



todosRouter.get('/',getToken,getTodos)
todosRouter.post('/',getToken,addTodo)




module.exports=todosRouter