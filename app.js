const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jobs = require("./routes/job.js");

dotenv.config({
    path: "./config/config.env"
});

app.use("/api/v1", jobs);

app.listen(process.env.PORT, () => {
    console.log("Server started on port "+process.env.PORT+" in env "+process.env.NODE_ENV);
});