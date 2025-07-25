import { 
    createIngredient,
    readIngredient,
    findIngredient,
    updateIngredient,
    deleteIngredient
} from "../services/ingredients_services.js";
import { 
    createChef,
    readChef,
    findChef,
    updateChef,
    deleteChef
} from "../services/chef_services.js";
import { 
    createBurguer,
    readBurguer,
    findBurguer,
    updateBurguer,
    deleteBurguer
} from "../services/burguer_services.js";

export function CRUDIngredients() {

    let ingredientCRUD = true;
    while (ingredientCRUD) {
        let userInput = prompt(`
=============================================
== Bienvenido a La cafetería de Campuslands =
=============================================
    Elige una opción para continuar:
        1. Agregar un nuevo Igrediente.
        2. Ver todos los ingredientes.
        3. Ver un solo ingrediente.
        4. Actualizar ingrediente.
        5. Eliminar ingrediente.
        6. Salir
==============================================`);
        switch (userInput) {
            case '1':
                createIngredient();
                break;
    
            case '2':
                readIngredient();
                break;
            
            case '3':
                findIngredient();
                break;
    
            case '4':
                updateIngredient();
                break;
    
            case '5':
                deleteIngredient();
                break;
    
            case '6':
                alert('Saliendo');
                ingredientCRUD = false;
                break;
            
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        }
    };
    
};

export function CRUDChefs() {

    let chefCRUD = true;
    while (chefCRUD) {
        let userInput = prompt(`
=============================================
== Bienvenido a La cafetería de Campuslands =
=============================================
    Elige una opción para continuar:
        1. Agregar un nuevo Chef.
        2. Ver todos los Chefs.
        3. Ver un solo Chef.
        4. Actualizar Chef.
        5. Eliminar Chef.
        6. Salir
==============================================`);
        switch (userInput) {
            case '1':
                createChef();
                break;
    
            case '2':
                readChef();
                break;
            
            case '3':
                findChef();
                break;
    
            case '4':
                updateChef();
                break;
    
            case '5':
                deleteChef();
                break;
    
            case '6':
                alert('Saliendo');
                chefCRUD = false;
                break;
            
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        }
    };
    
}

export function CRUDHamburgers() {
    let burguerCRUD = true;
    while (burguerCRUD) {
        let userInput = prompt(`
=============================================
== Bienvenido a La cafetería de Campuslands =
=============================================
    Elige una opción para continuar:
        1. Agregar una nueva Hamburguesa.
        2. Ver todas las Hamburguesa.
        3. Ver una sola Hamburguesa.
        4. Actualizar Hamburguesa.
        5. Eliminar Hamburguesa.
        6. Salir
==============================================`);
        switch (userInput) {
            case '1':
                createBurguer();
                break;
    
            case '2':
                readBurguer();
                break;
            
            case '3':
                findBurguer();
                break;
    
            case '4':
                updateBurguer();
                break;
    
            case '5':
                deleteBurguer();
                break;
    
            case '6':
                alert('Saliendo');
                burguerCRUD = false;
                break;
            
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        }
    };
    
}