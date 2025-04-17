const hamburgerElement = document.querySelector("#menu");
const navElement = document.querySelector("#animateme");
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name

    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});