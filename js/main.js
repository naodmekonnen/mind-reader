let headerText = document.getElementById('textHeader');
let nextButton = document.getElementById('next');
let example = document.getElementById('exampleText');
// let explainer = document.getElementById('explainText');
let resetBtn = document.getElementById('reset');

let icons = ['@','#','%','*','!','&','$','+','|' ];



    newIcon = [];
    for (let i = 0; i <= 99; i++) {
        let x = Math.floor(Math.random() * icons.length);

        let y = 0
            y++
    if (i % 9 === 0) {
        newIcon.push(i + "-" + icons[y]);
    }
     else if(i % 9 !==0){
        newIcon.push(i + "-" + icons[x]);
            
     }
    };
    
let pageView = [
    {
        "headerText": "I can read your mind",
        "example": '',

    },

    {
        "headerText": "Pick a number from 0 - 99",
        "example": "When you have that number <br> click next",
    },

    {
        "headerText": "Add both digits together to get a new number",
        "example": "Ex: 14 is 1 + 4 = 5 <br> Click next to proceed",

    },

    {
        "headerText": "Subtract your new number from the original number",
        "example": "EX: 14 - 5 = 9",

    },

    {
        "headerText": " ",
        "example": "Find your new number. <br> Note the symbol beside the number"
    },

    {
        "headerText": "&",
        "example": "Your symbol is:",
    }
];

let pageCount;

nextButton.addEventListener('click', ()=>{

    if (pageCount === 0){
        headerText.innerHTML=pageView[1].headerText;
        example.innerHTML=pageView[1].example;
    }

    else if(pageCount === 1){
        headerText.innerHTML=pageView[2].headerText;
        example.innerHTML=pageView[2].example;
    }

        
    else if(pageCount === 2){
        headerText.innerHTML=pageView[3].headerText;
        example.innerHTML=pageView[3].example;
    }

    else if(pageCount === 3){
        headerText.innerHTML=pageView[4].newIcon;
        example.innerHTML=pageView[4].example;
    }
        
    else if(pageCount === 4){
        headerText.innerText=pageView[5].headerText;
        example.innerText=pageView[5].example;
    }
    

    pageCount++;
    console.log(pageCount);
    
});

resetBtn.addEventListener("click", () => {
    if(pageCount>0);
    pageCount = 0;
    headerText.innerText=pageView[0].headerText;
    example.innerText=pageView[0].example;

    return pageView;
    console.log(pageView);

});

// resetBtn.addEventListener('click', renderPage);

//     function renderPage(e){
//     if(e.target.id =  "next"){
//         pageCount++;
//         // console.log(pageCount);
//      }
    
//      if(e.target.id = "reset"){
//         pageCount = 0;
//         console.log(pageCount);
//      }

// headerText.innerText=pageView[pageCount].headerText;
// nextButton.innerText=pageView[pageCount].nextButton;
// example.innerText=pageView[pageCount].example;
// explainer.innerText=pageView[pageCount].explainer;
// resetBtn.innerText=pageView[pageCount].resetBtn;

// console.log(renderPage);


// };













