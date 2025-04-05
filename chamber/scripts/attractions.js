const attractions = "./data/attractions.json";
const sections_parent = document.querySelector('#attractions_div');

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
        let imageDiv = document.createElement("div")
        let address = document.createElement("p");
        let description = document.createElement("p");

        card.setAttribute("class", "attractions_card");
        title.setAttribute("class", "attractions_title");
        title.textContent = `hello a test ${attraction.title}`;
        
        image.setAttribute("src", `${attraction.image}`);
        image.setAttribute("alt", `${attraction.name}`);
        image.setAttribute("width", "175");
        image.setAttribute("height", "auto");

        description.textContent = `${attraction.description}`;
        description.setAttribute("class", "attraction_desc");
        description.style.color = "black";

        address.textContent = `${attraction.address}`;
        address.setAttribute("class", "attraction_address");
        address.style.color = "black";
        
        imageDiv.setAttribute("class", "image_div");

        imageDiv.append(image);
        card.append(title, imageDiv, address, description);
        sections_parent.append(card);
    });
};


const locations = './data/discover.json';
const cards = document.querySelector('#locations');


async function getLocations() {
    const response = await fetch(locations);
    const data = await response.json();
    displayLocations(data.cards);
}

getLocations();

function displayLocations(locations) {
    locations.forEach(location => {
        let card = document.createElement('section');
        let image = document.createElement('img');
        let title = document.createElement('h2');
        let line1 = document.createElement('p');
        let line2 = document.createElement('p');
        let description = document.createElement('p');

        card.setAttribute('class', 'locationCard');
        image.setAttribute('src', location.image);
        image.setAttribute('alt', `${location.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', '200');

        title.textContent = `${location.name}`;    
        line1.textContent = location.address[0].line1;
        line2.textContent = location.address[0].line2;
        description.textContent = location.description;

        card.append(image, name, line1, line2, description);
        cards.appendChild(card);
    })
}