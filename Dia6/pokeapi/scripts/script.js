let personaje = 1;
const userData = document.getElementById('searchPokemon').value.trim().toLowerCase();

function buscarPersonajes(nameId) {
    console.log(!userData ? 'Sin datos' : 'Hay datos');

    let pokemon = userData ? userData : nameId || personaje;

    const xhr = new XMLHttpRequest();
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        const pokeInfo = document.getElementById('pokemonInfo');
        const changeP = document.getElementById('change');

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                pokeInfo.innerHTML = `
                    <img src="${data.sprites.other.showdown.front_default ? data.sprites.other.showdown.front_default : './media/loadergif.gif'}" alt="Gif de ${data.name}" class="pokemon-img">
                    <p id="change"></p>
                    <div class="pokemon-info">
                        <h2 class="poke-num">${data.id} -</h2>
                        <h2 class="poke-name">${data.name}</h2>
                    </div>`;

                changeP.innerHTML = ``;
                personaje = data.id; // actualizar el personaje actual si viene por nombre
                document.getElementById('searchPokemon').value = ""; // limpiar input
            } else {
                pokeInfo.innerHTML = ``;
                changeP.innerText = "¡Pokémon no encontrado!";
                console.warn('Error al obtener el Pokémon.');
            }
        } else {
            changeP.innerText = "Cargando...";
        }
    };
    xhr.send();
}

window.document.addEventListener('DOMContentLoaded', function () {
    buscarPersonajes();
});

function Next() {
    personaje++;
    buscarPersonajes(personaje);
}

function Back() {
    if (personaje > 1) {
        personaje--;
        buscarPersonajes(personaje);
    }
}