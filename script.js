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


const reset = () => {
	document.getElementById("search-input").value = "";
}

const getUserInput = (input) => {
	const lowerCaseInput = input.toLowerCase();
	return lowerCaseInput;
}

// get array of all pokemon objects
async function getPokemonArr(searchQuery) {
	const url = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";
	try {
		const res = await fetch(url);
		if (!res.ok) {
			throw new Error(`Error! Response status: ${res.status}`);
		}
		const json = await res.json();
		const pokemonArr = json.results;
		findPokemon(searchQuery, pokemonArr);
	} catch (err) {
		console.error(err.message);
	}
	return 1;
}

// search for a Pokemon with a name or ID matching the entered query
const findPokemon = (query, arr) => {
	for (let i = 0, j = arr.length; i < j; i++) {
		if (arr[i].name === query || arr[i].id === parseInt(query)) {
			console.log(`Found Pokemon: ${arr[i].name}`);
			return `Found Pokemon: ${arr[i].name}`;
		}
	}
	console.log("Not found");
	return "Not found";
}

searchButton.addEventListener("click", () => {
	const input = getUserInput(userInput.value);
	getPokemonArr(input);
	reset();
});