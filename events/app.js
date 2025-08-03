const EventEmitter=require('events');

//create an instance
const emitter=new EventEmitter();

//define an event listener
// emitter.on("greet",()=>{
//         console.log("hello");
//     });

    // call an event listener
    // emitter.emit("greet");

//pass an argument
emitter.on("greet",(username,prof)=>{
    console.log(`hello ${username} you are ${prof}`);
});

emitter.emit("greet","nishtha","web dev");