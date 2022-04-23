const myForm = document.getElementById("myForm");

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



// REFERENCE VIDEOS
// 1. How to connect js with html by using form:
// https://www.youtube.com/watch?v=I_fVO_NzT2g


// Sending the value 
// https://www.youtube.com/watch?v=TUnfb944HFI