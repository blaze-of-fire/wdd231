const url1 = "https://carterqarnold.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector('#cards');

async function getBussninessData() {
    const response = await fetch(url1);
    const data = await response.json();
    displayBussinesses(data.bussinesses);
}

const displayBussinesses = (bussinesses) => {
    bussinesses.forEach(bussiness => {

        let card = document.createElement("section");
        let name = document.createElement("p");
        let image_url = document.createElement("img");

        let phone_number = document.createElement("p");
        let address = document.createElement("p");
        let link = document.createElement("li");

        let website_url = document.createElement("a");
        let membership_level = document.createElement("p");

        name.setAttribute("class", "name");

        image_url.setAttribute("src", bussiness.image_or_icon_url);
        image_url.setAttribute("alt", `${bussiness.bussiness_name}`);

        image_url.setAttribute("loading", "lazy");
        image_url.setAttribute("width", "100");
        
        image_url.setAttribute("height", "auto");
        image_url.setAttribute("class", "logo");
    
        phone_number.textContent = `phone number: ${bussiness.phone_number}`;
        phone_number.setAttribute("class", "phone_number");

        address.textContent =   `Place of Birth: ${bussiness.address}`;
        address.setAttribute("class", "address");

        website_url.setAttribute("href", bussiness.website_url);
        website_url.textContent = `${bussiness.website_url}`
        membership_level.textContent = `${bussiness.membership_level}`;
        

        name.textContent = `${bussiness.bussiness_name}`;
        

        link.append(website_url);
        card.setAttribute("class", "card");
        card.append(image_url, address, phone_number, link, membership_level);
        cards.append(card);
    });
};
getBussninessData();