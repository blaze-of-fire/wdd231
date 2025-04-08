const filepath = "./data/sponsors.json";
const sponsorCards = document.querySelector("#sponsors");

async function getSponsorData() {
    try {
        const response = await fetch(filepath);
        const data = await response.json();
        displaySponsors(data.sponsors);
    }
    catch (error) {
        console.error("An error occurred:", error.message);
        console.log("Fix the error.");
    }
}

const displaySponsors = (sponsors) => {
    sponsors.forEach(sponsor => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let image;
        let div = document.createElement("div");
        let description = document.createElement("p");
        let membershipLevel = document.createElement("p");

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");
        name.textContent = `${sponsor.name}`;
        name.style.fontFamily = "'Lora', serif";
        name.style.color = "black";
        
        description.textContent = `${sponsor.description}`;
        description.setAttribute("class", "description");
        description.style.color = "black";

        membershipLevel.textContent = `${sponsor.membership_level}`;
        membershipLevel.setAttribute("class", "membership");
        membershipLevel.style.color = "black";
        div.setAttribute("class", "the_image_div");


        image = document.createElement("img");
        image.setAttribute("src", `${sponsor.logo}`);
        image.setAttribute("alt", `${sponsor.name} Logo`);

        image.setAttribute("width", `${sponsor.img_width}`);
        image.setAttribute("height", "auto");
        image.setAttribute("loading", "lazy");

        div.append(image);
        card.append(name, div, description, membershipLevel);
        sponsorCards.append(card);
    });
};

getSponsorData();