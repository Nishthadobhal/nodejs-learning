const http= require('http');
//create server
const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        res.write("welcome nishtha ");
        res.end();
    }


if(req.url==="/source"){
    res.write("welcome again");
    res.end();
}
});

const port=3000;
server.listen(port,()=>{
console.log(`listening on port ${port}`);
})