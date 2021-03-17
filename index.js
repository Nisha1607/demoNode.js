const fs = require('fs');

//creating new file and adding data ..override
fs.writeFileSync('read.txt',"Hey there sweety!");

//appending data into file without ovriding ,,, creating if its already not there
fs.appendFileSync('read.txt',"how u doin !");

fs.appendFileSync('write.txt',"are you alright?");

const buff_data=fs.readFileSync("read.txt");
console.log(buff_data.toString());

//to rename
fs.renameSync('read.txt','read_write.txt');