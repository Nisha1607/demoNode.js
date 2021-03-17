const EventEmitter = require('events');

const event = new EventEmitter();

/* event.on('sayMyName',()=>{
    console.log('my name is nisha jadhav...')
});

event.on('sayMyName',()=>{
    console.log('my name is asha jadhav...')
});

event.on('sayMyName',()=>{
    console.log('my name is akshata jadhav...')
});

event.emit('sayMyName'); */
event.on('checkPage',(sc,msg)=>{
    console.log(`status code is ${sc} and msg is ${msg}`);
})

event.emit('checkPage',200,"ok");