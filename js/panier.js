const panierList = ()=>{
    document.querySelectorAll(".add-panier").forEach((button) => {
        console.log(button);
        button.addEventListener("click", () => {
            const pokemonPanierName = button.parentNode.querySelector("h2").textContent;
            const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
            pokemonPanier.push(pokemonPanierName);
            console.log(pokemonPanier)
            localStorage.setItem("panier", JSON.stringify(pokemonPanier));
            // updateList();
        });
    });
}
const updateList = () =>{
    const pokemonPanier = JSON.parse(localStorage.getItem("panier")) || [];
    const panierElement = document.querySelector(".panier-panier-ul");
    panierElement.innerHTML = "";
    pokemonPanier.forEach((pokemon, index) => {
        panierElement.innerHTML += `<li><p>${pokemon}</p> <p>10,00€</p> <button onclick="removePokemon(${index})">Supprimer</button></li>`;
    });
};
const removePokemon = (index) => {
    const pokemonElement = JSON.parse(localStorage.getItem("panier")) || [];
    pokemonElement.splice(index, 1);
    localStorage.setItem("panier", JSON.stringify(pokemonElement));
    updateList();
};
// Initialiser la liste au chargement de la page
// updateList();