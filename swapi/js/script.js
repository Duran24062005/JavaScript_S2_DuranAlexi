
function showPeoples() {
    const xhr = new XMLHttpRequest()
    const url = `https://swapi.py4e.com/api/people/`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data.results);
                const mainBox = document.getElementById('main-box');
                mainBox.innerHTML = "";

                for (let index = 0; index < data.results.length; index++) {
                    const div = document.createElement("div");
                    div.innerHTML = `
                    <p>Name: <span>${data.results[index].name}</span></p>
                    <p>Height: <span>${data.results[index].height}</span></p>
                    <p>Mass: <span>${data.results[index].mass}</span></p>
                    <p>Hair color: <span>${data.results[index].hair_color}</span></p>
                    <p>Eye color: <span>${data.results[index].eye_color}</span></p>
                    <p>Skin color: <span>${data.results[index].skin_color}</span></p>
                    <p>Home World: <span>${data.results[index].homeworld}</span></p>
                    <p>Films: <span>${data.results[index].films}</span></p>
                    `;
                    mainBox.appendChild(div);
                }
            } else {
                let loading = document.createElement("p");
                loading.innerText = 'Cargando...'
            };
            
        } catch (error) {
            console.log('Error inesperado: ' + error)
        }
    };
    xhr.send();
};

window.addEventListener('load', function () {
    showPeoples();
});