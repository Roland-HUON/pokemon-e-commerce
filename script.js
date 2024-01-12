//afficher 6 pokémon choisis par défauts dans la page accueil (partie accueil-best-sellers)
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("accueil-best-sellers-pokemon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        <h3>${data.name}</h3>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("accueil-best-sellers-pokemon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        <h3>${data.name}</h3>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("accueil-best-sellers-pokemon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        <h3>${data.name}</h3>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("accueil-best-sellers-pokemon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        <h3>${data.name}</h3>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("accueil-best-sellers-pokemon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        <h3>${data.name}</h3>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("accueil-best-sellers-pokemon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}">
        <h3>${data.name}</h3>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });
//afficher les 30 premiers pokémon dans la page accueil (partie accueil-ventes)
fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    .then((response) => response.json())
    .then((data) => {
        const accueilVentesPokemon = document.createElement("div");
        accueilVentesPokemon.classList.add("accueil-ventes-pokemon");
        data.results.forEach((pokemon) => {
            console.log(data);
            const pokemonCard = document.createElement("div");
            pokemonCard.classList.add("accueil-ventes-pokemon-card");
            pokemonCard.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(34, -1)}.png" alt="image pokemon" class="accueil-ventes-pokemon-card-img">
            <h2 class="accueil-ventes-pokemon-card-title">${pokemon.name}</h2>
            `;
            accueilVentesPokemon.appendChild(pokemonCard);
        });
        document.querySelector(".accueil-ventes").appendChild(accueilVentesPokemon);
    });