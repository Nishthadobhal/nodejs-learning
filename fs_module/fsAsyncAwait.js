
const fs=require("fs");
const path=require("path");
const filename="await.txt";
const filepath=path.join(__dirname,filename);
//  const filepath=__dirname;


// const readFolder=async()=>{
//     try{
//   const files = await fs.promises.readdir(filepath);
//         console.log("Files in folder:", files);
//     }
//     catch(error) {
//         console.error(error);

//     }
// };

// readFolder();

//write
const writefile=async()=>{
    try{
 await fs.promises.writeFile(filepath,"initial data",'utf-8');
console.log("file saved");;
    }
    catch(error){
        console.error(error);
    }
}

writefile();

//read file
const  readfile=async()=>{
    try{
const data=await fs.promises.readFile(filepath,'utf-8');
console.log(data);
    }
    catch(error){
        console.error(error);
    }
}

readfile();

//append data
const append=async()=>{
    try{
await fs.promises.appendFile(filepath,"  updated data",'utf-8');
console.log("update completed");
    }
    catch(error){
        console.error(error);
    }
    
};

append();