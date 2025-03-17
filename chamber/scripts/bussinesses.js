const url1 = "https://carterqarnold.github.io/wdd231/chamber/data/members.json";
const gridOrList = document.querySelector('#grid_or_list');
const gridButton = document.getElementById("grid_button");
const listButton = document.getElementById("list_button");

async function getBussninessData(grid, list) {
    const response = await fetch(url1);
    const data = await response.json();
    if (grid){
        displayBussinessesGrid(data.bussinesses);
    };
    if (list){
        displayBussinessesList(data.bussinesses);
    };
}

const displayBussinessesGrid = (bussinesses) => {
    let cards = document.createElement("div");
    cards.setAttribute("id", "cards");
    bussinesses.forEach(bussiness => {
        
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
        
        imageUrl.setAttribute("src", `${bussiness.image_or_icon_url}`);
        imageUrl.setAttribute("alt", `${bussiness.bussiness_name}`);
        imageUrl.setAttribute("width", "175");
        imageUrl.setAttribute("height", "auto");

        phoneNumber.textContent = `${bussiness.phone_number}`;
        phoneNumber.setAttribute("class", "phone_number");
        phoneNumber.style.color = "black";

        address.textContent =   `${bussiness.address}`;
        address.setAttribute("class", "address");
        address.style.color = "black";

        websiteUrl.setAttribute("href", bussiness.website_url);
        websiteUrl.textContent = `${bussiness.website_nickname}`;
        websiteUrl.style.color = "black";

        websiteUrl.setAttribute("class", "website_url")
        membershipLevel.textContent = `membership level ${bussiness.membership_level}`;
        membershipLevel.setAttribute("class", "m_level");
        ul.setAttribute("class", "ul");
        
        imageDiv.setAttribute("class", "image_div");
        name.textContent = `${bussiness.bussiness_name}`;
        link.setAttribute("class", "li")

        imageDiv.append(imageUrl);
        link.append(websiteUrl);
        ul.append(link);
        card.setAttribute("class", "card");
        card.append(imageDiv, address, phoneNumber, ul, membershipLevel);
        cards.append(card);
    });
    gridOrList.append(cards);
};

const displayBussinessesList = (bussinesses) => {
    let listItems = document.createElement("div");
    listItems.setAttribute("id", "list_items");
    bussinesses.forEach(bussiness => {

        let listItem = document.createElement("section");
        let listName = document.createElement("p");

        let listPhoneNumber = document.createElement("p");
        let listAddress = document.createElement("p");
        let listLink = document.createElement("li");

        let listWebsiteUrl = document.createElement("a");
        let listMembershipLevel = document.createElement("p");
        listName.setAttribute("class", "list_name");

        listPhoneNumber.textContent = `${bussiness.phone_number}`;
        listPhoneNumber.setAttribute("class", "list_phone_number");
        listPhoneNumber.style.color = "black";

        listAddress.textContent =   `${bussiness.address}`;
        listAddress.setAttribute("class", "list_address");
        listAddress.style.color = "black";

        listWebsiteUrl.setAttribute("href", bussiness.website_url);
        listWebsiteUrl.textContent = `${bussiness.website_nickname}`;
        listWebsiteUrl.style.color = "black";

        listWebsiteUrl.setAttribute("class", "list_website_url")
        listMembershipLevel.textContent = `membership level: ${bussiness.membership_level}`;
        listMembershipLevel.setAttribute("class", "list_m_level")
        
        listName.textContent = `${bussiness.bussiness_name}`;
        listLink.setAttribute("class", "list_li")

        listLink.append(listWebsiteUrl);
        listItem.setAttribute("class", "list_item");
        listItem.append(listName, listAddress, listPhoneNumber, listLink, listMembershipLevel);
        listItems.append(listItem);
    });
    gridOrList.append(listItems);
};

function clear(){
    gridOrList.innerHTML = "";
}

grid_button.addEventListener('click', () => {
    clear();
    getBussninessData(true, false);
});

list_button.addEventListener('click', () => {
    clear();
    getBussninessData(false, true);
});

getBussninessData(true, false);