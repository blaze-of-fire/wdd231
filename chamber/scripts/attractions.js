const attractions = "./data/attractions.json";
const sections_parent = document.querySelector('#attractions_div');

async function getAttractions() {
    const response = await fetch(attractions);
    const data = await response.json();
    displayAttractions(data.attractions);
}

const displayAttractions = (attractions) => {
    attractions.forEach(attraction => {
        
        let section = document.createElement("section");
        let title = document.createElement("h2");
        let image = document.createElement("img");
        let imageDiv = document.createElement("div")

        let address = document.createElement("p");
        let description = document.createElement("p");

        section.setAttribute("class", "attractions_card");
        title.setAttribute("class", "attractions_title");
        
        image.setAttribute("src", `${attraction.image}`);
        image.setAttribute("alt", `${attraction.name}`);
        image.setAttribute("width", "175");
        image.setAttribute("height", "auto");

        description.textContent = `${bussiness.phone_number}`;
        description.setAttribute("class", "phone_number");
        description.style.color = "black";

        address.textContent =   `${bussiness.address}`;
        address.setAttribute("class", "address");
        address.style.color = "black";

        membershipLevel.textContent = `membership level ${bussiness.membership_level}`;
        membershipLevel.setAttribute("class", "m_level");
        
        imageDiv.setAttribute("class", "image_div");
        title.textContent = `${bussiness.bussiness_name}`;
        link.setAttribute("class", "li")

        imageDiv.append(image);
        section.append(imageDiv, address, phoneNumber, ul, membershipLevel);
        sections_parent.append(section);
    });
};