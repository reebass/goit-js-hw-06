
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color')
const spanValueColor = document.querySelector('.color')
btnChangeColor.addEventListener('click', onSearch)

function onSearch () {
  document.body.style.backgroundColor = getRandomHexColor()
  spanValueColor.textContent = getRandomHexColor()
}





