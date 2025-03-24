weatherDiv = document.querySelector("#weather");

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=43.91&lon=-111.68&units=imperial&appid=2261e297cafa4fe59c9b011a4aebe694";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
    } else {
        const data = await response.json();
        console.log(data);
        displayResults(data);
    }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    data.forEach(data => {
        console.log(data);
        let cTempP = document.createElement('p');
        let weatherIcon = document.createElement('img');
        let currentTemp = document.createElement('span');
        let weatherIconName = document.createElement('p');
        let weatherSection = document.createElement('section');
        cTempP.textContent = `The temerature is`;
        currentTemp.textContent = `${data.main.temp}`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute("src", `${iconsrc}`);
        weatherIcon.setAttribute("alt", "weatherIcon");
        weatherIconName.textContent = `${desc}`;
        cTempP.appendChild(currentTemp);
        weatherSection.append(cTempP, weatherIcon, weatherIconName);
        weatherDiv.append(weatherSection);
    });
}

apiFetch();

