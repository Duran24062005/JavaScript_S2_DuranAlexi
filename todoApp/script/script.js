import db from "./db/todo_db";

function deleteItem(id) {
    alert(`Item ${id} deleted successfully`);
};

function update(id) {
    alert(`Item ${id} updated successfully`);
};

function finish(id) {
    alert(`Item ${id} finished successfully`);
};


function init() {
    const input = document.getElementById('inputSearch').value;
    const cardContainer = document.getElementById('cardContainer');
};


window.addEventListener('load', function () {
    init()
});