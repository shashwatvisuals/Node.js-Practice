const http = require("http");
const fs = require("fs")
const server = http.createServer((req,res) => {
    const data = fs.readFileSync(`${__dirname}/../jsonNode/userApi/userData.json`,"utf-8")
    const objData = JSON.parse(data);
        
    console.log(req.url);
    if(req.url == "/"){
    res.end("hello guys i am shashwat mishra ji")
    }else if(req.url == "/about"){
        res.end("this about page")
    }else if(req.url == "/contact"){
        res.end("this is contact page")
    }else if(req.url == "/userapi"){
        // console.log(objData)
        res.writeHead(200, {"content-type": "application/json"});
        res.end(objData[1].age.toString());
    }else{
        res.writeHead(404,{"content-type":"text/html"})

        res.end("<h1>Error! 404 page not found</h1>")
    }
})

server.listen(7000,"127.0.0.1", ()=> {console.log("listening to the port no 7000")})