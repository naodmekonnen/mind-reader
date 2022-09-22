let headerText = document.getElementById('textHeader');
let nextButton = document.getElementById('next');
let example = document.getElementById('exampleText');
let explainer = documment.getElementById('explainText');
let resetBtn = document.getElementById('reset');


let pageView = [
    {
        "headerText": "I can read your mind",
        "nextButton": "start"
    },

    {
        "headerText": "Pick a number from 0 - 99",
        "nextButton": "NEXT",
        "example": "When you have thar number click next",
        "resetBtn": "Try Again"
    },

    {
        "headerText": "Add both digits together to get a new number",
        "nextButton": "NEXT",
        "example": "Ex: 14 is 1 + 4 = 5",
        "explainer": "click next to proceed",
        "resetBtn": "Try again"

    },

    {
        "headerText": "Subtract your new number from the original number",
        "nextButton": "NEXT",
        "example": "EX: 14 - 5 = 9",
        "explainer": "click next to proceed",
        "resetBtn": "Try again"

    },

    {
        "headerText": "symbols",
        "nextButton": "REVEAL",
        "example": "Find your new number",
        "explainer": "Note the symbol beside the number",
        "resetBtn": "Try again"

    },

    {
        "headerText": "1symbol",
        "example": "filler16",
        "explainer": "1symbol",
        "resetBtn" : "Try again"
    }
];


let pageCount = 0;

textHeader.textContent=pageView[pageCount].textHeader;
next.textContent=pageView[pageCount].next;
exampleText.textContent=pageView[pageCount].exampleText;
explainText.textContent=pageView[pageCount].explainText;
resetBtn.textContent=pageView[pageCount].resetBtn;

nextButton.addEventListener('click', newPage);
function newPage(e);

 if(e.target.id="next"){
    pageCount++;
    console.log(pageCount);
 };

resetBtn.addEventListener('click', resetPage);
 function resetPage(e);
 if(e.target.id = "reset"){
    pageCount = 0;
 }











