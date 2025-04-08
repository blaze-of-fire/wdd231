const filepath = "./data/sponsers.json";
const sponserCards = document.querySelector("#sponsers");

async function getSponserData() {
    const response = await fetch(filepath);
    const data = await response.json();
    displaySponsers(data.sponsers);
}

const displaySponsers = (sponsers) => {
    sponsers.forEach(sponser => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let image;
        let div = document.createElement("div");
        let description = document.createElement("p");
        let membershipLevel = document.createElement("p");

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");
        name.textContent = `${sponser.name}`;
        name.style.fontFamily = "'Lora', serif";
        name.style.color = "black";
        
        description.textContent = `${sponser.description}`;
        description.setAttribute("class", "description");
        description.style.color = "black";

        membershipLevel.textContent = `${sponser.membership_level}`;
        membershipLevel.setAttribute("class", "membership");
        membershipLevel.style.color = "black";
        div.setAttribute("class", "the_image_div");


        image = document.createElement("img");
        image.setAttribute("src", `${sponser.logo}`);
        image.setAttribute("alt", `${sponser.name} Logo`);

        image.setAttribute("width", `${sponser.img_width}`);
        image.setAttribute("height", "auto");
        image.setAttribute("loading", "lazy");

        div.append(image);
        card.append(name, div, description, membershipLevel);
        sponserCards.append(card);
    });
};

getSponserData();