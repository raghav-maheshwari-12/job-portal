const express =require("express");
const { testPostController } = require("../controllers/testController");

//router object
const router = express.Router();

//routes
router.post("/test-post", testPostController);

module.exports =router;