let token = 0;
let myButtonElement1 = document.getElementById('counter-1');
let displayElement1 = document.getElementById('display-1');
myButtonElement1.addEventListener('click' , function(){
    
    displayElement1.innerHTML = token;
    token = token + 1;
});