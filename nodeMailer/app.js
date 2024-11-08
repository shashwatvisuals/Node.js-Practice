const express = require("express");

const app = express();

app.get("/", (req, res) => {
res.send("I am a server")
});

const start = async () => {
    try {
        app.listen(5000,() => {
            console.log("i am live in port no : 5000")
        })
    }catch(error){
        console.log(error)
    }
}

start();