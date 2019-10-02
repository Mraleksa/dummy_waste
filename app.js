const fs = require('fs');
const someData = 2;

async function startMath (){
    const dataFromFile = +fs.readFileSync("inputData.tsv", "utf8")
    console.log(dataFromFile+someData )
}
startMath ()