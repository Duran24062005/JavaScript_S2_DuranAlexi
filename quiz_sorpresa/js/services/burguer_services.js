// Burguer Services File
import { burguers } from "../db/hamburguer_db.js";
import createId from "../helpers/create_id.js";

export const findBurguer = () => {
    // SEARCH BURGUER
    let searchBy = prompt(`
        Por favor, ingrese 'n' para filtrar por nombre
        o 'i' para filtrar por ID: 
    `);
    
    switch (searchBy.toLowerCase()) {
        case 'n':
            let nombre = prompt('Ingrese el nombre: ');
            let exist = burguers.filter(burguer => burguer.nombre.toLowerCase() === nombre.toLowerCase());
            if (!exist || exist.length === 0) {
                alert(`La hamburguesa ${nombre} no existe.`);
            } else {
                alert(`Hamburguesa: ${JSON.stringify(exist, null, 2)}`);
            }
            break;

        case 'i':
            let ID = prompt('Ingrese el ID: ');
            let exist_id = burguers.find(burguer => burguer.id == parseInt(ID));
            if (!exist_id) {
                alert(`La hamburguesa con ID ${ID} no existe.`);
            } else {
                alert(`Hamburguesa: ${JSON.stringify(exist_id, null, 2)}`);
            }
            break;

        default:
            alert(`Por favor ingresa una opción válida.`);
            break;
    }
};

export const createBurguer = () => {
    // CREATE NEW BURGUER
    alert(`
        ================================================
        === Bienvenido a La cafetería de Campuslands ===
        ================================================
            Estas en el apartado de agregar una Hamburguesa
        =================================================`);

    let nombre = prompt('Por favor, ingrese el nombre: ');
    let categoria = prompt('Por favor, ingrese la categoría: ');
    let ingredientes = prompt('Ingrese los ingredientes separados por coma: ').split(',').map(i => i.trim());
    let precio = parseFloat(prompt('Ingrese el precio: '));
    let chef = prompt('Ingrese el nombre del chef: ');

    let newBurguer = {
        "id": createId(2),
        "nombre": nombre,
        "categoria": categoria,
        "ingredientes": ingredientes,
        "precio": precio,
        "chef": chef
    };

    let alreadyExist = burguers.find(burguer => burguer.nombre.toLowerCase() === nombre.toLowerCase());

    if (alreadyExist !== undefined) {
        alert(`La hamburguesa ${nombre} ya existe`);
    } else {
        let success = burguers.push(newBurguer);

        if (!success) {
            alert(`No fue posible agregar la hamburguesa ${nombre}`);
        } else {
            alert(`La hamburguesa ${nombre} fue agregada exitosamente.`);
            alert(JSON.stringify(newBurguer, null, 2));
        }
    }
};

export const readBurguer = () => {
    // READ BURGUERS
    console.table(burguers);
    alert(JSON.stringify(burguers, null, 2));
};

export const updateBurguer = () => {
    // UPDATE BURGUER
    let id = prompt(`Ingrese el ID de la hamburguesa`);
    let index = burguers.findIndex(burguer => burguer.id == id);

    if (index === -1) {
        alert(`La hamburguesa con ID ${id} no existe.`);
    } else {
        let nombre = prompt('Ingrese el nuevo nombre: ');
        let categoria = prompt('Ingrese la nueva categoría: ');
        let ingredientes = prompt('Ingrese los ingredientes separados por coma: ').split(',').map(i => i.trim());
        let precio = parseFloat(prompt('Ingrese el nuevo precio: '));
        let chef = prompt('Ingrese el nuevo nombre del chef: ');

        burguers[index].nombre = nombre;
        burguers[index].categoria = categoria;
        burguers[index].ingredientes = ingredientes;
        burguers[index].precio = precio;
        burguers[index].chef = chef;

        alert(JSON.stringify(burguers[index], null, 2));
        alert(JSON.stringify(burguers, null, 2));
    }
};

export const deleteBurguer = () => {
    // DELETE BURGUER
    let id = prompt(`Ingrese el ID de la hamburguesa`);

    let index = burguers.findIndex(burguer => burguer.id == id);

    if (index === -1) {
        alert(`La hamburguesa con ID ${id} no existe`);
    } else {
        let deleted = burguers.splice(index, 1);

        if (deleted.length === 0) {
            alert(`La hamburguesa ${id} no pudo ser eliminada`);
        } else {
            alert(`Hamburguesa eliminada: ${JSON.stringify(deleted[0], null, 2)}`);
            alert(`Lista actualizada: ${JSON.stringify(burguers, null, 2)}`);
        }
    }
};


// Developed by Alexi Duran C.c: 1.067.031.983