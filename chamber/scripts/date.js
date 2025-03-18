let today = new Date();
document.querySelector("span").innerHTML = `&copy;${today.getFullYear()}`;
document.querySelector("#lastmodified").textContent = `Last Modified: ${document.lastModified}`;