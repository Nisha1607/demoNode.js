// 1. traditional method without streaming
/*const http=require('http');

const server=http.createServer();

 server.on('request',(req,res)=>{
    var fs=require('fs');
    fs.readFile('input.txt',(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString());
    });
})

server.listen(8000,'127.0.0.1'); */

//2. chunkwise streaming

/* const http=require('http');

const server=http.createServer();

 server.on('request',(req,res)=>{
    var fs=require('fs');
    const rstream=fs.createReadStream('input.txt');
    rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    })
    rstream.on('end',()=>{
        res.end();
    })
    rstream.on('error',(err)=>{
        console.log(err);
        res.end('file not found');
    })
}); */

//3.pipe-
const http=require('http');

const server=http.createServer();

 server.on('request',(req,res)=>{
    var fs=require('fs');
    const rstream=fs.createReadStream('input.txt');
    rstream.pipe(res);
 });


server.listen(8000,'127.0.0.1'); 
