const images = document.querySelectorAll('img');

const imageArray = [];
images.forEach(function getImageArray (image) {
    imageArray.push(image);
    return imageArray;
})
console.log(imageArray);


function scroll (element) { 
    element.scrollIntoView({
    behavior: 'smooth'
});
}


const next = document.querySelector('#next');
const back = document.querySelector('#back');
let i = 0;
next.addEventListener('click', () => {
    scroll(imageArray[i]);
    i++;
    return i;
});

back.addEventListener('click', () => {
    i--;
    scroll(imageArray[i - 1]);
    return i;
})

const flamingoButton = document.querySelector('#one');
const lizardButton = document.querySelector('#two');
const birdButton = document.querySelector('#three');

flamingoButton.addEventListener('click', () => {
    scroll(imageArray[0]);
    i = 0;
    return i;
})

lizardButton.addEventListener('click', () => {
    scroll(imageArray[1]);
    i = 1;
    return i;
})

birdButton.addEventListener('click', () => {
    scroll(imageArray[2]);
    i = 2;
    return i;
})

