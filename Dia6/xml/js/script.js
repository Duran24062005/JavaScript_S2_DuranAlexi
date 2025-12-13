// Consumo de API 
// mediante XMLHttpRequest

//Modularizar el consumo de la api
function buscarPersonaje() {
    const nombreUsar = document.getElementById("searchInput").value.trim();
    const resultados = document.getElementById("resultados");

    if (!nombreUsar) {
        resultados.innerHTML = "<p>Ingresa un nombre</p>";
        return;
    }

    const xhr = new XMLHttpRequest();
    const url = `https://rickandmortyapi.com/api/character?name=${nombreUsar}`;

    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 3) {
            resultados.innerHTML = "<p>Cargando...</p>";
        }

        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);

                resultados.innerHTML = "";

                data.results.forEach(personaje => {
                    resultados.innerHTML += `
                        <div>
                            <h3>${personaje.name}</h3>
                            <p>Status: ${personaje.status}</p>
                            <p>Especie: ${personaje.species}</p>
                            <img src="${personaje.image}" width="150" />
                        </div>
                        <hr>
                    `;
                });
            } else {
                resultados.innerHTML = "<p>Personaje no encontrado</p>";
            }
        }
    };

    xhr.send();
}
