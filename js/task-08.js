
const form = document.querySelector('.login-form')
form.addEventListener('submit', handleSubmit)

function handleSubmit (evt) {
    evt.preventDefault()

    const {
        email,
        password,
    } = evt.currentTarget.elements

    if (email.value.length && password.value.length) {
        const userData = {
            email: email.value,
            password: password.value,
        }
        const userName = email.value.indexOf('@')
        console.log(`User ${email.value.slice(email.value[0], userName)}:`, userData)
        evt.currentTarget.reset();
    }else {
        return alert('Все поля должны быть заполнены')
    }
    
}