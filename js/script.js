// global variable
var name = prompt("What's your Name?");
var age = prompt("What's your age?");
var education = prompt("Education (e.g. HighSchool, UG, PG, etc.)");
var address = prompt("Address (City, State)");
var contact = prompt("Enter your Mobile number")

//changing html value
document.getElementById('name').innerHTML = name;
console.log(name);

document.getElementById('age').innerHTML = age;
console.log(age);

document.getElementById('education').innerHTML = education;
console.log(education);

document.getElementById('address').innerHTML = address;
console.log(address);

document.getElementById('contact').innerHTML = contact;
console.log(contact);


// reload btn
function reload() {
    location.reload();
}


// same output function

// function name() {
//     var name = prompt("What's your Name?");
//     document.getElementById('name').innerHTML = name;
// }

// function age() {
//     var age = prompt("What's your age?");
//     document.getElementById('age').innerHTML = age;
// }

// function education() {
//     var education = prompt("Education (e.g. HighSchool, UG, PG, etc.)");
//     document.getElementById('education').innerHTML = education;
// }

// function address() {
//     var address = prompt("Address (City, State)");
//     document.getElementById('address').innerHTML = address;
// }

// function contact() {
//     var contact = prompt("Enter your Mobile number");
//     document.getElementById('contact').innerHTML = contact;
// }

// name();
// age();
// education();
// address();
// contact();