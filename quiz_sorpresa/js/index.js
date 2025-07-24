// CRUD - Simple e JavaScript
import { 
    CRUDIngredients,
    CRUDChefs,
    CRUDHamburgers
} from "./controllers/menu_controlle.js";
import { consultController } from "./controllers/consultas_controller.js";

function main() {
    /* 
        Funcion de entrada a el programa
    */

    let program = true;
    alert(`=============================================
    == Bienvenido a La cafetería de Campuslands =
    =============================================`);

    while (program) {
        let userData = prompt(`
    =============================================
    == Bienvenido a La cafetería de Campuslands =
    =============================================
        Elige una opción para continuar:
            1. CRUD Ingredientes.
            2. CRUD Chefs.
            3. CRUD Hamburguesas.
            4. Realizar consultas.
            5. Salir
    ==============================================
        `);
        switch (userData) {
            case '1':
                CRUDIngredients();
                break;

            case '2':
                CRUDChefs();
                break;

            case '3':
                CRUDHamburgers();
                break;

            case '4':
                consultController();
                break;

            case '5':
                alert('Saliendo');
                program = false;
                break;
        
            default:
                alert(`Por favor ingresa una opción valida.`);
                break;
        }
    };
};

main();