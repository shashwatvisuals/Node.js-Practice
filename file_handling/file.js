const { error } = require("console");
const fs = require("fs")

//for adding a file with content

// fs.writeFileSync("./test1.txt","Hey there this is for test purpose")

//for deleting a file using "unlink"

// try {
//     fs.unlinkSync("./test.txt");
// } catch (err) {
//     console.log("Error in Deleting file", err);
// }

//write file synchronusouly

fs.writeFileSync("./test1.txt","Hey there this is for test purpose for synchronus write");

//write file asynchronusouly

fs.writeFile("./test2.txt","this is for asynchronous purpose", (err) => {});

//Create a empty file

// fs.writeFileSync("./contact.txt","")

//Read File Synchronuously
const result = fs.readFileSync("./contact.txt", "utf-8")
console.log(result)

//Read File Asynchronuously
fs.readFile("contact.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error", err)
    }else {
        console.log(result);
    }
})

//append content in the file
fs.appendFileSync("./contact.txt", new Date().getDate().toLocaleString());