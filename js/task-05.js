'use strict'

const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
input.addEventListener('input', onSearch)

function onSearch(evt) {
    console.dir(evt)
    // span.textContent = evt.currentTurget.value
}

