const filepath = "./data/sponsors.json";
const spotlightCards = document.querySelector("#spotlight_cards");

async function getSpotlightData() {
    try {
        const response = await fetch(filepath);
        const data = await response.json();
        displaySpotlights(data.sponsors);
    }
    catch (error) {
        console.error("An error occurred:", error.message);
        console.log("Fix the error.");
    }
}

const displaySpotlights = (sponsors) => {
    const filteredSponsors = sponsors.filter((sponsor) => sponsor.membership_level > 1);
    const shuffledArray = [...filteredSponsors].sort(() => Math.random() - 0.5);
    const threeSponsors = shuffledArray.slice(0, 3);
    threeSponsors.forEach(oneSponsor => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let image;
        let div = document.createElement("div");
        let description = document.createElement("p");
        let membershipLevel = document.createElement("p");

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");
        name.textContent = `${oneSponsor.name}`;
        name.style.fontFamily = "'Lora', serif";
        name.style.color = "black";

        description.textContent = `${oneSponsor.description}`;
        description.setAttribute("class", "description");
        description.style.color = "black";

        membershipLevel.textContent = `${oneSponsor.membership_level}`;
        membershipLevel.setAttribute("class", "membership");
        membershipLevel.style.color = "black";
        div.setAttribute("class", "the_image_div");


        image = document.createElement("img");
        image.setAttribute("src", `${oneSponsor.logo}`);
        image.setAttribute("alt", `${oneSponsor.name} Logo`);

        image.setAttribute("width", `${oneSponsor.img_width}`);
        image.setAttribute("height", "auto");
        image.setAttribute("loading", "lazy");

        div.append(image);
        card.append(name, div, description, membershipLevel);
        spotlightCards.append(card);
    });
};

getSpotlightData();