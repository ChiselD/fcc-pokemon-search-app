// PSEUDOCODE
// Clean user input received from search box: lowercase it
// If user input includes any characters other than a-z and hyphen, return "not found" message
// Else if user input corresponds to a pokemon, show it

// UI variables
const userInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
// const userInput = document.getElementById();
// const userInput = document.getElementById();
// const userInput = document.getElementById();
// const userInput = document.getElementById();

const getUserInput = (input) => {
	const lowerCaseInput = input.toLowerCase();
	console.log(lowerCaseInput);
	return lowerCaseInput;
}

const reset = () => {
	document.getElementById("search-input").value = "";
}

searchButton.addEventListener("click", () => {
	getUserInput(userInput.value);
	reset();
});