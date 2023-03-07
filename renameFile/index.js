const fs = require("fs");

let oldFile = "File.txt";
let newFile = "newFile.txt";

fs.rename(oldFile, newFile, function(err) {
    if (err) {
        console.log(err);
        return
    }

    console.log(`O arquivo ${oldFile} foi renomeado para ${newFile}`);
})

