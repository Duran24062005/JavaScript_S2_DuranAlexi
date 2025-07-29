const xhr = new XMLHttpRequest();
const url = "https://rickandmortyapi.com/api/character";

xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      const respuesta = JSON.parse(xhr.responseText);
      const personajes = respuesta.results;

      const contenedor = document.getElementById("personajes");

      for (let i = 0; i < personajes.length; i++) {
        const personaje = personajes[i];

        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${personaje.name}</h3>
          <img src="${personaje.image}" alt="${personaje.name}" width="150">
          <p>Especie: ${personaje.species}</p>
          <p>Estado: ${personaje.status}</p>
        `;
        contenedor.appendChild(div);
      }
    } else {
      console.error("Error al cargar la API", xhr.status);
    }
  }
};

xhr.send();


