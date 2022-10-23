const input = document.querySelector('#validation-input');

input.addEventListener('blur', onSearch)

function onSearch (evt) {
        if (Number(evt.currentTarget.dataset.length) !== Number(evt.currentTarget.value.length)){
            evt.currentTarget.classList.add('invalid')
        }else {
            evt.currentTarget.classList.remove('invalid')
            evt.currentTarget.classList.add('valid')
        }

}