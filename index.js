const express =require("express");
const colors =require("colors");
const dotenv =require("dotenv");

dotenv.config();

//rest object
const app =express();

//routes
app.get("/",(req,res)=>{
    res.send("<h1>welcome to my job portal</h1>");
});
//PORT
const PORT =process.env.PORT || 8080;
//listen
app.listen(PORT,()=>{
    console.log(`Server runnning on port ${PORT}`.bgBlack.green);
});
