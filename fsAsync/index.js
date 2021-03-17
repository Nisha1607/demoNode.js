const fs=require('fs');

fs.writeFile('read.txt',"Asynchronous function",(err)=>{
    console.log(`file is created with ${err} errors` );
})

fs.readFile('read.txt','UTF-8',(err,data)=>{
    console.log(data);
})