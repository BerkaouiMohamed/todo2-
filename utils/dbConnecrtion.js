const {connect}=require('mongoose')

module.exports=async()=>{
try {
    await connect(process.env.MONGO_URI,{dbName:"todo2"})
    console.log('connected to db')
} catch (error) {
    console.log(error)
    process.exit(0) 
 
}
}