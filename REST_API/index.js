const fs = require("fs")
PORT = "8000"
const express = require("express")
const server = express();
//bodyParser
server.use(express.json())
const dataController = require("./controller/data");
const { router } = require("./routes/product");

server.use("/data",router);
server.listen(PORT , () => {
    console.log("server started.......")
    console.log("server is running")
})
