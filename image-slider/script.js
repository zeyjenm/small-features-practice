const images = document.querySelectorAll('img');

const imageArray = [];
images.forEach(function getImageArray (image) {
    imageArray.unshift(image);
    return imageArray;
})
console.log(imageArray);

