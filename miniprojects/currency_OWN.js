import https from 'https'
import readline from 'readline'
import chalk from 'chalk';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

  const currencyconvert=(amount,rate)=>{
        return (amount*rate);

    }

const apikey='7771434da694a8ef426695c5';
const url=`https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;

https.get(url,(res)=>{
let data="";
res.on('data',(chunk)=>{
    data+=chunk;
});
res.on('end',()=>{
    const parsed=JSON.parse(data);
rl.question('enter the amount in usd:',(amount)=>{
rl.question('enter the target currency (e.g, INR,EUR):',(currency)=>{
    const  rate=parsed.conversion_rates[currency];
    const converted=currencyconvert(amount,rate);
console.log(`${amount} usd is approx ${converted} ${currency}`);
})
})
})

})