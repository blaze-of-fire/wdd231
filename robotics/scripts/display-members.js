import members from './members.mjs';

const team = document.querySelector(".team");
const coaches = document.querySelector(".coaches");

function displayTeam() {
    members.getTeam().forEach(member => {
        let card = document.createElement("section");
        let content = document.createElement("div");
        let name = document.createElement("p");

        let image = document.createElement("img");
        let imageDiv = document.createElement("div");
        let year = document.createElement("p");

        let primaryCon = document.createElement("p");
    
        card.setAttribute("class", "team_card");
        content.setAttribute("class", "content");
        name.setAttribute("class", "name");

        imageDiv.setAttribute("class", "img_container");
        year.setAttribute("class", "year");
        name.textContent = `${member.name}`;
    
        image.setAttribute("src", member.image || "images/image-unavailable.webp");
        image.setAttribute("alt", `${member.name} Image`);
        image.setAttribute("width", "150");
        image.setAttribute("height", "auto");
        image.setAttribute("loading", "lazy");
    
        content.append(name, year);
        imageDiv.append(image);
        year.textContent = `Joined: ${member.year_joined}`;
    
        card.append(name, imageDiv, year);

        primaryCon.textContent = `${member.primary_con}`;
        primaryCon.setAttribute("class", "primary_con");
        card.appendChild(primaryCon);

        team.append(card);
    })
};

function displayCoaches() {
    members.getCoaches().forEach(coach => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let image = document.createElement("img");

        let imageDiv = document.createElement("div");
        let year = document.createElement("p");
        let primaryCon = document.createElement("p");
    
        card.setAttribute("class", "coaches_card");
        name.setAttribute("class", "name");
        imageDiv.setAttribute("class", "img_container");

        year.setAttribute("class", "year");    
        name.textContent = `${coach.name}`;
    
        image.setAttribute("src", coach.image || "images/image-unavailable.webp");
        image.setAttribute("alt", `${coach.name} Image`);
        image.setAttribute("width", "auto");
        image.setAttribute("height", "auto");
        image.setAttribute("loading", "lazy");
    
        imageDiv.append(image);
    
        year.textContent = `Started: ${coach.year_joined}`;
        card.append(name, imageDiv, year);

        primaryCon.textContent = `${coach.primary_con}`;
        primaryCon.setAttribute("class", "primary_con");
        card.appendChild(primaryCon);
        coaches.append(card);
    })
};

displayTeam();
displayCoaches();
