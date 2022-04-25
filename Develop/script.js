//Testing reading the text from the box

    document.getElementById("myText").value = localStorage.getItem('7am');
    document.getElementById("07am").value = localStorage.getItem('7am');
    document.getElementById("08am").value = localStorage.getItem('8am');
    document.getElementById("09am").value = localStorage.getItem('9am');
    document.getElementById("10am").value = localStorage.getItem('10am');
    document.getElementById("11am").value = localStorage.getItem('11am');
    document.getElementById("12am").value = localStorage.getItem('12am');
    document.getElementById("1am").value = localStorage.getItem('1am');



//This is the important code that we need to use in order to setItem to our variable
//It works when you click enter 
sevenAM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('7am', sevenAM.Username.value)
});


eightAM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('8am', eightAM.Username.value)
});


nineAM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('9am', nineAM.Username.value)
});


tenAM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('10am', tenAM.Username.value)
});

elevenAM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('11am', elevenAM.Username.value)
});

twelveAM.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('12am', twelveAM.Username.value)
});

addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!: ")
    localStorage.setItem('1am', oneAM.Username.value)
});




console.log("WE ARE OUTSIDE THE LOOPS TESTING: " + sevenAM.Username.value);
console.log(sevenAM.Username.value)
console.log(eightAM.Username.value)

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