const fs=require('fs'); //module for crud operation
const filename="test.txt";
//const filepath=path.join(__dirname,filename);
// now we can use filepath instead of  using file name ..
const writefile=fs.writeFileSync(filename,"this is the initial data","utf-8");
console.log(writefile);

//read
const readfile=fs.readFileSync(filename);
console.log(readfile.toString());

//update
const appendfile=fs.appendFileSync(filename," appended");
console.log(appendfile); //changes happend in the main file

//delete
// const unlinkfile=fs.unlinkSync(filename);
// console.log("filedeleted");

//rename
// const renamefile=fs.renameSync(filename,"newtext.txt");