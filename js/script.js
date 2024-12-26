const form = document.getElementById('form')
const errorLabel = document.getElementById('error-label')
const errorInput = document.getElementById('error-input')

function handleForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    const fields = e.target.querySelectorAll('input')
    
    const email = data.email.toLowerCase();

        console.log(email)
    
    if (email.includes('@') && email.endsWith('.com'))
        { 
            console.log('valid email') 
            for(const field of fields) { field.value = '' } 
            sessionStorage.setItem('email', email)
            window.location.href = '../success.html'
        }
    else 
        {
            errorLabel.classList.add('show')
            errorInput.classList.add('error')
        }
}
form.addEventListener('submit', handleForm)
