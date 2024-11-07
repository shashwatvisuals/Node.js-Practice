const EventEmitter = require("events")

const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("1")
})
event.on("sayMyName", () => {
    console.log("2")
})
event.on("sayMyName", () => {
    console.log("3")
})

event.emit("sayMyName");

event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`)
})

event.emit("checkPage", 200, "ok");

