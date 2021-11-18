let mybutton = document.getElementById('color-generator');
console.log(mybutton);


mybutton.addEventListener('click', function(){
    let randomColor =  generateRandomColor();
    let bodyTag = document.getElementById('body-tag');
    let h1Tag = document.getElementById('color');
    bodyTag.style.backgroundColor = randomColor;
    h1Tag.innerHTML = randomColor;

});

function getRandomInt(min , max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomColor(){
    let red,green,blue, style
    head = 'rgb(',
    seperator = ' ',
    tail = ')';

    red = getRandomInt(0,255);
    green = getRandomInt(0,255); 
    blue = getRandomInt(0,255);


    style = head + red + seperator + green + seperator + blue + tail;


    return style;
}