const btnBack = document.getElementById('back');
const btnNext = document.getElementById('next');
let paginaActual = 1;

function loadCharacters(pagina) {
    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?page=${pagina}`;
    
    xhr.open("GET", url, true);
    
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const respuesta = JSON.parse(xhr.responseText);
          const personajes = respuesta.results;
          const info = respuesta.info;
    
          const contenedor = document.getElementById("personajes");
          contenedor.innerHTML = "";
    
          for (let i = 0; i < personajes.length; i++) {
            const personaje = personajes[i];
    
            const div = document.createElement("div");
            div.innerHTML = `
              <h3>${personaje.name}</h3>
              <img src="${personaje.image}" alt="${personaje.name}" width="150">
              <p>Especie: ${personaje.species}</p>
              <p>Estado: ${personaje.status}</p>
              <p>Genero: ${personaje.gender}</p>
              <p>Origen: ${personaje.origin.name}</p>
            `;
            contenedor.appendChild(div);
          }
          // Controlar botones
            document.getElementById("back").disabled = !info.prev;
            document.getElementById("next").disabled = !info.next;
        } else {
          console.error("Error al cargar la API", xhr.status);
        }
      }
    };
    
    xhr.send();
}

// Botones
document.getElementById("back").addEventListener("click", function () {
  if (paginaActual > 1) {
    paginaActual--;
    cargarPersonajes(paginaActual);
  }
});

document.getElementById("next").addEventListener("click", function () {
  paginaActual++;
  cargarPersonajes(paginaActual);
});

// Cargar primera página al iniciar
loadCharacters(paginaActual);