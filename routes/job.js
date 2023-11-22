const express = require("express");
const router = express.Router();
const { getJobs, newJob, updateJob } = require("../controllers/jobController");

router.route("/jobs").get(getJobs);
router.route("/job/new").post(newJob);
router.route("/job/update/:id").put(updateJob);

module.exports = router;