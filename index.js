const express =require("express");
const cors =require('cors');
const morgan =require('morgan');
const app = express();
const colors =require("colors");
const dotenv =require("dotenv");

//file import
const  connectDb = require("./config/db");
const { errroMiddelware } = require("./middlewares/errorMiddleware");

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//dotenv config
dotenv.config();
connectDb();



//routes
app.use("/api/v1/test",require("./routes/testRoute"));
app.use("/api/v1/auth",require("./routes/authRoute"));


//validation middelware
app.use(errroMiddelware);

//rest api
app.get("/",(req,res)=>{
    res.send("<h1>welcome to my job portal</h1>");
});

//PORT
const PORT =process.env.PORT || 8080;

//listen
app.listen(PORT,()=>{
    console.log(`Server runnning on port ${PORT}`.bgBlack.green);
});
