//Testing reading the text from the box
    document.getElementById("07am").value = localStorage.getItem('7am');
    document.getElementById("08am").value = localStorage.getItem('8am');
    document.getElementById("09am").value = localStorage.getItem('9am');
    document.getElementById("10am").value = localStorage.getItem('10am');
    document.getElementById("11am").value = localStorage.getItem('11am');
    document.getElementById("12am").value = localStorage.getItem('12am');
    document.getElementById("1pm").value = localStorage.getItem('1pm');
    document.getElementById("2pm").value = localStorage.getItem('2pm');
    document.getElementById("3pm").value = localStorage.getItem('3pm');
    document.getElementById("4pm").value = localStorage.getItem('4pm');
    document.getElementById("5pm").value = localStorage.getItem('5pm');
    document.getElementById("6pm").value = localStorage.getItem('6pm');
    document.getElementById("7pm").value = localStorage.getItem('7pm');
    document.getElementById("8pm").value = localStorage.getItem('8pm');
    document.getElementById("9pm").value = localStorage.getItem('9pm');
    

//This is the important code that we need to use in order to setItem to our variable
// eightAM.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Form has been submitted!: ")
//     localStorage.setItem('8am', eightAM.Username.value)
// });

addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem('7am', sevenAM.Username.value)
    localStorage.setItem('8am', eightAM.Username.value)
    localStorage.setItem('9am', nineAM.Username.value)
    localStorage.setItem('10am', tenAM.Username.value)
    localStorage.setItem('11am', elevenAM.Username.value)
    localStorage.setItem('12am', twelveAM.Username.value)
    localStorage.setItem('1pm', onePM.Username.value)
    localStorage.setItem('2pm', twoPM.Username.value)
    localStorage.setItem('3pm', threePM.Username.value)
    localStorage.setItem('4pm', fourPM.Username.value)
    localStorage.setItem('5pm', fivePM.Username.value)
    localStorage.setItem('6pm', sixPM.Username.value)
    localStorage.setItem('7pm', sevenPM.Username.value)
    localStorage.setItem('8pm', eightPM.Username.value)
    localStorage.setItem('9pm', ninePM.Username.value)
});


// Working with local storages:
localStorage.setItem('name', 'BOB')
console.log('We are printing the value of 7am: ')
console.log(localStorage.getItem('7am'))

//Testing saving the local storage into the Form
if(localStorage.getItem('7am')){
    console.log('IT DOES EXISTS AND THE VALUE OF 7am IS: ')
    console.log(localStorage.getItem('7am'))
}

//Code for editing the test that is already saved
const storageInput = document.querySelector('.username');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');




//This code is for savind the data 
if(storageInput){
    text.textContent = storedInput
}

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

// Testing codes
sevenAM.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.textContent)
}
button.addEventListener('click', saveToLocalStorage)

// REFERENCE VIDEOS

// Display the input value into html 
// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_text_value2

// Local storage
// https://www.w3schools.com/jsref/prop_win_localstorage.asp

// LocalStorage for beginners (HTML and Javascript)
// https://www.youtube.com/watch?v=rVyTjFofok0

// How to connect js with html by using form:
// https://www.youtube.com/watch?v=I_fVO_NzT2g

// Sending the value 
// https://www.youtube.com/watch?v=TUnfb944HFI

// For getting today's date 
// https://www.delftstack.com/howto/html/html-todays-date/