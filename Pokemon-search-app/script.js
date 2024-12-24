const searchButton = document.getElementById('search-button');

const pokeName = document.getElementById('pokemon-name');
const pokeId = document.getElementById('pokemon-id');
const pokeWeight = document.getElementById('weight');
const pokeHeight = document.getElementById('height');
const types = document.getElementById('types');
const pokeHp = document.getElementById('hp');
const pokeAttack = document.getElementById('attack');
const spriteContainer = document.getElementById('sprite-container');
const pokeDefense = document.getElementById('defense');
const pokeSpecialAttack = document.getElementById('special-attack');
const pokeSpecialDefense = document.getElementById('special-defense');
const pokeSpeed = document.getElementById('speed');

const allPokemon = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon";

const getPokemonData = async (pokemonName) => {
    try {
        let url;
        if (!isNaN(pokemonName)) {
            url = `${allPokemon}/${pokemonName}`;
        } else {
            url = `${allPokemon}/${pokemonName.toLowerCase()}`;
        }

        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
};
// fetchData();
// getPokemonData("bulbasaur");



const showPokemon = async (event) => {
    event.preventDefault();
    const input = document.getElementById('search-input');

    const pokemonName = input.value;
    if (!pokemonName) {
        spriteContainer.innerHTML = '';
        pokeName.innerHTML = '';
        pokeId.innerHTML = '';
        pokeWeight.innerHTML = '';
        pokeHeight.innerHTML = '';
        typesEl.innerHTML = '';
        pokeHp.innerHTML = '';
        pokeAttack.innerHTML = '';
        pokeDefense.innerHTML = '';
        pokeSpecialAttack.innerHTML = '';
        pokeSpecialDefense.innerHTML = '';
        pokeSpeed.innerHTML = '';
        alert('Pokemon not found');
        return;
    }

    const pokemonData = await getPokemonData(pokemonName);
    if (pokemonData) {
        const { name, id, weight, height, types, stats, sprites } = pokemonData;
        const hp = stats.find(stat => stat.stat.name === 'hp').base_stat;
        const attack = stats.find(stat => stat.stat.name === 'attack').base_stat;
        const defense = stats.find(stat => stat.stat.name === 'defense').base_stat;
        const specialAttack = stats.find(stat => stat.stat.name === 'special-attack').base_stat;
        const specialDefense = stats.find(stat => stat.stat.name === 'special-defense').base_stat;
        const speed = stats.find(stat => stat.stat.name === 'speed').base_stat

        const typesEl = document.getElementById("types");
        typesEl.innerHTML = '';

        types.forEach(type => {
            const typeEl = document.createElement('p');
            typeEl.textContent = type.type.name.toUpperCase();
            typesEl.appendChild(typeEl);
        });

        const src = sprites.front_default;
        spriteContainer.innerHTML = `<img id = 'sprite' src = "${src}" alt="Pokemon Sprite">`;

        pokeName.innerHTML = name.toUpperCase();
        pokeId.innerHTML = ` #${id}`;
        pokeWeight.innerHTML = `Weight: ${weight}`;
        pokeHeight.innerHTML = `Height: ${height}`;
        pokeHp.innerHTML = hp;
        pokeAttack.innerHTML = attack;
        pokeDefense.innerHTML = defense;
        pokeSpecialAttack.innerHTML = specialAttack;
        pokeSpecialDefense.innerHTML = specialDefense;
        pokeSpeed.innerHTML = speed;

    } else {
        spriteContainer.innerHTML = '';
        alert("Pokemon not found");
    }
}

searchButton.addEventListener('click', showPokemon);