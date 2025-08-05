import https from 'https';
import chalk from  'chalk';

const getjoke=()=>{
const url='https://official-joke-api.appspot.com/random_joke';

https.get(url,(res)=>{
    let data="";
res.on('data',(chunk)=>{
 data+=chunk;
});
res.on('end',()=>{
    const joke=JSON.parse(data);
    console.log(joke);
    console.log(`here is a random ${joke.type} joke`);
    console.log(chalk.red(`${joke.setup}`));
    console.log(chalk.blue.bgRed.bold(`${joke.punchline}`));
});
res.on('error',(error)=>{
    console.error(`error fetching the joke ${error.message}`);
})
});
}

getjoke();