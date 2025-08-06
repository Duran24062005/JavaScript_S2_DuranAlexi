const token_access = "e2cc7e19e3c8c79da98153ad21f672f8";
let token = "e2cc7e19e3c8c79da98153ad21f672f8";

function searchSuperHeroes() {
    const name = document.getElementById('inputName').value;
    const container = document.getElementById('containerHeroes');
    let actualHero = 'a-bomb';
    if (name) {
        actualHero = "";
    }
    let hero = name ? name.trim().toLowerCase() : actualHero;

    const xhr = new XMLHttpRequest();
    let url = `https://superheroapi.com/api.php/e2cc7e19e3c8c79da98153ad21f672f8/search/${hero}`;
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data.results[0])
                container.innerHTML = "";
                data.results.forEach(e => {
                    container.innerHTML += `
                    <div class="col-sm-6 col-md-4 col-lg-3">
                        <div class="card h-100">
                            <img src="${e.image.url}" class="card-img-top" alt="Foto del super heroe ${e.name}">
                            <div class="card-body">
                                <h5 class="card-title">${e.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${e.biography['full-name']}</h6>
                                <p class="card-text">${e.work.occupation}</p>
                                <p class="card-text"><small>${e.work.base}</small></p>
                            </div>
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