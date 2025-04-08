hambutton = document.querySelector('.menu');
navigation = document.querySelector('.nav');
hambutton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hambutton.classList.toggle('open');
});