const myForm = document.getElementById("myForm");
const myForm2 = document.getElementById("myForm2");

myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form has been submitted!")
    console.log(myForm.Username.value)
    localStorage.setItem('8am', myForm.Username.value)
});



// Working with local storages:
localStorage.setItem('name', 'BOB')
console.log('We are printing the value of name')
console.log(localStorage.getItem('name'))


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

// LocalStorage for beginners (HTML and Javascript)
// https://www.youtube.com/watch?v=rVyTjFofok0

// How to connect js with html by using form:
// https://www.youtube.com/watch?v=I_fVO_NzT2g

// Sending the value 
// https://www.youtube.com/watch?v=TUnfb944HFI

// For getting today's date 
// https://www.delftstack.com/howto/html/html-todays-date/