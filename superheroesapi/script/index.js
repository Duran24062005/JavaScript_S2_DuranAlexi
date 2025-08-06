const token_access = "e2cc7e19e3c8c79da98153ad21f672f8";
let token = "e2cc7e19e3c8c79da98153ad21f672f8";

function searchSuperHeroes() {
    const name = document.getElementById('inputName').value;
    const container = document.getElementById('containerHeroes');
    let actualHero = 'a-bomb';
    let hero = name ? name.trim().toLowerCase() : actualHero;
    if (name) {
        actualHero = "";
    }

    const xhr = new XMLHttpRequest();
    let url = `https://superheroapi.com/api.php/e2cc7e19e3c8c79da98153ad21f672f8/search/${hero}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data.results[0])
                data.results.forEach(e => {
                    container.innerHTML += `
                    <div class="card col" style="width: 18rem;">
                        <img src="${e.image.url}" class="card-img-top" alt="Foto del super heroe ${e.name}">
                        <div class="card-body">
                            <h5 class="card-title">${e.name}</h5>
                            <h5 class="text-bold">${e.biography['full-name']}</h5>
                            <p class="card-text">${e.work.occupation}</p>
                            <p class="card-text">${e.work.base}</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    `;
                    console.log(e);
                });
            } else {
                console.log('Loading...')
            };
            
        } catch (error) {
            console.log(`Error: ${error}`);
        };
    };
    xhr.send();
};

window.addEventListener('load', function () {
    searchSuperHeroes();
});