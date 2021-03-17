const http = require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end('this is home page..');
    }else if(req.url=='/contactUs'){
        res.end('this is contactUs page..');
    }else if(req.url=='/about'){
        res.end('this is about page..');
    }else if(req.url=='/api'){
        fs.readFile(`${__dirname}/UserApi/userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            res.end(data);
        })
        
    }else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1> 404 error page.Page doesnt exists </h1>")
    }
});


server.listen(8000,'127.0.0.1',()=>{
    console.log('listening to port 8000');
});