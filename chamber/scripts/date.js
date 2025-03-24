let today = new Date();
document.querySelector("#copyright_year").innerHTML = `&copy;${today.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `Last Modified: ${document.lastModified}`;