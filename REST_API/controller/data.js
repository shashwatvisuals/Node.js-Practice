const fs = require("fs")
//bodyParser
// server.use(express.json())
const data = JSON.parse(fs.readFileSync(`${__dirname}/../../jsonNode/userApi/userData.json`, "utf-8"))

//API ROOT, base URL

exports.createData = (req,res) => {
    console.log(req.body)
    data.push(req.body);
    res.status(201).json(req.body)
}
exports.getAllData = (req,res) => {
    res.json(data)
}
exports.getData = (req,res) => {
    const name = req.params.name
    const datas = data.find(p=>p.name===name)
    res.json(datas)
} 
exports.replaceData = (req,res) => {
    const name = req.params.name
    const dataIndex = data.findIndex(p=>p.name===name)
    data.splice(dataIndex,1,{...req.body, name:name})
    res.status(201).json()
}
exports.updateData =  (req,res) => {
    const name = req.params.name
    const dataIndex = data.findIndex(p=>p.name===name)
    const prevData = data[dataIndex]
    data.splice(dataIndex,1,{...prevData,...req.body, name:name})
    res.status(204).json()
}
exports.deleteData = (req,res) => {
    const name = req.params.name
    const dataIndex = data.findIndex(p=>p.name===name)
    const prevData = data[dataIndex]
    data.splice(dataIndex,1)
    res.json(prevData)
}