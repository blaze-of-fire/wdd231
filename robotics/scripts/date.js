let today = new Date();
document.querySelector("#copyright_year").textContent = `©${today.getFullYear()}`;
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;