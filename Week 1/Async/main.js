const fs = require("fs");

function readFile() {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        if (err) {
            console.error(err);
        } else {
            console.log(data);
            console.log("File read successfully!");
        }
    });
}

console.log("Hello");
readFile();


