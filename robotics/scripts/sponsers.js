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
        let imageDiv = document.createElement("div");
        let description = document.createElement("p");
        let membershipLevel = document.createElement("p");

        card.setAttribute("class", "card");
        name.setAttribute("class", "name");
        name.textContent = `${sponser.name}`;
        name.style.fontFamily = "'Lora', serif";
        name.style.color = "black"
        
        if(sponser.logo != ""){
            name.setAttribute("class", "name_img")
            image = document.createElement("img");
            image.setAttribute("src", `${sponser.logo}`);
            image.setAttribute("alt", `${sponser.name} Logo`);
            image.setAttribute("width", `${sponser.img_width}`);
            image.setAttribute("height", "auto");
            imageDiv.style.width = "200px";
            imageDiv.style.height = "200px";
            imageDiv.style.paddingTop = "1.8rem";
        }
        else{
            image = "";
        }

        description.textContent = `${sponser.description}`;
        description.setAttribute("class", "description");
        description.style.color = "black";

        membershipLevel.textContent = `${sponser.membership_level}`;
        membershipLevel.setAttribute("class", "membership");
        membershipLevel.style.color = "black";

        imageDiv.setAttribute("class", "image_div");
        imageDiv.append(image);
        card.append(name, imageDiv, description, membershipLevel);
        sponserCards.append(card);
    });
};

getSponserData();