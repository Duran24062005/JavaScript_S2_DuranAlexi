import { 
    createIngredient,
    readIngredient,
    findIngredient,
    updateIngredient,
    deleteIngredient
} from "../services/ingredients_services.js";

export function CRUDIngredients() {

        let programCRUD = true;
        while (programCRUD) {
            let userInput = prompt(`
=============================================
== Bienvenido a La cafetería de Campuslands =
=============================================
    Elige una opción para continuar:
        1. Agregar un nuevo Igrediente.
        2. Ver todos los ingredientes.
        3. Ver un solo ingrediente.
        4. Actualizar ingrediente.
        5. Eliminaringrediente.
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
                programCRUD = false;
                break;
            
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        }
    };
    
};

export function CRUDChefs() {
    
}

export function CRUDHamburgers() {
    
}