const events=require('events');
const EventEmitter=events.EventEmitter;
const eventEmitter1=new EventEmitter();
//Publisher of the event
eventEmitter1.on('test',()=>{
    console.log('This is the first publisher of Test Event');
})
eventEmitter1.on('test',()=>{
    console.log('This is the second publisher of Test Event');
})
eventEmitter1.emit('test')
eventEmitter1.emit('test')
const eventEmitter2=new EventEmitter();
//Publisher of the event
eventEmitter2.once('test2',()=>{
    console.log('This is the first publisher of Test2 Event');
})
eventEmitter2.once('test2',()=>{
    console.log('This is the second publisher of Test2 Event');
})
eventEmitter2.emit('test2')
eventEmitter2.emit('test2')
