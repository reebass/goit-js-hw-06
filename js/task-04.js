let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const span = document.querySelector('#value');


const increment = () => {
    counterValue += 1
    span.textContent = counterValue
}

const decrement = () => {
    counterValue -= 1
    span.textContent = counterValue
}

incrementBtn.addEventListener('click', increment)
decrementBtn.addEventListener('click', decrement)







