// const { log } = require("console");
const path=require("path");

console.log(__dirname);
console.log(__filename);

const filepath=path.join("folder","students","data.txt");
console.log(filepath);

const parsedata=path.parse(filepath);
const resolvedPath=path.resolve(filepath); //give us the absolute path
const extname=path.extname(filepath); //extension name
const basename=path.basename(filepath);//return the last part of a path
const dirname=path.dirname(filepath);//return the directory path

console.log({parsedata,resolvedPath,extname,basename,dirname});