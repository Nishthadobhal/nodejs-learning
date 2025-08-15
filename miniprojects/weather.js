import readline from 'readline';

const apikey = '68d39d9605380fb5c5327f2e8395b501';
const baseurl = 'https://api.openweathermap.org/data/2.5/weather';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getweather = async (city) => {
    const url = `${baseurl}?q=${city}&appid=${apikey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('city not found. please check city name');
        }
        const weatherdata = await response.json();
        console.log(weatherdata);
        console.log('\n weather info');
        console.log(`CITY : ${weatherdata.name}`);
        console.log(`Temp: ${weatherdata.main.temp} C`);
        console.log(`Descrip: ${weatherdata.weather[0].description}`);
        console.log(`Humidity: ${weatherdata.main.humidity}%`);
        console.log(`Wind speed: ${weatherdata.wind.speed} m/s \n`);
    } catch (error) {
        console.log(error);
    }
};

// ✅ Fix: wrap in async function since top-level await isn't allowed in CommonJS
const main = async () => {
    rl.question('enter a city name to get its weather: ', async (city) => {
        await getweather(city);
        rl.close();
    });
};

main();
