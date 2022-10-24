const controls = document.querySelector('#controls')
const createBtn = document.querySelector ('[data-create]')
const destroyBtn = document.querySelector ('[data-destroy]')
const boxes = document.querySelector('#boxes')
createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function createBoxes(amount) {
    amount = controls.firstElementChild.value
    let sizeBox = 30
    let arrBox = []
    for (let i = 0; i < amount; i += 1) {
      const box = `<div style="width: ${sizeBox + (i * 10)}px; height: ${sizeBox + (i * 10)}px; background-color: ${getRandomHexColor()};"></div>`
      arrBox.push(box)
    }
   boxes.insertAdjacentHTML('beforeend', arrBox.join(""))

}

function destroyBoxes() {
  boxes.querySelectorAll('div').forEach(el => {el.remove()})
  controls.firstElementChild.value = ""
}