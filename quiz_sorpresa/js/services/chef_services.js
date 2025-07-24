// Chefs Services File
import { chefs } from "../db/hamburguer_db.js";
import createId from "../helpers/create_id.js";

export const findChef = () => {
    // SEARCH CHEF
    let searchBy = prompt(`
        Por favor, ingrese 'n' para filtrar por nombre
        o 'i' para filtrar por ID: 
        `);
    
        switch (searchBy.toLocaleLowerCase()) {
            case 'n':
                let nombre  = prompt('Ingrese el nombre: ');
                let exist = chefs.filter( chef => chef.nombre.toLocaleLowerCase() == nombre.toLocaleLowerCase());
                if (!exist) {
                    alert(`El ingrediente ${nombre} no existe.`);
                } else {
                    alert(`Ingrediente: ${JSON.stringify(exist, null, 2)}`)
                }
                break;
    
            case 'i':
                let ID  = prompt('Ingrese el ID: ');
                let exist_id = chefs.find( chef => chef.id == parseInt(ID));
                if (!exist_id) {
                    alert(`El ingrediente ${ID} no existe.`);
                } else {
                    alert(`Ingrediente: ${JSON.stringify(exist_id, null, 2)}`)
                }
                break;
        
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        };
};

export const createChef = () => {
    // CREATE NEW CHEF
};

export const readChef = () => {
    // READE CHEFS
};

export const updateChef = () => {
    // UPDATE CHEF
};

export const deleteChef = () => {
    // DELETE CHEF
};
// Developed by Alexi Duran C.c: 1.067.031.983