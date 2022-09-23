const dropDowns = document.querySelectorAll('.drop-down');

const clearAll = () => {dropDowns.forEach(function (dropDown) {
    dropDown.style.display = "none";
});}
clearAll();

const dogs = document.querySelector('#dogs-h');

dogs.addEventListener('mouseenter', () => {
    clearAll();
    const dropDown = document.querySelector('#dogs');
    dropDown.style.display = "contents";
})

dogs.addEventListener('mouseleave', () => {
    clearAll();
})

const cats = document.querySelector('#cats-h');

cats.addEventListener('mouseenter', () => {
    clearAll();
    const dropDown = document.querySelector('#cats');
    dropDown.style.display = "contents";
})

cats.addEventListener('mouseleave', () => {
    clearAll();
})

const birds = document.querySelector('#birds-h');

birds.addEventListener('mouseenter', () => {
    clearAll();
    const dropDown = document.querySelector('#birds');
    dropDown.style.display = "contents";
})

birds.addEventListener('mouseleave', () => {
    clearAll();
})

const small = document.querySelector('#small-h');

small.addEventListener('mouseenter', () => {
    clearAll();
    const dropDown = document.querySelector('#small');
    dropDown.style.display = "contents";
})

small.addEventListener('mouseleave', () => {
    clearAll();
})

const aquatic = document.querySelector('#aquatic-h');

aquatic.addEventListener('mouseenter', () => {
    clearAll();
    const dropDown = document.querySelector('#aquatic');
    dropDown.style.display = "contents";
})

aquatic.addEventListener('mouseleave', () => {
    clearAll();
})