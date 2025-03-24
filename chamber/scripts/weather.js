cTemp = document.getElementById("current-temp");
weatherIcon = document.getElementById("weather-icon");
weatherIconName = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/forecast?lat=43.91&lon=-111.68&units=imperial&appid=2261e297cafa4fe59c9b011a4aebe694";

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(await response.text());
    } else {
        const data = await response.json();
        displayResults(data);
    }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    cTemp.innerHTML = `${data.main.temp}`;
const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", `${iconsrc}`);
    weatherIcon.setAttribute("alt", "weatherIcon");
    weatherIconName.textContent = `${desc}`;
}

apiFetch();

