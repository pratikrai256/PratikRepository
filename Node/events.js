const events=require('events');
const EventEmitter=events.EventEmitter;
const eventEmitter=new EventEmitter();
//Publisher of the event
eventEmitter.on('test',()=>{
    console.log('This is the first part of Test Event');
})
eventEmitter.on('test',()=>{
    console.log('This is the second part of Test Event');
})
eventEmitter.on('add',(a,b)=>{
    console.log('Sum of a,b is',(a+b));
})
//Listener of the  Add Event
eventEmitter.emit('add',12,13)
//Listener of the  Test Event
eventEmitter.emit('test')

// to fetch Event Names
console.log(eventEmitter.eventNames());

//Another way of creating Events
const prod=(a,b)=>{
    console.log("The product result is:",(a*b));
}
eventEmitter.on('product',prod);
eventEmitter.emit('product',12,10);
//Event names before removing events
console.log(eventEmitter.eventNames());
//After Removal of events
eventEmitter.removeListener('product',prod)
console.log(eventEmitter.eventNames());


//After Removal of all events
eventEmitter.removeAllListeners()
console.log(eventEmitter.eventNames());

