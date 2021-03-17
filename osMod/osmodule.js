const os=require('os');

//console.log(os.arch());
const totalmemory=os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`);