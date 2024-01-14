document.addEventListener("DOMContentLoaded", () => {
    //afficher 6 pokémon choisis par défauts dans la page accueil (partie accueil-best-sellers)
fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("fire");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
            <button class="add-panier">Ajouter au panier</button>
        </div>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/lucario")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("fighting");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
            <button class="add-panier">Ajouter au panier</button>
        </div>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
        //panier.panierList();
    });

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("electric");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
            <button class="add-panier">Ajouter au panier</button>
        </div>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
        //panier.panierList();
    });

fetch("https://pokeapi.co/api/v2/pokemon/greninja")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("water");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
            <button class="add-panier">Ajouter au panier</button>
        </div>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
        //panier.panierList();
    });

fetch("https://pokeapi.co/api/v2/pokemon/magnezone")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("steel");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
            <button class="add-panier">Ajouter au panier</button>
        </div>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
    });

fetch("https://pokeapi.co/api/v2/pokemon/eevee")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("normal");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos normal">
            <h2 class="pokemon-card-title">${data.name}</h2>
            <button class="add-panier">Ajouter au panier</button>
        </div>
    `;
        document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
        //mettre pokémon dans panier mis ici car ça va marcher pour les autres pokémons au dessus
        document.querySelectorAll(".add-panier").forEach((button) => {
            button.addEventListener("click", () => {
                const pokemonPanierName = button.parentNode.querySelector("h2").textContent;
                const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
                pokemonPanier.push(pokemonPanierName);
                localStorage.setItem("panier", JSON.stringify(pokemonPanier));
            });
        });
    });
});
const zorua = document.querySelector(".zorua");
zorua.addEventListener("click", () => {
    window.location.href = `produit.html?name=zorua`;
});
const magicarpe = document.querySelector(".magicarpe");
magicarpe.addEventListener("click", () => {
    window.location.href = `produit.html?name=magikarp`;
});
