//Create a command line interface that lets the user specify a file
// path and the nodejs process counts the number of words inside it.


//Input - node index.js /Users/yashajsingh/file.txt
//Output - You have 10 words in this file.

const { program } = require('commander');
const fs= require('fs');
program
  .option('--first')
  .option('-s, --separator <char>')
  .argument('<string>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));