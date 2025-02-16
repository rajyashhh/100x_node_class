//Create a command line interface that lets the user specify a file
// path and the nodejs process counts the number of words inside it.


//Input - node index.js /Users/yashajsingh/file.txt
//Output - You have 10 words in this file.

const { Command } = require('commander');
const program = new Command();
const fs= require('fs');



program
  .name('counter')
  .description('CLI to count words in a file')
  .version('0.1.1');

program.command('count_words')
  .description('Counts the number of words in a file')
  .argument('<file>', 'file in whoch word has to be counted')
  
  .action(((fileName)=>{
    fs.readFile(fileName, "utf-8", function(err,data){
        let total = 0
        for(let i=0; i<data.length; i++){
            if(data[i]===" "){
                total++;
            }
        }
        console.log(`There are total ${total} number of words in ${fileName}.`)
    })

  }));
  program.command('count_lines')
  .description('Counts the number of lines in a file')
  .argument('<file>', 'file in whoch word has to be counted')
  
  .action(((fileName)=>{
    fs.readFile(fileName, "utf-8", function(err,data){
        let total = 0
        for(let i=0; i<data.length; i++){
            if(data[i]==="\n"){
                total++;
            }
        }
        console.log(`There are total ${total+1} number of lines in ${fileName}.`)
    })

  }));

program.parse();