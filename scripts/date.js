let today = new Date();
document.querySelector("#currentyear").innerHTML = `&copy;${today.getFullYear()}`;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;