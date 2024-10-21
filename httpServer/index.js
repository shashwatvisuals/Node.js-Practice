const http = require("http")
const fs = require("fs")

const myServer = http.createServer((req, res) => {
    const currentTimestamp = Date.now();
     const date = new Date(currentTimestamp);

    const log = `${date.toString()}: new request received\n`
    fs.appendFile("log.text", log, (err, data) => {})
    res.end("Hello from server Again")
});

myServer.listen(7000, () => console.log("server Started!......"))