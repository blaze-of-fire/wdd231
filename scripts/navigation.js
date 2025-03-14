const hambutton = document.querySelector("#menu");
const navigation = document.querySelector("#animateme");
hambutton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
});