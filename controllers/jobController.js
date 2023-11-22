const fs = require('node:fs/promises');
const path = require('path');
const ErrorHandler = require("../utils/errorHandler");

const absPath = path.join(__dirname, '../database/jobs.json');

exports.getJobs = async (req, res, next) => {
    const fileContent = await fs.readFile(absPath);
    const jobs = JSON.parse(fileContent);

    res.status(200).json(jobs);
}

exports.newJob = async (req, res, next) => {
    const fileContent = await fs.readFile(absPath);
    const jobs = JSON.parse(fileContent);
    const job = req.body;

    jobs.push(job);

    await fs.writeFile(absPath, JSON.stringify(jobs));

    res.status(200).json({
        sucess: true,
        message: "Job created",
        data: job
    });
}

exports.updateJob = async (req, res, next) => {
    const fileContent = await fs.readFile(absPath);
    let jobs = JSON.parse(fileContent);
    const id = req.params["id"];
    let wasJobFound = false;

    jobs.map((job) => {
        if(job.id == id) {
            job.position = req.body.position;
            job.description = req.body.description
            wasJobFound = true;
        }

        return job
    });

    if(!wasJobFound) {
        return next(new ErrorHandler("Job not found", 404));
    } else {
        res.status(200).json({
            sucess: true,
            message: "Job updated",
            data: jobs
        });
    }
}