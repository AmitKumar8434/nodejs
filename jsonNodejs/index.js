const bioData = {
    name: "Amit Kumar",
    age: 21,
    education: "engineer",

};
// console.log(bioData);
// const jsonData = JSON.stringify(bioData);
// const objData = JSON.parse(jsonData);
// console.log(jsonData);
// console.log(objData);

//CHALLENGE
// 1: Convert to JSON
// 2: Add in another File
// 3: ReadFile
// 4: Again convert vack to JSON
//5: console.log
const fs = require('fs');
const jsonData = JSON.stringify(bioData);
// fs.writeFile('json1.json', jsonData, (err) => {
//     console.log('done');
    
// });
fs.readFile("json1.json", "utf-8", (err, data) => {
    const orgdata = JSON.parse(data);
    console.log(orgdata);
    console.log(data);

})

