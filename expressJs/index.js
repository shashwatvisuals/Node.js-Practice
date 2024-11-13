const express = require("express")
const fs = require("fs");
const { type } = require("os");
const server = express();

const data = JSON.parse(fs.readFileSync(`${__dirname}/../jsonNode/userApi/userData.json`, "utf-8"));
// console.log(data)



const auth = (req, res, next) => {
    console.log(req.query)
    if(req.query.password=='123'){
        next();
    }else{
        res.sendStatus(401);
    }
    
}
//logger - middleware

server.use((req, res, next) => {
    console.log(req.method, req.ip, new Date(), req.hostname, req.get('User-Agent'))
    next();
})
//logger - middleware

//API - Endpoint - Route
server.get('/', auth ,(req,res) => {
    res.json({type:'GET'})
})

server.post('/', auth ,(req,res) => {
    res.json({type:'POST'})
})

server.put('/',auth ,(req, res) => {
    res.json({type:'PUT'})
})

server.delete('/',auth, (req, res) => {
    res.json({type:'DELETE'})
})

server.patch('/', auth ,(req, res) => {
    res.json({type:'PATCH'})
})

//API - Endpoint - Route




server.get('/demo', (req, res) => {
    res.send(JSON.stringify(data))
    // res.json(data)

    // res.sendFile("absolute directory")
})













server.listen(8000, () => {
    console.log('server started........')
})