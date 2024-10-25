import fetch from "node-fetch"
import express from "express";
const app = express();
// const fetch = require("node-fetch")

async function fetchgoogledata() {
    var response = await fetch("https://www.google.com");

    var data = await response.text();

    // console.log(data);
    return data;
}

app.get("/", async (req, res) => {
    var data = await fetchgoogledata();
    res.send(data);
})

app.listen(8000, () => {
    console.log("Server is listening on PORT 8000")
})