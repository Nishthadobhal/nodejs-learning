// const readline=require('readline');
// const path=require("path");
// const fs=require("fs");
// import readline from 'readline';
// import path from 'path';
// import fs from 'fs';


// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })
// let filepath = ""; // Declare globally to use in multiple functions
// let filenameStr = ""; // Also keep file name if needed

// //defining function
// const createapp=()=>{
//     rl.question("enter the file name:",filename);
// // rl.question("\n enter the content for the file:",datainput);
// }
// const filename=(name)=>{
//      filenameStr = name;
//  filepath = path.join(__dirname,name);
// rl.question("\n enter the content for the file:",datainput);

// }
// const datainput=(data)=>{
// fs.writeFile(filepath,data,(err)=>{
// if(err){
//     console.log(error,err);
// }
// else{
//     console.log(`file "${filenameStr}"created succesfully`);
// }
// rl.close();
// });
// };

// createapp();//call function
 //this method is correct but for this i ave to remove tye:module fro package.json




 import readline from 'readline';
import fs from 'fs';

const rl=readline.createInterface({
input:process.stdin,
output:process.stdout
})

const  filecreation=()=>{
    rl.question("enter file name:",(filename)=>{
        rl.question("enter the content of your file",(content)=>{
fs.writeFile(`${filename}.txt`,content,(err)=>{
    if(err){
        console.error("error",err);
    }else{
        console.log(`file "${filename}.txt" created successfully`);
    }
    rl.close();
})
        })
    })
}
filecreation();