const url2 = "./data/members.json";
const spotlightCards = document.querySelector("#spotlight_cards");

async function getBussninessData() {
    const response = await fetch(url2);
    const data = await response.json();
    displaySpotlights(data.bussinesses);
}

const displaySpotlights = (spotlights) => {
    const filteredSpotlights = spotlights.filter((spotlight) => spotlight.membership_level > 1);
    const shuffledArray = [...filteredSpotlights].sort(() => Math.random() - 0.5);
    const spotlights_three = shuffledArray.slice(0, 3);
    spotlights_three.forEach(spotlight => {
        let card = document.createElement("section");
        let name = document.createElement("p");
        let imageUrl = document.createElement("img");
        let imageDiv = document.createElement("div")

        let phoneNumber = document.createElement("p");
        let address = document.createElement("p");
        let link = document.createElement("li");
        let ul = document.createElement("ul")

        let websiteUrl = document.createElement("a");
        let membershipLevel = document.createElement("p");
        card.setAttribute("class", "card")
        name.setAttribute("class", "name");
        
        imageUrl.setAttribute("src", `${spotlight.image_or_icon_url}`);
        imageUrl.setAttribute("alt", `${spotlight.bussiness_name}`);
        imageUrl.setAttribute("width", "175");
        imageUrl.setAttribute("height", "auto");

        phoneNumber.textContent = `${spotlight.phone_number}`;
        phoneNumber.setAttribute("class", "phone_number");
        phoneNumber.style.color = "black";

        address.textContent =   `${spotlight.address}`;
        address.setAttribute("class", "address");
        address.style.color = "black";

        websiteUrl.setAttribute("href", spotlight.website_url);
        websiteUrl.textContent = `${spotlight.website_nickname}`;
        websiteUrl.style.color = "black";

        websiteUrl.setAttribute("class", "website_url");
        membershipLevel.textContent = `membership level ${spotlight.membership_level}`;
        membershipLevel.setAttribute("class", "m_level");
        ul.setAttribute("class", "ul");
        
        imageDiv.setAttribute("class", "image_div");
        name.textContent = `${spotlight.bussiness_name}`;
        link.setAttribute("class", "li");

        imageDiv.append(imageUrl);
        link.append(websiteUrl);
        ul.append(link);
        card.setAttribute("class", "card");
        card.append(imageDiv, address, phoneNumber, ul, membershipLevel);
        spotlightCards.append(card);
    });
};

getBussninessData();