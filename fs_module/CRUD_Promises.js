const fs=require("fs");
const path=require("path");
const filename="crud_promise.txt";
const filepath=path.join(__dirname,filename);

//write
fs.promises
.writeFile(filepath,"this is the initial  data",'utf-8')
.then(console.log("fille ceated succesfully"))
.catch((err)=>console.log(err));


// const file=__dirname;

// fs.promises
// .readdir(file)
// .then((data)=>console.log(data))
// .catch((err)=>console.error(err));

//read
fs.promises
.readFile(filepath,'utf-8')
.then((data)=>console.log(data))
.catch((err)=>console.log(err));


//append
fs.promises
.appendFile(filepath,"  updated file",'utf-8')
.then(console.log("data got updated"))
.catch((err)=>{console.log(err)});