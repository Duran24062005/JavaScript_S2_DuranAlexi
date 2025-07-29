// Consumo de API's
// Con XMLHttpRequest();


// odularizar consumo de la api
function buscarPersonajes() {
    const xhttp = new XMLHttpRequest();  // Importación
    const url = `https://rickandmortyapi.com/api/character?name=Morty`;
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            try {
                const data = JSON.parse(xhttp.responseText);
                console.log(data.results);
                const name = document.getElementById('name');
                for (let index = 0; index < data.results.length; index++) {
                    name.appendChild = `<div>
                        <img src="${data.results[index].image}" alt="${data.results[index].name}">
                        <p>Nombre: ${data.results[index].name}</p>
                        <p>Status: ${data.results[index].status}</p>
                    </div>`;
                };
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('Sin datos');
        };
    };
    xhttp.send();
};

buscarPersonajes();


