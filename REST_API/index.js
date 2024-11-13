const fs = require("fs")
PORT = "8000"
const express = require("express")
const server = express();
//bodyParser
server.use(express.json())
const data = JSON.parse(fs.readFileSync(`${__dirname}/../jsonNode/userApi/userData.json`, "utf-8"))



//API ROOT, base URL

// READ GET/data
server.get('/data', (req,res) => {
    res.json(data)
}); 

server.get('/data/:name', (req,res) => {
    const name = req.params.name
    const datas = data.find(p=>p.name===name)
    res.json(datas)
});


//CREATE POST/data
server.post('/data', (req,res) => {
    console.log(req.body)
    data.push(req.body);
    res.status(201).json(req.body)
})

//UPDATE PUT/data
server.put('/data/:name', (req,res) => {
    const name = req.params.name
    const dataIndex = data.findIndex(p=>p.name===name)
    data.splice(dataIndex,1,{...req.body, name:name})
    res.status(201).json()
});


//UPDATE Patch/data/:name or id
server.patch('/data/:name', (req,res) => {
    const name = req.params.name
    const dataIndex = data.findIndex(p=>p.name===name)
    const prevData = data[dataIndex]
    data.splice(dataIndex,1,{...prevData,...req.body, name:name})
    res.status(204).json()
});


//DELETE delete/data/:name or id
server.delete('/data/:name', (req,res) => {
    const name = req.params.name
    const dataIndex = data.findIndex(p=>p.name===name)
    const prevData = data[dataIndex]
    data.splice(dataIndex,1)
    res.json(prevData)
});






server.listen(PORT , () => {
    console.log("server started.......")
})
