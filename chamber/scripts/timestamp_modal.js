document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.querySelector('#timestamp');
    timestamp.value = new Date().toISOString();
})

