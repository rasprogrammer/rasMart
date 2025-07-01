const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    return res.end("<h1>E-commerce<h1>");
});


app.listen(PORT, () => console.log("Server started"));