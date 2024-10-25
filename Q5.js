const fs = require("fs");
var zlib = require("zlib");

fs.createReadStream("./public/Q1.html")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("public.gz"))