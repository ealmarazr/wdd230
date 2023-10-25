var lastChange = document.lastModified;
document.getElementById("last-updated").innerHTML = "Last updated: " + lastChange;

/*let outputDate = document.querySelector('date-time')*/
var today = new Date();
let month = today.getMonth() + 1;
let year  = today.getFullYear();
let date  = today.getDate();
let currentDate = `${month}/${date}/${year}`;
document.getElementById("todayIs").innerHTML = 'Date: ' + currentDate;

document.getElementById("currentYear").innerHTML = year;
/* end of data*/

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



