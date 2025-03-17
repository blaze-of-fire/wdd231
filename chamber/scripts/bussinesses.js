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
        let image_div = document.createElement("div")

        let phone_number = document.createElement("p");
        let address = document.createElement("p");
        let link = document.createElement("li");
        let ul = document.createElement("ul")

        let website_url = document.createElement("a");
        let membership_level = document.createElement("p");
        name.setAttribute("class", "name");
        
        image_url.setAttribute("src", `${bussiness.image_or_icon_url}`);
        image_url.setAttribute("alt", `${bussiness.bussiness_name}`);
        image_url.setAttribute("width", "175");
        image_url.setAttribute("height", "auto");

        if (bussiness.image_or_icon_url == "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Blanco_landscape.svg/120px-Blanco_landscape.svg.png?20091119140937"){
            image_url.setAttribute("alt", `${bussiness.bussiness_name} Image or logo not available`)
        }

        phone_number.textContent = `${bussiness.phone_number}`;
        phone_number.setAttribute("class", "phone_number");
        phone_number.style.color = "black";

        address.textContent =   `${bussiness.address}`;
        address.setAttribute("class", "address");
        address.style.color = "black";
        address.setAttribute("class", "address");

        website_url.setAttribute("href", bussiness.website_url);
        website_url.textContent = `Website: ${bussiness.website_nickname}`;
        website_url.style.color = "black";

        website_url.setAttribute("class", "website_url")
        membership_level.textContent = `${bussiness.membership_level}`;
        ul.setAttribute("class", "ul");
        
        image_div.setAttribute("class", "image_div");
        name.textContent = `${bussiness.bussiness_name}`;
        link.style.marginLeft = "-8rem";
        link.style.marginTop = "-1rem";
        link.style.width = "230px";

        image_div.append(image_url);
        link.append(website_url);
        ul.append(link);
        card.setAttribute("class", "card");
        card.append(image_div, address, phone_number, ul, membership_level);
        cards.append(card);
    });
};
getBussninessData();