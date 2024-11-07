  const fs = require ("fs")
  
  const bioData = {
    name: "Shashwat",
    age: 24,
    qualification: "b.tech"
  };

  const jsonData = JSON.stringify(bioData)

  const objData = JSON.parse(jsonData)

 fs.writeFile("json1.json",jsonData, (err) => {
    console.log("done");
 });