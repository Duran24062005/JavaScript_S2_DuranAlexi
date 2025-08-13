import db from "./db/todo_db.js";
const cardContainer = document.getElementById('cardContainer');

function init(dB) {
    if (dB.length >= 1) {
        cardContainer.innerHTML = "";
        dB.forEach((e) => {
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
    let data = db.filter(e => normalizeText(e.name) == normalizeText(input));
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
            </div>
        `;
    });
}


function createToDo(name, message, category, items) {
    let id;
    if (db.length >= 1) {
        id = db[db.length - 1];
    } else {
        id = 1;
    }

    let newToDo = {
        "id": id,
        "name": name,
        "message": message,
        "category": category,
        "items": []
    }

    newToDo.items.push(items);

    let successfully = db.push(newToDo);
    if (successfully) {
        init();
        alert(`ToDo ${name} creado correctamente.`);
    } else {
        alert(`ToDo ${name} no fue creado correctamente.`);
    }
}


function deleteItem(id) {
    let elemento = db.filter((e) => e.id === parseInt(id));

    // alert(`Item ${id} deleted successfully`);
    console.log(db);
    console.log(elemento);
    db.splice(elemento[0].id, 1);
    console.log(db);
    init(db);
};

function update(id) {
    const input = document.getElementById('inputSearch').value;
    alert(`Item ${id} updated successfully`);
};

function finish(id) {
    alert(`Item ${id} finished successfully`);
};



document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    const data = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        message: document.getElementById("message").value,
        category: document.getElementById("category").value,
        items: document.getElementById("items").value.split(",").map(item => item.trim())
    };

    console.log(data);
    createToDo(dataname, data.message, data.category, data.items);
});




window.searchTodo = searchTodo;
window.createToDo = createToDo;
window.deleteItem = deleteItem;
window.update = update;
window.finish = finish;

window.addEventListener('load', function () {
    init(db);
});