const express=require('express')
const authRouter = require('./routers/authRouter')
const todosRouter = require('./routers/todosRouter')
require('dotenv').config()
require('./utils/dbConnecrtion')()
const cookies=require('cookie-parser')
 

const app=express()

app.set('view engine',"ejs")
app.use(express.urlencoded({extended:true}))
app.use(cookies())
app.use('/user',authRouter)
app.use('/todos',todosRouter)
  

 app.use((e,req,res,next)=>{
  
    
    res.send(e.message)
 })
app.listen(process.env.PORT,()=>console.log(`server running on port ${process.env.PORT}`))