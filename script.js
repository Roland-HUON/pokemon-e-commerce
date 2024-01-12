document.addEventListener("DOMContentLoaded", () => {
//     //afficher 6 pokémon choisis par défauts dans la page accueil (partie accueil-best-sellers)
// fetch("https://pokeapi.co/api/v2/pokemon/charizard")
//     .then((response) => response.json())
//     .then((data) => {
//         const pokemonCard = document.createElement("div");
//         pokemonCard.classList.add("pokemon-card");
//         pokemonCard.innerHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
//         <h2 class="pokemon-card-title">${data.name}</h2>
//     `;
//         document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
//     });

// fetch("https://pokeapi.co/api/v2/pokemon/lucario")
//     .then((response) => response.json())
//     .then((data) => {
//         const pokemonCard = document.createElement("div");
//         pokemonCard.classList.add("pokemon-card");
//         pokemonCard.innerHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
//         <h2 class="pokemon-card-title">${data.name}</h2>
//     `;
//         document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
//     });

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then((response) => response.json())
//     .then((data) => {
//         const pokemonCard = document.createElement("div");
//         pokemonCard.classList.add("pokemon-card");
//         pokemonCard.innerHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
//         <h2 class="pokemon-card-title">${data.name}</h2>
//     `;
//         document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
//     });

// fetch("https://pokeapi.co/api/v2/pokemon/greninja")
//     .then((response) => response.json())
//     .then((data) => {
//         const pokemonCard = document.createElement("div");
//         pokemonCard.classList.add("pokemon-card");
//         pokemonCard.innerHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
//         <h2 class="pokemon-card-title">${data.name}</h2>
//     `;
//         document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
//     });

// fetch("https://pokeapi.co/api/v2/pokemon/magnezone")
//     .then((response) => response.json())
//     .then((data) => {
//         const pokemonCard = document.createElement("div");
//         pokemonCard.classList.add("pokemon-card");
//         pokemonCard.innerHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
//         <h2 class="pokemon-card-title">${data.name}</h2>
//     `;
//         document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
//     });

// fetch("https://pokeapi.co/api/v2/pokemon/eevee")
//     .then((response) => response.json())
//     .then((data) => {
//         const pokemonCard = document.createElement("div");
//         pokemonCard.classList.add("pokemon-card");
//         pokemonCard.innerHTML = `
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
//         <h2 class="pokemon-card-title">${data.name}</h2>
//     `;
//         document.querySelector(".accueil-best-sellers-pokemon").appendChild(pokemonCard);
//     });

//afficher les 30 premiers pokémon dans la page produit (partie produit-ventes)
fetch("https://pokeapi.co/api/v2/pokemon?limit=30")
    .then((response) => response.json())
    .then((data) => {
        const accueilVentesPokemon = document.createElement("div");
        accueilVentesPokemon.classList.add("ventes-pokemon");
        data.results.forEach((pokemon) => {
            const pokemonCard = document.createElement("div");
            pokemonCard.classList.add("pokemon-card");
            pokemonCard.innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(34, -1)}.png" alt="image pokemon" class="pokemon-card-img">
            <div class="pokemon-card-infos">
                <h2 class="pokemon-card-title">${pokemon.name}</h2>
                <button>Ajouter au panier</button>
            </div>
            `;
            accueilVentesPokemon.appendChild(pokemonCard);
        });
        document.querySelector(".produit-ventes").appendChild(accueilVentesPokemon);
        //stocker le nom du pokémon dans le localstorage lors du click sur la card
        const pokemonCard = document.querySelectorAll(".pokemon-card");
        pokemonCard.forEach((card) => {
        card.addEventListener("click", () => {
            localStorage.setItem("pokemon", card.querySelector(".pokemon-card-title").textContent);
            const pokemonName = localStorage.getItem("pokemon");
            //ajouter le pokémon concerné dans l'url sans recharger la page
            window.history.pushState({}, "", `?name=${pokemonName}`);
            //afficher le nom du pokémon dans la page si il y a un nom dans l'url
            const urlParams = new URLSearchParams(window.location.search);
            const PokemonName = urlParams.get("name");
            if (PokemonName) {
                document.querySelector(".produit-ventes").style.display = "none";
                document.querySelector(".produit-ventes-single").style.display = "flex";
                fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonName)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        document.querySelector(".produit-ventes-single").innerHTML = `
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="image pokemon" class="pokemon-card-img">
                        <div class="pokemon-card-infos">
                            <h2>${data.name}</h2>
                            <div class="pokemon-card-infos-type">
                                <p>Types : ${data.types.map((type) => type.type.name).join(", ")}</p>
                            </div>
                            <div class="pokemon-card-infos-abilities">
                                <p>Abilities : ${data.abilities.map((ability) => ability.ability.name).join(", ")}</p>
                            </div>
                            <div class="pokemon-card-infos-stats">
                                <p id="stats">Stats : </p>
                            </div>
                            <button>Ajouter au panier</button>
                        </div>
                        `;
                        const list = document.createElement("ul");
                        data.stats.forEach((stat) =>{
                            console.log(`${stat.stat.name} ${stat.base_stat}`);
                            const listStats = document.createElement("li");
                            listStats.innerHTML = `${stat.stat.name} : ${stat.base_stat}`;
                            list.appendChild(listStats);
                        })
                        document.querySelector("#stats").appendChild(list);
                    })
            }
        });
        });
    })
    .catch((error) => {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = error.message;
        document.querySelector(".produit-ventes").appendChild(errorMessage);
    });
});
