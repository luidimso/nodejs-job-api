const express = require("express");
const app = express();
const dotenv = require("dotenv");

const PORT = process.env.PORT;

dotenv.config({
    path: "./config/config.env"
})

app.listen(PORT, () => {
    console.log("Server started on port "+process.env.PORT);
});