const images = document.querySelectorAll('img');

const imageArray = [];
images.forEach(function getImageArray (image) {
    imageArray.unshift(image);
    return imageArray;
})
console.log(imageArray);


function scroll (element) { 
    element.scrollIntoView({
    behavior: 'smooth'
});
}


const buttons = document.querySelector('button');
let i = 0;
buttons.addEventListener('click', () => {
    scroll(imageArray[i]);
    i++;
    return i;
});





