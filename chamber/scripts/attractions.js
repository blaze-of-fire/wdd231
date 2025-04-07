const attractions = "./data/attractions.json";
const sections_parent = document.getElementById('the_locations');

async function getAttractions() {
    const response = await fetch(attractions);
    const data = await response.json();
    displayAttractions(data.attractions);
}

const displayAttractions = (locations) => {
    locations.forEach(attraction => {
        
        let card = document.createElement("section");
        let image = document.createElement("img");
        let title = document.createElement("h2");
        let imageFigure = document.createElement("figure")
        let address = document.createElement("address");
        let description = document.createElement("p");
        let button = document.createElement("button");

        card.setAttribute("class", "attractions_card");
        title.setAttribute("class", "attractions_title");
        title.textContent = `${attraction.title}`;
        
        image.setAttribute("src", `${attraction.image}`);
        image.setAttribute("alt", `${attraction.name}`);
        image.setAttribute("width", "300");
        image.setAttribute("height", "auto");

        description.textContent = `${attraction.description}`;
        description.setAttribute("class", "attraction_desc");
        description.style.color = "black";

        address.textContent = `${attraction.address}`;
        address.setAttribute("class", "attraction_address");
        address.style.color = "black";
        
        imageFigure.setAttribute("class", "image_figure");
        button.textContent = `Learn More!`;
        button.setAttribute("class", "learn_button");

        imageFigure.append(image);
        card.append(title, imageFigure, address, description, button);
        sections_parent.append(card);
    });
};

getAttractions();