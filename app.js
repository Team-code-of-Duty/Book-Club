/* Setting the default slide start index: */
let slideIndex = 1;
/* We call the function that is implemented below: */
showSlides(slideIndex);
/* Increase the index by 1 - show the next slide: */
function nextSlide() {
    showSlides(slideIndex += 1);
}
/* Decrease the index by 1 - show the previous slide: */
function previousSlide() {
    showSlides(slideIndex -= 1);  
}
/* Set the current slide: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}
/* Flip function: */
function showSlides(n) {
    let i;
    /* We refer to the elements with the class name "item", that is, to the pictures: */
    let slides = document.getElementsByClassName("item");
    
    /* Checking the number of slides: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    /* Loop through each slide in a for loop: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Making an element block: */
    slides[slideIndex - 1].style.display = "block";    
}

var arrayOfResult = [];


if (localStorage.length > 0 ) {
    arrayOfResult = JSON.parse(localStorage.getItem('feedbacks'))
   // console.log(arrayOfResult)
var pa1 = document.getElementById('qOne');
var pa2 = document.getElementById('qTwo');
var pa3 = document.getElementById('qThree');
var pa4 = document.getElementById('qFour');
var pa5 = document.getElementById('qFive');
var pa6 = document.getElementById('qSix');

var randomIndexes=[]
for(var i=0;i<arrayOfResult.length;i++){
    randomIndexes[i]=i;
}
shuffleArray(randomIndexes)

pa1.textContent = arrayOfResult[randomIndexes[0]].question;
pa2.textContent = arrayOfResult[randomIndexes[1]].question;
pa3.textContent = arrayOfResult[randomIndexes[2]].question;
pa4.textContent = arrayOfResult[randomIndexes[3]].question;
pa5.textContent = arrayOfResult[randomIndexes[4]].question;
pa6.textContent = arrayOfResult[randomIndexes[5]].question;


}


/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}