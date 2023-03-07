const fs = require("fs");

fs.unlink("arquivo.txt", function (err, data) {
    if (err) {
        console.log(err);
        return
    }

    console.log("Arquivo removido!");
})