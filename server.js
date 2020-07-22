const fs = require("fs");
const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.use("/", express.static("public"));
    
app.get("/:path", (req, res) => {
    console.log(req.url);
    const url = __dirname + "/" + req.params.path;
    res.sendFile(url);
});

app.listen(PORT, (req, res) => {
    console.log(`The server is listening on port ${PORT}...`)
});
