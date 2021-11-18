//create click event listener for all buttons
// let button1 = document.getElementById('button-1');
// console.log(button1);
let buttons = document.querySelectorAll('.question-btn');
// console.log(buttons);

//
// buttons.forEach(function(button){
// console.log(button);
// });

// for (let i = 0; i < 3; i++) {
    // console.log(i, buttons[i]);
// }

function hideAllQuestionText(){
    let questiontexts = document.querySelectorAll('.question-text');
    console.log(questiontexts);
    questiontexts.forEach(function(questionText){
        questionText.style.display = 'none';
    });
}


function printMe(button) {
    console.log(button);
    // console.log(item);
    button.addEventListener('click', function(){
        let currentElement = this;
        let questionWrapperElement = currentElement.parentNode.parentNode;
        let questionTextElement = questionWrapperElement.querySelector('.question-text');

        // hide all question text
        hideAllQuestionText();
// console.log(questionTextElement);
        questionTextElement.style.display = 'block';
    });
}

//printMe('hello');
//console.log(printMe);
// hideAllQuestionText();

buttons.forEach(printMe);
