const updateList = () =>{
    const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
    const panierElement = document.querySelector(".panier-panier-ul");
    panierElement.innerHTML = "";
    pokemonPanier.forEach((pokemon, index) => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then((response) => response.json())
            .then((data) => {
                const price = 7 * data.id + 5* data.types.length;
                localStorage.setItem("price", JSON.stringify(price));
                panierElement.innerHTML += `<li><p>${pokemon}</p> <p>${price}€</p> <button onclick="removePokemon(${index})">Supprimer</button></li><hr>`;
                //stocker ce prix dans un tableau des prix en local storage et initialiser le tableau
                const priceArray = JSON.parse(localStorage.getItem("priceArray")) || [];
                priceArray.push(price);
                localStorage.setItem("priceArray", JSON.stringify(priceArray));
            });
    });
    const priceArray = JSON.parse(localStorage.getItem("priceArray")) || [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const totalPrice = priceArray.reduce(reducer, 0);
    document.querySelector(".total").innerHTML = totalPrice + "€";
};
const removePokemon = (index) => {
    const pokemonElement = JSON.parse(localStorage.getItem("panier")) || [];
    pokemonElement.splice(index, 1);
    localStorage.setItem("panier", JSON.stringify(pokemonElement));
    updateList();
};
// Initialiser la liste au chargement de la page
updateList();

//parti recommandation
fetch("https://pokeapi.co/api/v2/pokemon/rayquaza")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("dragon");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
        </div>
    `;
        document.querySelector(".recommandation-pokemon").appendChild(pokemonCard);
        pokemonCard.addEventListener("click", () => {
            window.location.href = `produit.html?name=${pokemonCard.querySelector("h2").textContent}`;
        });
    });

fetch("https://pokeapi.co/api/v2/pokemon/emboar")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("fire");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
        </div>
    `;
        document.querySelector(".recommandation-pokemon").appendChild(pokemonCard);
        pokemonCard.addEventListener("click", () => {
            window.location.href = `produit.html?name=${pokemonCard.querySelector("h2").textContent}`;
        });
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
        </div>
    `;
        document.querySelector(".recommandation-pokemon").appendChild(pokemonCard);
        pokemonCard.addEventListener("click", () => {
            window.location.href = `produit.html?name=${pokemonCard.querySelector("h2").textContent}`;
        });
    });

fetch("https://pokeapi.co/api/v2/pokemon/vaporeon")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("water");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
        </div>
    `;
        document.querySelector(".recommandation-pokemon").appendChild(pokemonCard);
        pokemonCard.addEventListener("click", () => {
            window.location.href = `produit.html?name=${pokemonCard.querySelector("h2").textContent}`;
        });
    });

fetch("https://pokeapi.co/api/v2/pokemon/unfezant")
    .then((response) => response.json())
    .then((data) => {
        const pokemonCard = document.createElement("div");
        pokemonCard.classList.add("pokemon-card");
        pokemonCard.classList.add("normal");
        pokemonCard.innerHTML = `
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png" alt="${data.name}" class="pokemon-card-img">
        <div class="pokemon-card-infos">
            <h2 class="pokemon-card-title">${data.name}</h2>
        </div>
    `;
        document.querySelector(".recommandation-pokemon").appendChild(pokemonCard);
        pokemonCard.addEventListener("click", () => {
            window.location.href = `produit.html?name=${pokemonCard.querySelector("h2").textContent}`;
        });
    });