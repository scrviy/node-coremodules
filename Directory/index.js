const fs = require("fs");

if (!fs.existsSync("./myDir")) {
    console.log("Não existe.");
    fs.mkdirSync("myDir");
} else if (fs.existsSync("./myDir")) {
    console.log("Existe.");
}