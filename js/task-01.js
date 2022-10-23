// TASK 1

const categoriesTotal =  document.querySelector('#categories');
console.log('Number of categories:', categoriesTotal.children.length);

const titleEl = document.querySelectorAll('.item')
for (const el of titleEl) {
    console.log('Category:', el.firstElementChild.textContent)
    console.log('Elements:', el.lastElementChild.children.length)
}

// const navElement = document.querySelector('#categories');
// const listItem = navElement.querySelectorAll('.item');
// console.log(`Number of categories: ${navElement.children.length}`);
// for (let i = 0; i < listItem.length; i++) {
//     console.log(`Category: ${listItem[i].firstElementChild.textContent}`);
//     console.log(`Elements: ${listItem[i].lastElementChild.children.length}`);
// }