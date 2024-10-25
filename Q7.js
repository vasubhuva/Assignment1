const fs = require("fs");

function unlink(fpath) {
    return new Promise((success, fail) => {
        fs.unlink(fpath, (err) => {
            if (err)
                fail(err);
            success("File deleted Successfully");
        })
    })
}

unlink("./file.txt")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })