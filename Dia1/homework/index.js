// Proyecto_Python_DuranAlexi
// Main, entrada del proyecto
import { 
    register_new_cost, 
    list_all_cost, 
    sum_all_cost,
    generate_cost_report,
    finish_program
} from './controllers/menu_controller.js';

// Hacer actualización en el archivo README.md y agregar un nuevo registro de documentación
// Link: https://pypi.org/project/tabulate/
    /*Esta es la entrada principal del programa.*/
console.log(" _____________________________________________")
console.log("|=============================================|")
console.log("|========= Welcome to my Software ============|")
console.log("|=============== By Alexi Dg =================|")
console.log("|======= Proyecto Python S2 Campuslands ======|")
console.log("|=============================================|")
console.log(" --------------------------------------------- \n \n")

let program = true;

while (program == true){
    // Menu progrogram
    console.log('=============================================');
    console.log('       Simulador de Gasto Diario             ');
    console.log('=============================================');
    console.log('Seleccione una opción: \n');

    console.log('1. Registrar nuevo gasto');
    console.log('2. Listar gastos');
    console.log('3. Calcular el total de gastos');
    console.log('4. Generar informe de gastos');
    console.log('5. Salir\n');
    console.log('=============================================');
    let option = parseInt(prompt('> '));
    console.log('\n');

    if (option == 1) { 
        // Registrar un nuevo costo
        register_new_cost();
        continue ;
        // La sentencia *continue* se utiliza omitir esta iteración e iniciar de nuevo en otra iteración.
        // Permitiendo así que se controle mejor el flujo y evite que en cierto caso se 
        // termine ejecutando hasta el else, devolviendo por pantalla lo programado.

    } else if (option == 2) {
        // Ver la lista de todos los costos
        list_all_cost();
        continue;

    } else if (option == 3) { 
        // Ver la suma del valor de todos los costos
        sum_all_cost();
        continue;

    } else if (option == 4){ 
        // Generar un reporte con los costos
        generate_cost_report();
        continue;


    } else if (option == 5){
        // Terminar la ejecución del programa
        let program = finish_program();
        if (!program) {
            break;
        } else {
            continue;
        };
        // La sentencia *break* finaliza el ciclo al ser llamada.
              
    } else {
        // Se ejecuta si el usuario no introduce una entrada esperada
        print('Por favor, elija una opción valida!!')
        continue
    }
}

// Desarrollado por Alexi Durán Gómez : C.C-1.067.031.983