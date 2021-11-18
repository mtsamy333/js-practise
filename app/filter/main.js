/* write click event for each a-tag - done
    et class name of this elementg - done
    hide all cards - done
    show cards with specific class name*/
let filterWrapper = document.getElementById('filter-1');
let filterLinks = filterWrapper.querySelectorAll('.filter-link');

function hideAllCards(){
    let cards = filterWrapper.querySelectorAll('.card');
    cards.forEach(function(card){
        card.style.display = 'none';
    });
}

function showcards(cardType){
    console.log(cardType);
    if(cardType=='all'){
        cardType = '.card';
    }
    else {
        cardType = '.' + cardType;
    }
    console.log(cardType);
    let cardAll = filterWrapper.querySelectorAll(cardType);
    console.log(cardAll);
    cardAll.forEach(function(card){
        card.style.display ='block';
    });
}

function printMe(filterLink){
    filterLink.addEventListener('click', function(){
        //get class name of this element
        let currentElement = this;
        let filterType = currentElement.classList[1];
        //hideAllcards
        hideAllCards();
        showcards(filterType);
     });
}
// write click event for each a-tag
filterLinks.forEach(printMe);