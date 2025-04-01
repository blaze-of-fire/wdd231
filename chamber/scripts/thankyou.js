const myInfo = new URLSearchParams(window.location.search);

let results = document.querySelector('#results').innerHTML = `
<h1 id="h1">Thank You!</h1>
<p class="thank_ptags">Name: <span class="the_results">${myInfo.get('fname')}</span> <span class="the_results">${myInfo.get('lname')}</span></p>
<p class="thank_ptags">Organization Title: <span class="the_results">${myInfo.get('organization-title')}</span></p>
<p class="thank_ptags">Your Email: <span class="the_results">${myInfo.get('email')}</span></p>
<p class="thank_ptags">Your Phone: <span class="the_results">${myInfo.get('phone')}</span></p>
<p class="thank_ptags">Bussiness/Organization: <span class="the_results"> ${myInfo.get('organization')}</span></p>
<p class="thank_ptags">Membership: <span class="the_results">${myInfo.get('choose_membership')}</span></p>
<p class="thank_ptags">Description: <span class="the_results">${myInfo.get('description')}</span></p>`;
