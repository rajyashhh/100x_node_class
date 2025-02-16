// console.log("Hey Baby!");
// console.log(__dirname);
// console.log(path.join(__dirname,"../..index.js", "node"))

const fs = require("fs");

function main(fileName){
    fs.readFile(fileName, "utf-8", function(err,data){
        let total = 0
        for(let i=0; i<data.length; i++){
            if(data[i]===" "){
                total++;
            }
        }
        console.log(total+1)
    })
}
main(process.argv[2]);