// document.querySelector("#submit").addEventListener("click", function() {
//     const password = document.getElementById("password").value;
//     const randomPassword = Math.random().toString(36).slice(-8);


//     if (password === randomPassword) {
//         alert("Passwords match!");
//     } else {
//         alert("Passwords do not match! Please try again.");
//     }
// });
// document.getElementsByClassName('random').innerHTML = randomPassword;

document.getElementById("toggle").addEventListener("click", function() {
    const password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
        document.getElementById("toggle").innerHTML = "Hide";
    } else {
        password.type = "password";
        document.getElementById("toggle").innerHTML = "Show";
    }
})

const copy = document.querySelector('span')
copy.innerText = new Date().getFullYear()


function randomPassword() {
    const random = document.getElementById("random")
   const changing =Math.floor(Math.random() * 999999)
    random.innerText = changing
    const password = document.getElementById("password")
const submit = document.querySelector('.btn-primary')
submit.addEventListener('click',runEvent)
function runEvent(e) {
    e.preventDefault()
    if (password.value == changing) {
        alert('Password Matched')
    } else {
        alert('Password Not Matched')
    }
}
}
randomPassword()





// setTimeout(() => {
//     alert('Password will be changed in 10 seconds')
// }, 10000)
setInterval(randomPassword, 10000)