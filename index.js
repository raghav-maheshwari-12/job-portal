const express =require("express");
const cors =require('cors');
const morgan =require('morgan');
const app = express();

const colors =require("colors");
const dotenv =require("dotenv");
const  connectDb = require("./config/db");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
dotenv.config();
connectDb();



//rest api
app.use("/api/v1/test",require("./routes/testRoute"));

app.get("/",(req,res)=>{
    res.send("<h1>welcome to my job portal</h1>");
});
//PORT
const PORT =process.env.PORT || 8080;
//listen
app.listen(PORT,()=>{
    console.log(`Server runnning on port ${PORT}`.bgBlack.green);
});
