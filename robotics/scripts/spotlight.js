const filepath = "./data/sponsers.json";
const spotlightCards = document.querySelector("#spotlight_cards");

async function getSpotlightData() {
    const response = await fetch(filepath);
    const data = await response.json();
    displaySpotlights(data.sponsers);
}

const displaySpotlights = (sponsers) => {
    const filteredSponsers = sponsers.filter((sponser) => sponser.membership_level > 1);
    const shuffledArray = [...filteredSponsers].sort(() => Math.random() - 0.5);
    const threeSponsers = shuffledArray.slice(0, 3);
    console.log(threeSponsers);
    threeSponsers.forEach(oneSponser => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let image;
        let div = document.createElement("div");
        let description = document.createElement("p");
        let membershipLevel = document.createElement("p");

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");
        name.textContent = `${oneSponser.name}`;
        name.style.fontFamily = "'Lora', serif";
        name.style.color = "black";
        
        description.textContent = `${oneSponser.description}`;
        description.setAttribute("class", "description");
        description.style.color = "black";

        membershipLevel.textContent = `${oneSponser.membership_level}`;
        membershipLevel.setAttribute("class", "membership");
        membershipLevel.style.color = "black";
        div.setAttribute("class", "the_image_div");


        image = document.createElement("img");
        image.setAttribute("src", `${oneSponser.logo}`);
        image.setAttribute("alt", `${oneSponser.name} Logo`);

        image.setAttribute("width", `${oneSponser.img_width}`);
        image.setAttribute("height", "auto");
        image.setAttribute("loading", "lazy");

        div.append(image);
        card.append(name, div, description, membershipLevel);
        spotlightCards.append(card);
    });
};

getSpotlightData();