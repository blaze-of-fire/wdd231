const hamburgerElement = document.querySelector("#menu");
const navElement = document.querySelector("#animateme");
hamburgerElement.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
});