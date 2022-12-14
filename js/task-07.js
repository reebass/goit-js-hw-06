// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control 
// (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', onSearch);

function onSearch (evt) {    
    span.style.fontSize = `${evt.currentTarget.value}px`
}