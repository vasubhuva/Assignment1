const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
})

app.listen(8000, () => {
    console.log("Server is listening on PORT 8000");
})