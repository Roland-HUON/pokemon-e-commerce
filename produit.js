//A votre attention, il semblerait que le changement des trentes pokémons ne marche pas en ligne !!!

//afficher les 30 premiers pokémon dans la page produit (partie produit-ventes)
let palettePokemon = Number(localStorage.getItem("palettePokemon")) || 0;
// let palettePokemon = 0;
localStorage.setItem("palettePokemon", palettePokemon);
if(localStorage.getItem("palettePokemon") == 0){
fetch(`https://pokeapi.co/api/v2/pokemon?limit=30`)
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
        </div>
        `;
        accueilVentesPokemon.appendChild(pokemonCard);
    });
    document.querySelector(".produit-ventes-single").appendChild(accueilVentesPokemon);
    colorType();
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
            document.querySelector(".produit-ventes-title").style.display = "none";
            document.querySelector(".produit-ventes-single").style.display = "flex";
            fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonName)
                .then((response) => response.json())
                .then((data) => {
                    //afficher les infos général du pokémon choisit
                    document.querySelector(".produit-ventes-single").innerHTML = `
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="image pokemon" class="pokemon-card-img">
                    <div class="pokemon-card-infos after">
                        <h2 class="after-h2">${data.name}</h2>
                        <div class="pokemon-card-infos-type">
                            <p class="after-p">Types : ${data.types.map((type) => type.type.name).join(", ")}</p>
                        </div>
                        <div class="pokemon-card-infos-abilities">
                            <p class="after-p">Abilities : ${data.abilities.map((ability) => ability.ability.name).join(", ")}</p>
                        </div>
                        <div class="pokemon-card-infos-stats">
                            <p class="after-p" id="stats">Stats : </p>
                        </div>
                        <button class="add-panier after-button">Ajouter au panier</button>
                    </div>
                    `;
                    //afficher les stats du pokémon
                    const list = document.createElement("ul");
                    data.stats.forEach((stat) =>{
                        console.log(`${stat.stat.name} ${stat.base_stat}`);
                        const listStats = document.createElement("li");
                        listStats.innerHTML = `${stat.stat.name} : ${stat.base_stat}`;
                        list.appendChild(listStats);
                    })
                    document.querySelector("#stats").appendChild(list);

                    // on ajoute un événement sur le bouton pour ajouter le pokémon dans le localstorage
                    document.querySelectorAll(".add-panier").forEach((button) => {
                        button.addEventListener("click", () => {
                            const pokemonPanierName = button.parentNode.querySelector("h2").textContent;
                            const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
                            pokemonPanier.push(pokemonPanierName);
                            localStorage.setItem("panier", JSON.stringify(pokemonPanier));
                        });
                    });
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
} else {
    pokemonGenerate();
}
const palettePokemonText = document.createElement("p");
palettePokemonText.textContent = `${palettePokemon}`;
const palettePokemonButtonPast = document.createElement("button");
palettePokemonButtonPast.textContent = "<";
const palettePokemonButtonNext = document.createElement("button");
palettePokemonButtonNext.textContent = ">";
const palettePokemonSwitch = document.createElement("div");
palettePokemonSwitch.classList.add("palette-pokemon-switch");
document.querySelector(".produit-ventes-single").append(palettePokemonSwitch);
palettePokemonSwitch.appendChild(palettePokemonButtonPast);
palettePokemonSwitch.appendChild(palettePokemonText);
palettePokemonSwitch.appendChild(palettePokemonButtonNext);
palettePokemonButtonPast.addEventListener("click", () => {
    palettePokemon = Number(localStorage.getItem("palettePokemon")) || 0;
    palettePokemon--;
    localStorage.setItem("palettePokemon", palettePokemon);
    location.reload();
    pokemonGenerate();
    palettePokemonText.textContent = `${palettePokemon}`;
})
palettePokemonButtonNext.addEventListener("click", () => {
    palettePokemon = Number(localStorage.getItem("palettePokemon")) || 0;
    palettePokemon++;
    localStorage.setItem("palettePokemon", palettePokemon);
    location.reload();
    pokemonGenerate();
    palettePokemonText.textContent = `${palettePokemon}`;
})

//afficher les 30 pokémon dans la page produit
const pokemonGenerate = () =>{
    let palettePokemon = Number(localStorage.getItem("palettePokemon")) || 0;
    // console.log(palettePokemon*30);
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${palettePokemon * 30}`)
    console.log(`https://pokeapi.co/api/v2/pokemon?limit=30&offset=${palettePokemon * 30}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const accueilVentesPokemon = document.createElement("div");
            accueilVentesPokemon.classList.add("ventes-pokemon");
            data.results.forEach((pokemon) => {
                const pokemonCard = document.createElement("div");
                pokemonCard.classList.add("pokemon-card");
                pokemonCard.innerHTML = `
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.url.slice(34, -1)}.png" alt="image pokemon" class="pokemon-card-img">
                <div class="pokemon-card-infos">
                    <h2 class="pokemon-card-title">${pokemon.name}</h2>
                </div>
                `;
                accueilVentesPokemon.appendChild(pokemonCard);
            });
            document.querySelector(".produit-ventes-single").appendChild(accueilVentesPokemon);
            colorType();
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
                    document.querySelector(".produit-ventes-title").style.display = "none";
                    document.querySelector(".produit-ventes-single").style.display = "flex";
                    fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonName)
                        .then((response) => response.json())
                        .then((data) => {
                            //afficher les infos général du pokémon choisit
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
                                <button class="add-panier">Ajouter au panier</button>
                            </div>
                            `;
                            //afficher les stats du pokémon
                            const list = document.createElement("ul");
                            data.stats.forEach((stat) =>{
                                console.log(`${stat.stat.name} ${stat.base_stat}`);
                                const listStats = document.createElement("li");
                                listStats.innerHTML = `${stat.stat.name} : ${stat.base_stat}`;
                                list.appendChild(listStats);
                            })
                            document.querySelector("#stats").appendChild(list);
    
                            // on ajoute un événement sur le bouton pour ajouter le pokémon dans le localstorage
                            document.querySelectorAll(".add-panier").forEach((button) => {
                                button.addEventListener("click", () => {
                                    const pokemonPanierName = button.parentNode.querySelector("h2").textContent;
                                    const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
                                    pokemonPanier.push(pokemonPanierName);
                                    localStorage.setItem("panier", JSON.stringify(pokemonPanier));
                                });
                            });
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
    }

// s'il y a déjà un pokémon dans l'url
//afficher le nom du pokémon dans la page si il y a un nom dans l'url
const urlParams = new URLSearchParams(window.location.search);
const PokemonName = urlParams.get("name");
if (PokemonName) {
    document.querySelector(".produit-ventes-title").style.display = "none";
    document.querySelector(".produit-ventes-single").style.display = "flex";
    fetch("https://pokeapi.co/api/v2/pokemon/" + PokemonName)
        .then((response) => response.json())
        .then((data) => {
            //afficher les infos général du pokémon choisit
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
                <button class="add-panier">Ajouter au panier</button>
            </div>
            `;
            //afficher les stats du pokémon
            const list = document.createElement("ul");
            data.stats.forEach((stat) =>{
                console.log(`${stat.stat.name} ${stat.base_stat}`);
                const listStats = document.createElement("li");
                listStats.innerHTML = `${stat.stat.name} : ${stat.base_stat}`;
                list.appendChild(listStats);
            })
            document.querySelector("#stats").appendChild(list);

            // on ajoute un événement sur le bouton pour ajouter le pokémon dans le localstorage
            document.querySelectorAll(".add-panier").forEach((button) => {
                button.addEventListener("click", () => {
                    const pokemonPanierName = button.parentNode.querySelector("h2").textContent;
                    const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
                    pokemonPanier.push(pokemonPanierName);
                    localStorage.setItem("panier", JSON.stringify(pokemonPanier));
                });
            });
        })
}
//selon le type/les types du pokémon, afficher une couleur de fond différente
const colorType = () => {
    document.querySelectorAll(".pokemon-card").forEach((card) => {
        const pokemonName = card.querySelector("h2");
        fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName.textContent)
            .then((response) => response.json())
            .then((types) => {
                const typ = types.types.map((type) => type.type.name).join(", ");
                const premierTypePokemon = typ.split(",")[0];
                card.classList.add(premierTypePokemon);
            })
    });
};

// barre de recherche 
document.querySelector("#searchButton").addEventListener("click", () => {
    const userInput = document.querySelector("#searchInput").value.toLowerCase();
    fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Aucun Pokémon nommé "${userInput}" trouvé.`);
            }
            return response.json();
        })
        .then((data) => {
            document.querySelector(".produit-ventes-single").style.display = "flex";
            document.querySelector(".produit-ventes-single").innerHTML = `
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
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
                <button class="add-panier">Ajouter au panier</button>
            </div>
            `;
            //afficher les stats du pokémon
            const list = document.createElement("ul");
            data.stats.forEach((stat) =>{
                console.log(`${stat.stat.name} ${stat.base_stat}`);
                const listStats = document.createElement("li");
                listStats.innerHTML = `${stat.stat.name} : ${stat.base_stat}`;
                list.appendChild(listStats);
            })
            document.querySelector("#stats").appendChild(list);

            // on ajoute un événement sur le bouton pour ajouter le pokémon dans le localstorage
            document.querySelectorAll(".add-panier").forEach((button) => {
                button.addEventListener("click", () => {
                    const pokemonPanierName = button.parentNode.querySelector("h2").textContent;
                    const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
                    pokemonPanier.push(pokemonPanierName);
                    localStorage.setItem("panier", JSON.stringify(pokemonPanier));
                });
            });
        })
        .catch((error) => {
            document.querySelector("#searchList").innerHTML = `<p>Erreur : ${error.message}</p>`;
        });
});