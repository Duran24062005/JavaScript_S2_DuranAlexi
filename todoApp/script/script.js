import db from "./db/todo_db.js";
const cardContainer = document.getElementById('cardContainer');

function init() {
    if (db != 1) {
        cardContainer.innerHTML = "";
        db.forEach((e) => {
            cardContainer.innerHTML += `
            <div class="card w-80 mb-3">
                <div class="card-body container">
                    <div class="row gap-3">
                        <h5 class="card-title">${e.name}</h5>
                        <div class="col">
                            <p class="card-text"><strong>Mensaje</strong> ${e.message}</p>
                            <p class="card-text"><strong>Categoria:</strong> ${e.category}</p>
                            <p class="card-text"><strong>Items:</strong> ${e.items.join(", ")}</p>
                        </div>
                        <div class="col text-center mb-4">
                            <button onclick="deleteItem(${e.id})" class="btn btn-danger">eliminar</button>
                            <button onclick="update(${e.id})" class="btn btn-warning">actualizar</button>
                            <button onclick="finish(${e.id})" class="btn btn-info">Tachar</button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        } );
    } else {
        cardContainer.innerHTML = '<p class="text-danger">No hay datos...</p>';
    }
};

function normalizeText(text) {
    return text.normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .trim();
}

function searchTodo() {
    const input = document.getElementById('inputSearch').value;
    let data = db.filter(e => normalizeText(e.name) == input.trim().toLowerCase() );
    console.log(data)
    cardContainer.innerHTML = "";
    data.forEach((e) => {
        cardContainer.innerHTML += `
            <div class="card w-80 mb-3">
                <div class="card-body container">
                    <div class="row gap-3">
                        <h5 class="card-title">${e.name}</h5>
                        <div class="col">
                            <p class="card-text"><strong>Mensaje</strong> ${e.message}</p>
                            <p class="card-text"><strong>Categoria:</strong> ${e.category}</p>
                            <p class="card-text"><strong>Items:</strong> ${e.items.join(", ")}</p>
                        </div>
                        <div class="col text-center mb-4">
                            <button onclick="deleteItem(${e.id})" class="btn btn-danger">eliminar</button>
                            <button onclick="update(${e.id})" class="btn btn-warning">actualizar</button>
                            <button onclick="finish(${e.id})" class="btn btn-info">Tachar</button>
                        </div>
                    </div>
                </div>
            </div>`
            ;
    });
}


function deleteItem(id) {
    alert(`Item ${id} deleted successfully`);
};

function update(id) {
    const input = document.getElementById('inputSearch').value;
    alert(`Item ${id} updated successfully`);
};

function finish(id) {
    alert(`Item ${id} finished successfully`);
};


window.searchTodo = searchTodo;
window.deleteItem = deleteItem;
window.update = update;
window.finish = finish;

window.addEventListener('load', function () {
    init()
});