const express= require('express')
const app = express();
require('dotenv').config()
const {registerRoute}=require('./routes/register')
const {loginRoute}=require('./routes/login')
const{teacherRoute}=require('./routes/teacher')

app.use(express.json())

app.use('/api',registerRoute)
app.use('/api',loginRoute)
app.use('/api',teacherRoute)




const PORT = process.env.PORT || 5000 ;
app.listen(PORT,()=>{
    console.log("Running on PORT ",PORT)
})