const mail = document.getElementById('mail')
if (sessionStorage.getItem('email')) { mail.textContent = sessionStorage.getItem('email')}