// 1. create a studentGreeting variable, it should include a personal greeting from you
const student = "Hello";
// 2. log out your newly created variable
console.log(student);

const header = document.getElementById("my-header");

header.style.background = "red";
header.style.color = "green";

console.log(header);

const headerBtn = document.getElementById("header-btn");
const title = document.getElementById("title");
let counter = "1";

headerBtn.addEventListener("click", function () {
	title.textContent = `You have pressed the button ${counter} times!`;
	headerBtn.style.background = "green";
	// headerBtn.textContent = counter;
	counter++;
});

console.log(headerBtn);
