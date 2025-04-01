const myInfo = new URLSearchParams(window.location.search);

let results = document.querySelector('#results').innerHTML = `
<h1 id="h1">Thank You!</h1>
<p class="thank_ptags"><span class="the_results">${myInfo.get('fname')}</span> <span class="the_results">${myInfo.get('lname')}</span> as the <span class="the_results">${myInfo.get('organization-title')}</span> from <span class="the_results">${myInfo.get('organization')}</span> is applying for a <span class="the_results">${myInfo.get('choose_membership')}</span> membership</p>
<p class="thank_ptags">Description: <span class="the_results">${myInfo.get('description')}</span></p>
<p class="thank_ptags">Your Phone: <span class="the_results">${myInfo.get('phone')}</span></p>
<p class="thank_ptags">Your Email: <span class="the_results">${myInfo.get('email')}</span></p>`;