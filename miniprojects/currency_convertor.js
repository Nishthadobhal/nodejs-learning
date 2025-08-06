// import https from 'https';
// import readline from 'readline';
// import chalk from 'chalk';
// import { inflateRaw } from 'zlib';

// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// })

// const url = `https://v6.exchangerate-api.com/v6/${apikey}/Latest/USD`;
// const convertcurrency=(amount,rate)=>{
//     return (amount*rate).toFixed(2);
// }
// https.get(url,(res)=>{
// let data="";
// res.on('data',(chunk)=>{
// data+=chunk;
// })
// res.on('end',()=>{
//     const rates=JSON.parse(data).conversion_rates;
//     rl.question('enter the amount in usd:',(amount)=>{
//         rl.question('enter the target currency (e.g.,INR,EUR,NPR):',({
// const rate=rates.[currency.toUpperCase()];
// if(rate){
//     console.log(`${amount} USD is app. ${convertcurrency(amount,rate)} ${currency}`)

// }else{
//     console.log(`invalid currency code`);
// }
// rl.close();
//         })
//     })
    
// })
// })

import https from 'https';
import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,  
  output: process.stdout
});


const apikey = '7771434da694a8ef426695c5';

const url = `https://v6.exchangerate-api.com/v6/${apikey}/latest/USD`;  

const convertcurrency = (amount, rate) => {
  return (amount * rate).toFixed(2);
};

https.get(url, (res) => {
  let data = "";

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    const parsed = JSON.parse(data);
    
    // Check if API response was successful
    if (parsed.result !== 'success') {
      console.log(chalk.red('Failed to fetch exchange rates.'));
      rl.close();
      return;
    }

    const rates = parsed.conversion_rates;

    rl.question('Enter the amount in USD: ', (amount) => {
      rl.question('Enter the target currency (e.g., INR, EUR, NPR): ', (currency) => {
        const rate = rates[currency.toUpperCase()]; 
        if (rate) {
          const converted = convertcurrency(parseFloat(amount), rate);
          console.log(chalk.green(`${amount} USD is approximately ${converted} ${currency.toUpperCase()}`));
        } else {
          console.log(chalk.red('Invalid currency code.'));
        }
        rl.close();
      });
    });
  });

}).on('error', (err) => {
  console.error(chalk.red('Error fetching exchange rates:', err.message));
});
