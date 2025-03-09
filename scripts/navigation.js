const hambutton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
document.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hambutton.classList.toggle("open");
})