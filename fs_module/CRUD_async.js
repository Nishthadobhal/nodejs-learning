const fs=require("fs");
const path=require("path");

const filename="fsasync.txt";

const filepath=path.join(__dirname,filename);

// write file
fs.writeFile(filepath,"this is the initial data",
    "utf-8",
   (err)=>{
    if(err) console.error(err);
    else console.log("file has been saved");

   }
);

//read file
fs.readFile(filepath,"utf-8",
    (err,data)=>{
    if(err) console.error(err);
    console.log(data);
} );

//append
fs.appendFile(filepath," updated data","utf-8",
    (err)=>{
if(err) console.error(err);
else console.log("file has been updated");
    }
)

//delete
fs.unlink(filepath,(err)=>{
    if(err) console.error(err);
    else console.log("file deleted");
})