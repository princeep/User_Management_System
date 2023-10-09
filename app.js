const express = require('express');
const dotenv = require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.get("/",(req,res)=>{
    res.send("User Management System")
});



app.listen(port,()=>{
    console.log(` server listening on ${port}`)
})