const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");

        let birthDate = document.createElement("p");
        let birthPlace = document.createElement("p");
        fullName.setAttribute("class", "name")
    
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthDate.setAttribute("class", "birthday")
        birthPlace.textContent =   `Place of Birth: ${prophet.birthplace}`;
        birthPlace.setAttribute("class", "birthplace")

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute("src", `${prophet.imageurl}`);
        portrait.setAttribute("alt", `Portrait of ${fullName.textContent} - ${prophet.order} Latter-day President`);
        
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "200");
        
        portrait.setAttribute("height", "auto");
        portrait.setAttribute("class", "portrait")

        card.setAttribute("class", "card")
        card.append(fullName, birthDate, birthPlace, portrait);
        cards.append(card);
    });
}
getProphetData();