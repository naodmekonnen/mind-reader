let header = document.getElementById('header');
let helper = document.getElementById('helper');
let btn2 = document.getElementById('btn2'); 
let btn1 = document.getElementById('btn1');
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*'];

let page = 0;

let resetbtn = function () {
    if (page === 0) {
        page++;
    } else {
        page = 0;
    }
    changePage();
}

let forward = function () {
    page++;
    changePage();
}

btn2.addEventListener('click', resetbtn);
btn1.addEventListener('click', forward);

  function numbers () {
    let result = '';
    for (let i = 0; i < 99; i++) {
    result += ( (i+1) + ' = ' + symbols[i % symbols.length] + '<br>');
    }
    return result;
}

let list = numbers();


 function changePage() { 
    switch(page) {
        case 0:
            header.innerHTML = 'I can read your mind';
            helper.style.visibility = 'hidden';
            btn2.innerHTML = 'GO';
            btn1.style.visibility = 'hidden';
            break;

        case 1:
            header.innerHTML = 'Pick a number from 01 - 99';
            helper.innerHTML = 'When you have your number click next';
            helper.style.visibility = 'visible';
            btn2.innerHTML = 'Refresh';
            btn1.innerHTML = 'Next';
            btn1.style.visibility = 'visible';
            break;
        
        case 2:
            header.innerHTML = 'Add both digits together to get a new number';
            helper.innerHTML = 'Ex: 14 is 1 + 4 = 5 click next to proceed';
            btn2.innerHTML = 'Refresh';
            btn1.innerHTML = 'Next';
            break;
        
        case 3:
            header.innerHTML = 'Subtract your new number from the original number';
            helper.innerHTML = 'Ex: 14 - 5 = 9 click next to procced';
            btn2.onclick = "Refresh";
            btn1.onclick = 'Next';
            break;

        case 4: 
            header.innerHTML = list;
            helper.innerHTML = 'Find your new number. Note the symbol beside the number';
            btn2.innerHTML = 'Refresh';
            btn1.innerHTML = 'Reveal';
            break;

        case 5:
            header.innerHTML = '&';
            helper.innerHTML = 'your symbol is: &';
            btn2.innerHTML = 'Refresh';
            btn1.style.visibility = 'hidden';
            break;


    }
 }

 changePage();


