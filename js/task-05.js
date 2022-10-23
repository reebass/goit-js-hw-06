const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
input.addEventListener('input', onSearch)

function onSearch(evt) {
    span.textContent = 'Anonymous'
    if (evt.currentTarget.value) {
        span.textContent = evt.currentTarget.value
    }
}


