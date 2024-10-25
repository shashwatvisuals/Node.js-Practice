
const fs =  require('fs')

fs.appendFileSync("bio.txt", "i am shashwat mishra\n");
const data = fs.readFileSync("bio.txt", "utf-8")
console.log(data)
console.log(data.toString())
fs.appendFileSync("bio.txt", "and she is sukriti mishra\n");
// fs.unlinkSync("bio.txt")

fs.readFile("bio.txt", "utf-8", (err,data) => {
    console.log(err)
    console.log(data)
});

const os = require("os")
const freeMemory = os.freemem();
console.log(`${freeMemory/1024/1024/1024}`);
const totalMemory = os.totalmem();
console.log(`${totalMemory/1024/1024/1024}`);