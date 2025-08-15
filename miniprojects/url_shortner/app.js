import { createServer } from 'http';
import { readFile,writeFile } from 'fs/promises';
import path from "path";
import { fileURLToPath } from 'url';
import { log } from 'console';
import crypto from "crypto";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3002;
const data_file = path.join(__dirname, "data", "links.json");


const servefile = async (res, filepath, contentType) => {
    try {
        const data = await readFile(filepath); 
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    } catch (error) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 page not found");
    }
};
const loadlinks=async()=>{
    try {
        const data=await readFile(data_file,'utf-8');
        return JSON.parse(data); 
    } catch (error) {
        if(error.code==='ENOENT'){
            await writeFile(data_file,JSON.stringify({}));
            return{};
        }
        throw error;
    }
}

const savelinks=async(links)=>{
await  writeFile(data_file,JSON.stringify(links));

}
const server = createServer(async (req, res) => {

    // ----------------- GET Requests(jo ham serach bar mai likh rhe hain) ----------------- 
    if (req.method === "GET") {
        if (req.url === "/") { //home page 
            return servefile(res, path.join(__dirname, "public", "index.html"), "text/html");
        } 
        else if (req.url === "/style.css") {  //home pge open hoga toh automatically yeh bhi open hoga bcoz in html page we have added the css link
            return servefile(res, path.join(__dirname, "public", "style.css"), "text/css");
        } 
        else if(req.url==="/links"){
            const links=await loadlinks();
            res.writeHead(200,{"Content-Type":"application/json"});
            return res.end(JSON.stringify(links));
        }
        else {  //agar hamne jo serach bar mai localhost3002/github ese likah toh agr vo vala already present hai toh open kar dega ....
            // Short URL redirect
            const shortcode = req.url.slice(1);
            const links = await loadlinks();
            if (links[shortcode]) {
                res.writeHead(302, { Location: links[shortcode] });
                return res.end();
            }
        }

        // Agar GET request match nahi hui
        res.writeHead(404, { "Content-Type": "text/plain" });
        return res.end("Not Found");
    }

    // ----------------- POST Requests (jo ham submit kar rhe hain)-----------------
    if (req.method === "POST" && req.url === "/shorten") {
        const links = await loadlinks();
        let body = "";
        
        req.on("data", (chunk) => (body += chunk));
        req.on("end", async () => {
            const { url, shortcode } = JSON.parse(body);
            if (!url) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end("url is required");
            }

            const finalshortcode = shortcode || crypto.randomBytes(4).toString("hex");

            if (links[finalshortcode]) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                return res.end("short code already exists, choose another");
            }

            links[finalshortcode] = url;
            await savelinks(links);

            res.writeHead(200, { "Content-Type": "application/json" });
            return res.end(JSON.stringify({ success: true, shortcode: finalshortcode }));
        });
        return;
    }

    // Agar POST ka bhi match nahi hua
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
});


// const server = createServer(async (req, res) => {
//     if (req.method === "GET") {
//         if (req.url === "/") {
//             return servefile(res, path.join(__dirname, "public", "index.html"), "text/html");
//         } else if (req.url === "/style.css") {
//             return servefile(res, path.join(__dirname, "public", "style.css"), "text/css");
//         }
//         else{
//             // Handle short URL redirection
//         const shortcode = req.url.slice(1); // remove "/"
//         const links = await loadlinks();
//         if (links[shortcode]) {
//             res.writeHead(302, { Location: links[shortcode] });
//             return res.end();
//         }
//     }

// if(req.method==="POST" && req.url==="/shorten"){

//     const links=await loadlinks();
//     let body="";
//     req.on("data",(chunk)=>(body+=chunk));
//     req.on('end',async ()=>{
//       const {url,shortcode}=JSON.parse(body);
//       if(!url){
//         res.writeHead(400,{"Content-Type":"text/plain"});
//         return res.end("url is required"); 
//       }
      
//       const finalshortcode=shortcode || crypto.randomBytes(4).toString("hex");

//       if(links[finalshortcode]){
// res.writeHead(400,{"Content-Type":"text/plain"});
// return res.end("short code already exists ,choose another");
// }

// links[finalshortcode]=url;
// await savelinks(links);
// res.writeHead(200,{"Content-Type":"application/json"});

//  return res.end(JSON.stringify({success:true,shortcode:finalshortcode}));
//     });
// }




//     // Handle everything else
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Not Found");
// });

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
