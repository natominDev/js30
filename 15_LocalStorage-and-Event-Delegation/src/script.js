const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e){
    e.preventDefault();
    console.log('Hello');
}

addItems.addEventListener('submit', addItem);