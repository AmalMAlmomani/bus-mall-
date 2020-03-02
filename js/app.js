'use strict'

var imgArray = ["bag", "banana", "bathroom", "boots", "breakfast", "bubblegum", "chair", "cthulhu", "dog-duck", "dragon", "pen", "pet-sweep", "scissors", "shark", "sweep", "tauntaun", "unicorn", "usb", "water-can", "wine-glass"];
var names = [];
var vote = [];


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
    this.votes = 0;
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
////////////////////////////if 
// function firstRender() {
//     leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
//     centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
//     rightImg = Img.all[randomNumber(0, Img.all.length - 1)];


//     if (leftImg !== centerImg && leftImg !== rightImg && centerImg !== rightImg && centerImg  !== leftImg ) {
//         ///////left
//         leftImage.setAttribute('src', leftImg.imgPath);
//         leftImage.setAttribute('alt', leftImg.name);
//         leftImage.setAttribute('title', leftImg.name);
//         //////center
//         centerImage.setAttribute('src', centerImg.imgPath);
//         centerImage.setAttribute('alt', centerImg.name);
//         centerImage.setAttribute('title', centerImg.name);
//         //////right
//         rightImage.setAttribute('src', rightImg.imgPath);
//         rightImage.setAttribute('alt', rightImg.name);
//         rightImage.setAttribute('title', rightImg.name);
//     }
// }
// firstRender();
/////////////////////////////while 
var leftImg, centerImg, rightImg;
// var leftImg1, centerImg1, rightImg1;

function firstRender() {


    leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
    centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
    rightImg = Img.all[randomNumber(0, Img.all.length - 1)];


    while (leftImg === centerImg || leftImg === rightImg || centerImg === rightImg ) {
        leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
        centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
        rightImg = Img.all[randomNumber(0, Img.all.length - 1)];
    
//     if (leftImg === centerImg || leftImg === rightImg || centerImg === rightImg ){
//         leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
//         centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
//         rightImg = Img.all[randomNumber(0, Img.all.length - 1)];
        
//     }else if(leftImg === centerImg || leftImg === rightImg || centerImg === rightImg ){
//         leftImg = Img.all[randomNumber(0, Img.all.length - 1)];
//         centerImg = Img.all[randomNumber(0, Img.all.length - 1)];
//         rightImg = Img.all[randomNumber(0, Img.all.length - 1)];
        
// }
 

}
  

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
firstRender();
/////////////////////////////////////////////////////////////

//add the event listener to render new images
images.addEventListener('click', handleClickOnImg);
var totalClicks = 0;
function handleClickOnImg(event) {
    if (totalClicks < 25) {
        if (event.target.id !== 'images1') {
            if (event.target.id === 'lImage') {
                leftImg.votes++;
            } else if (event.target.id === 'cImage') {
                centerImg.votes++;
            } else if (event.target.id === 'rImage') {
                rightImg.votes++;
            }
            totalClicks++;

            leftImg.views++;
            centerImg.views++;
            rightImg.views++;
            firstRender();
        }
    } else {
        console.log('more than 25 clicks');
        images.removeEventListener('click', handleClickOnImg);
        // secondRender();
        thirdRender();

    }
}


function secondRender() {
    var ulE1 = document.getElementById('finally');
    for (var i = 0; i < Img.all.length; i++) {
        var liE1 = document.createElement('li');
        liE1.textContent = ` ${Img.all[i].name} had ${Img.all[i].votes} Votes and was shown ${Img.all[i].views} times`;
        ulE1.appendChild(liE1);
    }
}

function Vote_click() {
    for (var i = 0; i < Img.all.length; i++) {
        names.push(Img.all[i].name);
        vote.push(Img.all[i].votes);
    }

}
//////////////////////////////////
var ctx = document.getElementById('myChart').getContext('2d');
function thirdRender() {
    Vote_click();
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imgArray,/// images
            datasets: [{
                label: `# of Votes ${totalClicks}  `,
                data: vote,///click,votes
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'

                ],///color fill in bar 
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

}









//helper functions
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
