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

// other variables

// array of all pokemon objects
async function getPokemonArr() {
	const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Error! Response status: ${res.status}`);
		}
		const json = await res.json();
		// console.log(json);
		console.log(json.results[0].name);
	} catch (err) {
		console.error(err.message);
	}
}

const getUserInput = (input) => {
	const lowerCaseInput = input.toLowerCase();
	// console.log(lowerCaseInput);
	return lowerCaseInput;
}

const reset = () => {
	document.getElementById("search-input").value = "";
}

searchButton.addEventListener("click", () => {
	getUserInput(userInput.value);
	getPokemonArr();
	reset();
});