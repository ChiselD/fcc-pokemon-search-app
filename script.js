// UI variables
const userInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const nameDisplay = document.getElementById("pokemon-name");
const idDisplay = document.getElementById("pokemon-id");
const weightDisplay = document.getElementById("weight");
const heightDisplay = document.getElementById("height");
const spriteDisplay = document.getElementById("sprite");
const typesDisplay = document.getElementById("types");
const hpDisplay = document.getElementById("hp");
const attackDisplay = document.getElementById("attack");
const defenseDisplay = document.getElementById("defense");
const specialAttackDisplay = document.getElementById("special-attack");
const specialDefenseDisplay = document.getElementById("special-defense");
const speedDisplay = document.getElementById("speed");


const reset = () => {
	document.getElementById("search-input").value = "";
	typesDisplay.innerHTML = "";
}

// search for queried Pokemon
async function getPokemonArr(searchQuery) {
	const url = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchQuery}`;
	try {
		const res = await fetch(url);
		if (!res.ok) {
			alert("Pokémon not found");
			throw new Error(`Error! Response status: ${res.status}`);
			return 1;
		}
		const pokemonDetails = await res.json();
		console.log(pokemonDetails);
		if (!pokemonDetails) {
			alert("Pokémon not found");
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
	nameDisplay.textContent = pokemon.name.toUpperCase();
	idDisplay.textContent = `#${pokemon.id}`;
	weightDisplay.textContent = pokemon.weight;
	heightDisplay.textContent = pokemon.height;
	spriteDisplay.src = pokemon.sprites.front_default;
	for (let i = 0; i < pokemon.types.length; i++) {
		typesDisplay.innerHTML += `<span>${pokemon.types[i].type.name.toUpperCase()}</span>`;
	}
	hpDisplay.textContent = pokemon.stats[0].base_stat;
	attackDisplay.textContent = pokemon.stats[1].base_stat;
	defenseDisplay.textContent = pokemon.stats[2].base_stat;
	specialAttackDisplay.textContent = pokemon.stats[3].base_stat;
	specialDefenseDisplay.textContent = pokemon.stats[4].base_stat;
	speedDisplay.textContent = pokemon.stats[5].base_stat;
}

searchButton.addEventListener("click", () => {
	getPokemonArr(userInput.value.toLowerCase());
	reset();
});