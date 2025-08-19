import  express from 'express';
import {port} from "./env.js";
import path from "path";

const app=express();  


app.get("/profile/:username",(req,res)=>{
    console.log(req.params);
    res.send("hi");
})

app.get("/profile/:username/article/:slug",(req,res)=>{
    console.log(req.params);
    res.send(`article ${req.params.slug} by ${req.params.username}  `);
})

//query selector
app.get("/product",(req,res)=>{
    console.log(req.query);
res.send(`productt page ${req.query.search} and limit is  ${req.query.limit}`);
    
})


app.listen(port,()=>{
     console.log(`server is running at port ${port}`)
});