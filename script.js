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

// search for queried Pokemon
async function getPokemonArr(searchQuery) {
	const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchQuery}`;
	try {
		const res = await fetch(url);
		if (!res.ok) {
			alert("Pokemon not found.");
			throw new Error(`Error! Response status: ${res.status}`);
		}
		const pokemonDetails = await res.json();
		console.log(pokemonDetails);
		if (!pokemonDetails) {
			console.log("Not found");
			return 1;
		}
		displayPokemon(pokemonDetails);
		return 0;
	} catch (err) {
		console.error(err.message);
	}
	return 1;
}

// display details on requested Pokemon
const displayPokemon = (pokemon) => {
	console.log(`Pokemon name: ${pokemon.name.toUpperCase()}`);
	console.log(`Pokemon ID: #${pokemon.id}`);
	console.log(`Pokemon weight: ${pokemon.weight}`);
	console.log(`Pokemon height: ${pokemon.height}`);
	const types = [];
	for (let i = 0; i < pokemon.types.length; i++) {
		types.push(pokemon.types[i].type.name);
	}
	console.log("Pokemon types: " + types.join(", "));
	console.log(`Pokemon HP: ${pokemon.stats[0].base_stat}`);
	console.log(`Pokemon attack: ${pokemon.stats[1].base_stat}`);
	console.log(`Pokemon defense: ${pokemon.stats[2].base_stat}`);
	console.log(`Pokemon special attack: ${pokemon.stats[3].base_stat}`);
	console.log(`Pokemon special defense: ${pokemon.stats[4].base_stat}`);
	console.log(`Pokemon speed: ${pokemon.stats[5].base_stat}`);
}

searchButton.addEventListener("click", () => {
	getPokemonArr(userInput.value.toLowerCase());
	reset();
});