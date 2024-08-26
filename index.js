const express=require('express');
require('dotenv').config();
const app=express();
// const port=3000;

app.get('/',(req,res)=>{
    res.send("this is home request ");
})
app.listen(process.env.PORT,()=>{
    console.log(`this is listening at port ${process.env.PORT}`)
})