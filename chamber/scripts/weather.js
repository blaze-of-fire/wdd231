const weatherDiv = document.querySelector("#weather");
const cWeatherDiv = document.querySelector("#current_weather");
let weather = document.querySelector("#weather");


const url = "https://api.openweathermap.org/data/2.5/forecast?lat=43.91&lon=-111.68&units=imperial&appid=2261e297cafa4fe59c9b011a4aebe694";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
    } else {
        const data = await response.json();
        displayResults(data.list);
    }
    } catch (error) {
        console.log(error);
    }
}

const time = new Date();
let day = time.getDay();
const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function displayResults(data) {
    let count = 0;
        data.forEach(object => {
            if (count  < 4){
            let dayH2 = document.createElement('p');
            dayH2.textContent = `${daysOfWeek[(day+count)]}`;
            dayH2.setAttribute("class", "day");

            let cTempP = document.createElement('p');
            let weatherIcon = document.createElement('img');
            let currentTemp = document.createElement('span');

            let weatherIconName = document.createElement('p');
            let weatherSection = document.createElement('section');
            weatherSection.setAttribute("class", "weather_section");
            if (count == 0){
                weatherSection.setAttribute("id", "current_w");
            }
            cTempP.textContent = `The temerature is `;

            currentTemp.textContent = `${object.main.temp}`;
            const iconsrc = `https://openweathermap.org/img/w/${object.weather[0].icon}.png`;
            let desc = object.weather[0].description;

            weatherIcon.setAttribute("src", `${iconsrc}`);
            weatherIcon.setAttribute("alt", "weatherIcon");
            weatherIconName.textContent = `${desc}`;

            cTempP.appendChild(currentTemp);
            weatherSection.append(dayH2);
            weatherSection.append(cTempP, weatherIcon, weatherIconName);
            count = count + 1;
            if (count != 1){
                weather.append(weatherSection);
            }
            else{
                cWeatherDiv.append(weatherSection);
            }
            }
        });
        weatherDiv.append(weather);
};
apiFetch();

