const jobModel = require("../models/jobModel");

const createJobController = async(req,res,next)=>{
    const {company,position}= req.body;
    if(!company || !position){
        next("please provide all fields");
    }
    req.body.createdBy =req.user.userId;
    const job = await jobModel.create(req.body);
    res.status(201).json({job});
};

const getAllJObControllers =async(req,res,next)=>{
    const jobs =await jobModel.find({createdBy: req.user.userId});
    res.status(200).json({
        totalJobs :jobs.length,
        jobs
    });
};
module.exports = {createJobController,getAllJObControllers};