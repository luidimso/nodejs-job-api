const express = require("express");
const app = express();
const dotenv = require("dotenv");
const jobs = require("./routes/job.js");
const bodyParser = require('body-parser');
const errorMidleware = require("./midlewares/erros");

app.use(bodyParser.json());

dotenv.config({
    path: "./config/config.env"
});

const middleware = (req, res, next) => {
    console.log("Middleware");
    next();
}

app.use(middleware);

app.use("/api/v1", jobs);
app.use(errorMidleware);

app.listen(process.env.PORT, () => {
    console.log("Server started on port "+process.env.PORT+" in env "+process.env.NODE_ENV);
});