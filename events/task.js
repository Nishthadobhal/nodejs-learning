const EventEmitter=require('events');

const emitter =new EventEmitter();

const eventcounts={
    "user-login":0,
    "user-logout":0,
    "user-purchase":0,
    "profile-update":0
};

//defining
emitter.on("user-login",(username)=>{
    eventcounts["user-login"]++;
    console.log(`name is ${username}`);
});
emitter.on("purchase",({laptop,mobile})=>{
       eventcounts["user-purchase"]++;
    console.log(`laptop purchased is ${laptop} and mobile is ${mobile} `);
});
emitter.on("profile-update",(name,email)=>{
       eventcounts["profile-update"]++;
console.log(`name is ${name} and mail is ${email}`);
});
emitter.on("user-logout",(username)=>{
       eventcounts["user-logout"]++;
    console.log(`username is ${username}`);
});

emitter.on("summary",()=>{
    console.log(eventcounts);
});
//calling
emitter.emit("user-login","nishtha");
emitter.emit("purchase",{laptop:"acer", mobile:"iphone"});
emitter.emit("profile-update","nishta","email");
emitter.emit("user-logout","nishtha");

emitter.emit("summary");