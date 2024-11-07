const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res) => {
    if (req.url === "./favicon.ico") return res.end(null);
    const currentTimestamp = Date.now();
     const date = new Date(currentTimestamp);

    const log = `${date.toString()}: ${req.url} new request received\n`
    const myUrl = url.parse(req.url)
    console.log(myUrl)
    fs.appendFile("log.text", log, (err, data) => {})
    res.end("Hello from server Again")

    switch(myUrl.pathname){
        case "/" : res.end("Home page")
        break
        case '/about' : res.end("i am shashwat mishra")
        break
        default : res.end("404 Not Found")
    }
    }
)
myServer.listen(7000, () => console.log("server Started!......"))