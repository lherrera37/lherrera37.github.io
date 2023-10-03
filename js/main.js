const loadPokemonButton = document.getElementById("loadPokemon");
const pokemonInfoDiv = document.getElementById("pokemonInfo");

loadPokemonButton.addEventListener("click", () => {
    const randomPokemonId = Math.floor(Math.random() * 151) + 1; // Obtén un número aleatorio entre 1 y 151 (Pokémon originales)

    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`)
        .then((response) => response.json())
        .then((data) => {
            const pokemonName = data.name;
            const pokemonImageUrl = data.sprites.front_default;

            const pokemonInfo = `
                <h2>${pokemonName}</h2>
                <img src="${pokemonImageUrl}" alt="${pokemonName}" />
            `;

            pokemonInfoDiv.innerHTML = pokemonInfo;
        })
        .catch((error) => {
            console.error("Error al cargar el Pokémon:", error);
        });
});


