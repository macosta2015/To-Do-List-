const myForm = document.getElementById("myForm");
const myForm2 = document.getElementById("myForm2");


// testing the code
let text2 = "We are passing the javascript value to HTML";
document.getElementById("myP").innerHTML = text2;
let text3 = "We are using getElementById";
document.getElementById("myDIV").innerHTML = text3;
document.getElementById("myDIV4").innerHTML = text3;


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!")
    // console.log(myForm.Username.value)
    // localStorage.setItem('8am', myForm.Username.value)
    console.log(myForm.Username.value)
    localStorage.setItem('8am', myForm.Username.value)
});

console.log("WE ARE OUTSIDE THE LOOPS TESTING: " + myForm.Username.value);
console.log(myForm.Username.value)


// Working with local storages:
localStorage.setItem('name', 'BOB')
console.log('We are printing the value of 8am: ')
console.log(localStorage.getItem('8am'))

//Testing saving the local storage into the Form
if(localStorage.getItem('8am')){
    console.log('IT DOES EXISTS AND THE VALUE OF 8am IS: ')
    console.log(localStorage.getItem('8am'))
}

//Testing reading the text from the box
function myFunction() {
    document.getElementById("myText").value = localStorage.getItem('8am');
}


//Code for editing the test that is already saved
const storageInput = document.querySelector('.storage');
const text = document.querySelector('.text');
const button = document.querySelector('.button');
const storedInput = localStorage.getItem('textinput');




//This code is for savind the data 
if(storageInput){
    text.textContent = storedInput
    // text.textContent = myForm2
}


// //Testing saving the local storage into the Form
// if(myForm){
//     text.textContent = myForm
// }

storageInput.addEventListener('input', letter => {
    text.textContent = letter.target.value
})

// Testing codes
myForm.addEventListener('input', letter => {
    text.textContent = letter.target.value
})
// myForm2.addEventListener('input', letter => {
//     myForm2.textContent = letter.target.value
// })



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