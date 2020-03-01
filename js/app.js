'use strict'

var imgArray = [
    "bag",
    "banana",
    "bathroom",
    "boots",
    "breakfast",
    "bubblegum",
    "chair",
    "cthulhu",
    "dog-duck",
    "dragon",
    "pen",
    "pet-sweep",
    "scissors",
    "shark",
    "sweep",
    "tauntaun",
    "unicorn",
    "usb",
    "water-can",
    "wine-glass"
];



// get the images
var leftImage = document.querySelector('#lImage');
var centerImage = document.querySelector('#cImage');
var rightImage = document.querySelector('#rImage');
var images = document.querySelector('#images1');

// add src,alt,title to the images to test if ever thing is working
leftImage.src = `img/${imgArray[0].jpg}`;
leftImage.alt = imgArray[0];
leftImage.title = imgArray[0];

centerImage.src = `img/${imgArray[1].jpg}`;
centerImage.alt = imgArray[1];
centerImage.title = imgArray[1];

rightImage.src = `img/${imgArray[2].jpg}`;
rightImage.alt = imgArray[2];
rightImage.title = imgArray[2];


//create constructor function for the goats
function Img(name) {
    this.name = name;
    this.clicks = 0;
    this.views = 0;
    this.imgPath = `img/${this.name}.jpg`;
    Img.all.push(this);
}
Img.all = [];

//instantiate objects for all the goats one shot
for (var i = 0; i < imgArray.length; i++) {
    new Img(imgArray[i]);
}


//render 3 random images
var leftImg, centerImg, rightImg;
// function render() {

//     leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
//     console.log(leftImg);
//     centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
//     console.log(centerImg);
//     rightImg = Img.all[randomNumber(0, Img.all.length - 1)];
//     console.log(rightImg);
//     //////left
//     leftImage.setAttribute('src', leftImg.imgPath);
//     leftImage.setAttribute('alt', leftImg.name);
//     leftImage.setAttribute('title', leftImg.name);
//     //////center
//     centerImage.setAttribute('src', centerImg.imgPath);
//     centerImage.setAttribute('alt', centerImg.name);
//     centerImage.setAttribute('title', centerImg.name);
//     //////right
//     rightImage.setAttribute('src', rightImg.imgPath);
//     rightImage.setAttribute('alt', rightImg.name);
//     rightImage.setAttribute('title', rightImg.name);


// }
// render();
////////////////////////////
function render() {
    leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
    centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
    rightImg = Img.all[randomNumber(0, Img.all.length - 1)];


    if (leftImg !== centerImg && leftImg !== rightImg && centerImg !== rightImg && centerImg  !== leftImg ) {
        ///////left
        leftImage.setAttribute('src', leftImg.imgPath);
        leftImage.setAttribute('alt', leftImg.name);
        leftImage.setAttribute('title', leftImg.name);
        //////center
        centerImage.setAttribute('src', centerImg.imgPath);
        centerImage.setAttribute('alt', centerImg.name);
        centerImage.setAttribute('title', centerImg.name);
        //////right
        rightImage.setAttribute('src', rightImg.imgPath);
        rightImage.setAttribute('alt', rightImg.name);
        rightImage.setAttribute('title', rightImg.name);
    }
}
render();
/////////////////////////////////////////////////////////////

//add the event listener to render new images
images.addEventListener('click', handleClickOnImg);
var totalClicks = 0;
function handleClickOnImg(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'images1') {
            if (event.target.id === 'lImage') {
                leftImg.clicks++;
            } else if (event.target.id === 'cImage') {
                centerImg.clicks++;
            } else if (event.target.id === 'rImage') {
                rightImg.clicks++;
            }
            totalClicks++;

            leftImg.views++;
            centerImg.views++;
            rightImg.views++;
            render();
        }
    } else {
        console.log('more than 25 clicks');
        images.removeEventListener('click', handleClickOnImg);
        render2();
    }
}


function render2() {
    var ulE1 = document.getElementById('finally');
    for (var i = 0; i < Img.all.length; i++) {
        var liE1 = document.createElement('li');
        liE1.textContent = ` ${Img.all[i].name} had ${Img.all[i].clicks} Votes and was shown ${Img.all[i].views} times`;
        ulE1.appendChild(liE1);
    }
}



//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
