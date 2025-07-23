// Ingredients Services File
import { ingredients } from "../db/hamburguer_db.js";
import createId from "../helpers/create_id.js";

export const findIngredient = () => {

    let searchBy = prompt(`
    Por favor, ingrese 'n' para filtrar por nombre
    o 'i' para filtrar por ID: 
    `);

    switch (searchBy.toLocaleLowerCase()) {
        case 'n':
            let nombre  = prompt('Ingrese el nombre: ');
            let exist = ingredients.filter( ingredient => ingredient.nombre.toLocaleLowerCase() == nombre.toLocaleLowerCase());
            if (!exist) {
                alert(`El ingrediente ${nombre} no existe.`);
            } else {
                alert(`Ingrediente: ${JSON.stringify(exist, null, 2)}`)
            }
            break;

        case 'i':
            let ID  = prompt('Ingrese el ID: ');
            let exist_id = ingredients.find( ingredient => ingredient.id == parseInt(ID));
            if (!exist_id) {
                alert(`El ingrediente ${nombre} no existe.`);
            } else {
                alert(`Ingrediente: ${JSON.stringify(exist_id, null, 2)}`)
            }
            break;
    
        default:
            alert(`Por favor ingresa una opción valida.`);
            break;
    };
};

export const createIngredient = () => {
    /* CREATE INGREDIENT */
    alert(`
    ================================================
    === Bienvenido a La cafetería de Campuslands ===
    ================================================
      Estas en el apartado de agregar un ingrediente
    =================================================`)
    let nameIng = prompt('Por favor, ingrese el nombre: ');
    let description = prompt('Por favor, ingrese la descripción: ');
    let price = prompt('Por favor, ingrese el precio: ');
    let stock = prompt('Por favor, ingrese el stock: ');

    let newProduct = {
        "id": createId(1),
        "nombre": nameIng,
        "descripcion": description,
        "precio": parseFloat(price),
        "stock": parseInt(stock)
    };

    let already_exist = ingredients.find(ingredient  => ingredient.nombre.toLocaleLowerCase() === nameIng.toLocaleLowerCase());

    if (!already_exist == undefined) {
        alert(`El ingrediente ${nameIng} ya esxiste`);
    } else {
        let success = ingredients.push(newProduct);
    
        if (!success) {
            alert(`No fue posibole agregar el ingrediente ${nameIng}`);
        } else {
            alert(`El ingrediente ${nameIng} fue agregado exitosamente.`);
        };
    };
};

export const readIngredient = () => {
    /* READ ALL INGREDIENTS */
    console.table(ingredients);
    alert(JSON.stringify(ingredients, null, 2));
    
};

export const updateIngredient = () => {
    /* UDATE INGREDIENT */
    let id = prompt(`Ingrese el id del elementos`);
    let ingredientes = ingredients.findIndex(  ingredient => ingredient.id == id );
    if (!ingredientes == undefined) {
        alert(`El ingrediente con ID ${id} no esxiste`);
    } else {
        let nameIng = prompt('Por favor, ingrese el nombre: ');
        let description = prompt('Por favor, ingrese la descripción: ');
        let price = prompt('Por favor, ingrese el precio: ');
        let stock = prompt('Por favor, ingrese el stock: ');

        let updated = {
            "id": createId(1),
            "nombre": nameIng,
            "descripcion": description,
            "precio": parseFloat(price),
            "stock": parseInt(stock)
        };
        ingredients[id].nombre = nameIng;
        ingredients[id].descripcion = description;
        ingredients[id].precio = parseFloat(price);
        ingredients[id].nombre = parseInt(stock);

        alert(JSON.stringify(ingredients[ingredientes], null, 2));
        alert(JSON.stringify(ingredients, null, 2));
    };
};

export const deleteIngredient = () => {
    
};

// Developed by Alexi Duran C.c: 1.067.031.983