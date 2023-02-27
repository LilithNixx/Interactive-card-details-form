//capturing all the neccesary data
const form = document.querySelector('.form');
const nameInput = document.querySelector('#name');
const printedCardName = document.querySelector('.card-name');
const cardNum = document.querySelector('#card-number');
const printedCardNum = document.querySelector('.card-num');
const month = document.querySelector('#month');
const printedCardmonth = document.querySelector('.card-month');
const year = document.querySelector('#year');
const printedCarYear = document.querySelector('.card-year');
const number = document.querySelector('#number');
const printedSecurityNum = document.querySelector('.security-num');
const error = document.querySelectorAll('.error');
const confirmBtn = document.querySelector('.confirm-btn');
const thankYouCard = document.querySelector('.thank-you-container');
const continueBtn = document.querySelector('.continue-btn');



//Couldn't find a better way to catch all in inputs
nameInput.addEventListener('keyup', e => {
    printedCardName.textContent = e.target.value;
    /*if (printedCardName.textContent = ''){
        printedCardName.textContent = 'Jane Appleseed';
    }*/
});

cardNum.addEventListener('keyup', e => {
    printedCardNum.textContent = e.target.value;
    if (printedCardNum.textContent === ''){
        printedCardNum.textContent = '0000 0000 0000 0000';
        //can't find a way to add the spaces between groups of zeros
    }
});

month.addEventListener('keyup', e => {
    printedCardmonth.textContent = e.target.value;
});

year.addEventListener('keyup', e => {
    printedCarYear.textContent = e.target.value;
});

number.addEventListener('keyup', e => {
    printedSecurityNum.textContent = e.target.value;
});

//Submiting 
form.addEventListener('submit', e => {
    e.preventDefault();
    
    const nameValue = nameInput.value.trim();
    const cardNumValue = cardNum.value.trim();
    const monthValue = month.value.trim();
    const yearValue = year.value.trim();
    const numberValue = number.value.trim();
    const onlyNums = /\d/;
    
    validateInputs(cardNumValue, nameValue, monthValue, yearValue, numberValue, onlyNums);


    //show thank you card
    if (nameValue !== '' && 
        onlyNums.test(cardNumValue) === true && monthValue !== '' && 
        monthValue <= 12 && 
        yearValue !== '' &&
        numberValue !== '') {
            form.style.display = 'none'
            thankYouCard.style.display = 'flex';
        }
});

//coming back to the beginning
continueBtn.addEventListener('click', () => {
    thankYouCard.style.display = 'none';

    //reseting cards:
    printedCardName.textContent = 'jane appleseed';
    printedCardNum.textContent = '0000 0000 0000 0000';
    printedCardmonth.textContent = '00';
    printedCarYear.textContent = '00';
    printedSecurityNum.textContent = '000';

    //reseting form:
    nameInput.value = '';
    cardNum.value = '';
    month.value = '';
    year.value = '';
    number.value = '';

    form.style.display = 'block'
});



//Input validation
const validateInputs = (cardNumValue, nameValue, monthValue, yearValue, numberValue, onlyNums) => {

    if (nameValue === '') {
        nameInput.style.borderColor = 'hsl(0, 100%, 66%)';
        error[0].style.display = 'inline-block';
    }else {
        nameInput.style.borderColor = 'hsl(270, 3%, 87%)';
        error[0].style.display = 'none';
    }

    if (onlyNums.test(cardNumValue) === false){
       cardNum.style.borderColor = 'hsl(0, 100%, 66%)';
        error[1].style.display = 'inline-block';
    } else {
        cardNum.style.borderColor = 'hsl(270, 3%, 87%)';
        error[1].style.display = 'none';
    }
    
    if (monthValue === '' || monthValue > 12){
        month.style.borderColor = 'hsl(0, 100%, 66%)';
        error[2].style.display = 'inline-block';
    } else {
        month.style.borderColor = 'hsl(270, 3%, 87%)';
        error[2].style.display = 'none';
    }

    if (yearValue === ''){
        year.style.borderColor = 'hsl(0, 100%, 66%)';
        error[2].style.display = 'inline-block';
    } else {
        year.style.borderColor = 'hsl(270, 3%, 87%)';
        error[2].style.display = 'none';
    }

    if (numberValue === '') {
        number.style.borderColor = 'hsl(0, 100%, 66%)';
        error[3].style.display = 'inline-block';
    }  else {
        number.style.borderColor = 'hsl(270, 3%, 87%)';
        error[3].style.display = 'none';
    }
}

