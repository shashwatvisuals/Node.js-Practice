const http = require("http");
const server = http.createServer((req,res) => {
    console.log(req.url);
    if(req.url == "/"){
    res.end("hello guys i am shashwat mishra ji")
    }else if(req.url == "/about"){
        res.end("this about page")
    }else if(req.url == "/contact"){
        res.end("this is contact page")
    }else{
        res.writeHead(404,{"content-type":"text/html"})

        res.end("<h1>Error! 404 page not found</h1>")
    }
})

server.listen(7000,"127.0.0.1", ()=> {console.log("listening to the port no 7000")})