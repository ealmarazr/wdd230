const d = new Date();
let year = d.getFullYear();
document.getElementById("currentYear").innerHTML = year;    

var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML =  "Last updated: " + lastChange;


const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

/* count the number of visits */
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("visits-ls"));
if (numVisits !==0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = "Welcome ... This is your first visit!"
}

numVisits++;
localStorage.setItem("visits-ls", numVisits)

/* form fields validations password */


let myInput1 = document.getElementById("psw1");
let myInput2 = document.getElementById("psw2");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
var number = document.getElementById("number");
let length   = document.getElementById("length");

myInput1.onfocus = function(){
	document.getElementById("message").style.display = "block";
}

myInput1.onblur = function(){
	document.getElementById("message").style.display = "none";
}
myInput.onkeyup = function() {
	// Validate lowercase letters
	var lowerCaseLetters = /[a-z]/g;
	if(myInput.value.match(lowerCaseLetters)) {
		letter.classList.remove("invalid");
		letter.classList.add("valid");
	} else {
		letter.classList.remove("valid");
		letter.classList.add("invalid");
	}
// Validate capital letters
	var upperCaseLetters = /[A-Z]/g;
	if(myInput.value.match(upperCaseLetters)) {
		capital.classList.remove("invalid");
		capital.classList.add("valid");
		} else {
		capital.classList.remove("valid");
		capital.classList.add("invalid");
	}
// Validate numbers
	var numbers = /[0-9]/g;
	if(myInput.value.match(numbers)) {
		number.classList.remove("invalid");
		number.classList.add("valid");
		} else {
		number.classList.remove("valid");
		number.classList.add("invalid");
	}

// Validate length
	if(myInput.value.length >= 8) {
		length.classList.remove("invalid");
		length.classList.add("valid");
		} else {
		length.classList.remove("valid");
		length.classList.add("invalid");
		}
}

/*
passwd2.addEventListener('focusout',() => {
	if (passwd1.value == passwd2.value){
		console.log('same values');
	} else {
		document.getElementById("message").style.display = "Password does not match !!!"
	}
	
})

*/
/***form rate */

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	console.log("Value:" + this.value)
  output.innerHTML = this.value;
}



