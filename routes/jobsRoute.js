const express = require("express");
const userAuth = require("../middlewares/authMiddleware");
const { createJobController, getAllJObControllers } = require("../controllers/jobsController");
const router = express.Router();

//routes
// CREATE JOB || POST
router.post("/create-job", userAuth, createJobController);

// //GET JOBS || GET
router.get("/get-job", userAuth, getAllJObControllers);

// //UPDATE JOBS ||  PATCH
// router.patch("/update-job/:id", userAuth, updateJobController);

// //DELETE JOBS || DELETE
// router.delete("/delete-job/:id", userAuth, deleteJobController);

// // JOBS STATS FILTER || GET
// router.get("/job-stats", userAuth, jobStatsController);

module.exports =router;
