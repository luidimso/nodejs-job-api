const fs = require('node:fs/promises');
const path = require('path');

const absPath = path.join(__dirname, '../database/jobs.json');

exports.getJobs = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "Testing"
    });
}

exports.newJob = async (req, res, next) => {
    const fileContent = await fs.readFile(absPath);
    const jobs = JSON.parse(fileContent);
    const job = req.body;

    console.log(req.body);

    jobs.push(job);

    await fs.writeFile(absPath, JSON.stringify(jobs));

    res.status(200).json({
        sucess: true,
        message: "Job created",
        data: job
    });
}