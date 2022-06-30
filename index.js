const fs = require('fs');
const data = require("./data.json")

let readJson = fs.readFileSync('./data.json');
console.log(data);
console.log(readJson.toString());

const dataMap = data.map((ele) => {
    return `${ele.id} - ${ele.title}
    ${ele.description}.

`
}).join('\n\n');

console.log(dataMap);

fs.writeFile("newData.txt", dataMap, () => { })
