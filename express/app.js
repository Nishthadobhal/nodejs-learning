import  express from 'express';
import {port} from "./env.js";
import path from "path";

const app=express();


app.use(express.static("public"));

app.get("/",(req,res)=>{
    // console.log(import.meta.dirname);
    //   console.log(import.meta.url);

const homepagepath=path.join(import.meta.dirname,"public","index.html");
res.sendFile(homepagepath);

});

// const port= process.env.port || 3000;

app.listen(port,()=>{
    console.log(`server is running at port: ${port}`);
});
