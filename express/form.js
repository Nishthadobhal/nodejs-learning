import express from "express";
import {port} from "./env.js";
import path from "path";

const app=express();

const staticpath=path.join(import.meta.dirname,"public");

app.use(express.static(staticpath));
app.use(express.urlencoded({extended:true}));

app.post("/contact",(req,res)=>{
console.log(req.body);
// res.redirect("/");
res.send("ok");
})

app.use((res,req)=>{
    return res.Status(404).send("page not found");
})
app.listen(port,()=>{
    console.log(`servve running at port  ${port}`);
    
})
