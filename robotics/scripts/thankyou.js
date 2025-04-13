const myInfo = new URLSearchParams(window.location.search);

let results = document.querySelector('#results').innerHTML = `
<p class="thank_ptags">Name: <span class="the_results">${myInfo.get('fname')}</span> <span class="the_results">${myInfo.get('lname')}</span></p>
<p class="thank_ptags">Your Email: <span class="the_results">${myInfo.get('email')}</span></p>
<p class="thank_ptags">Grade: <span class="the_results">${myInfo.get('grade')}</span></p>`;
