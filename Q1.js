const exp = require("constants");
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }))

app.get("/submitget", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Handle request with GET</h1>")
    res.write("First Name=" + req.query.fnameget);
    res.write("<br>Last Name=" + req.query.lnameget);
    res.end();
})

app.post("/submitpost", (req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Handle request with POST</h1>")
    res.write("First Name=" + req.body.fname);
    res.write("<br>Last Name=" + req.body.lname);
    res.end();
})

app.listen(8000, () => {
    console.log("Server is listening on PORT 8000")
})