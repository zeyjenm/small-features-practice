const dropDowns = document.querySelectorAll('.drop-down');

const clearAll = () => {dropDowns.forEach(function (dropDown) {
    dropDown.style.display = "none";
});}
clearAll();

const dogs = document.querySelector('#dogs-h');

dogs.addEventListener('mouseover', () => {
    clearAll();
    const dropDown = document.querySelector('#dogs');
    dropDown.style.display = "contents";
})

const cats = document.querySelector('#cats-h');

cats.addEventListener('mouseover', () => {
    clearAll();
    const dropDown = document.querySelector('#cats');
    dropDown.style.display = "contents";
})

const birds = document.querySelector('#birds-h');

birds.addEventListener('mouseover', () => {
    clearAll();
    const dropDown = document.querySelector('#birds');
    dropDown.style.display = "contents";
})

const small = document.querySelector('#small-h');

small.addEventListener('mouseover', () => {
    clearAll();
    const dropDown = document.querySelector('#small');
    dropDown.style.display = "contents";
})

const aquatic = document.querySelector('#aquatic-h');

aquatic.addEventListener('mouseover', () => {
    clearAll();
    const dropDown = document.querySelector('#aquatic');
    dropDown.style.display = "contents";
})