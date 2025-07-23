// Proyecto_Python_DuranAlexi 
// Menu Controlador: El archivo controler o controlador es un archivo creado para aislar la logica de funcionamiento del programa 
// con el objetivo de modularizarlo y que de está manera sea mucho más legible al igual que facil de modificar.
// Archivo para modularizar y guardar como funciones las opciones del menu.
import { 
    add_new_cost, 
    list_costs, 
    filter_by_category 
} from "../helpers/functionList.js";

export function register_new_cost(){ 
    /*
        Esta funcion se encarga de mostrar la parte del menú para registra un nuevo gasto.
        No recibe parametros.
        Muestra por pantalla el mesanje ¡¡Costo guardado exitosamente!! si fue creado correctamente.
        O el mensaje Costo no guardado!! si no lo fue.
        Y ¡Por favor, elija una opción valida! en el dado caso.
    */
    console.log('=============================================');
    console.log('         Registrador Nuevo Gasto             ');
    console.log('=============================================');
    console.log('Ingrese la información del gasto: \n');

    let monto = prompt('- Monto del gasto: ' );
    let category = prompt('- Categoría (ej. comida, transporte, entretenimiento, otros): ');
    let description = prompt('- Descripción (opcional): ');

    let option_m = prompt("Ingrese ' S ' para guardar o ' C ' para cancelar: ");
    console.log('=============================================\n');
    console.log(`El monto del gasto fue de ${monto}`);
    console.log(`El gasto pertenece a la categoria: ${category}`);
    console.log(`Descripción: ${description}. \n`);

    if (option_m.toLocaleLowerCase() == 's') { 
        // Guardar el costo generado
        let success = add_new_cost(category, description, monto);
        if (success) { 
            console.log('¡¡Costo guardado exitosamente!!\n');
        } else { 
            console.log('No fue posible.');
        }

    } else if (option_m.toLocaleLowerCase() == 'c') { 
        // No guardar el costo generado
        console.log('Costo no guardado!!\n');

    } else { 
        console.log('¡Por favor, elija una opción valida!\n');
    }
}

export function list_all_cost() { 
    /*
        Esta funcion se encarga de mostrar la parte del menú para mostrar todos los gasto registrados en el sistema.
        No recibe parametros.
        Dependiendo de la opción entregado porel usuario retora o no retorna nada.
            1. Muestra por pantalla una lista de todos los gastos.
            2. Muestra por pantalla una lista de los gastos pertenecientes a una categoria.
            3. Muestra por pantalla una lista de los gastos filtrados por fechaa: año, mes o día.
    */
    
    console.log('=============================================');
    console.log('                Listar Gastos                ');
    console.log('=============================================');
    console.log('Seleccione una opción para filtrar los gastos:');

    console.log('1. Ver todos los gastos.');
    console.log('2. Filtrar por categoría.');
    console.log('3. Filtrar por rango de fechas.');
    console.log('4. Regresar al menú principal.');
    console.log('=============================================');
    let option_l = parseInt(prompt('> '));

    if (option_l == 1) { 
        // Ver todos los gastos actuales
        console.log('\nEstos son todos los gastos:\n')
        if(list_costs()) {
            console.table(list_costs());
        } else {
            console.log('No hay costos registrados');
        }

    } else if (option_l == 2) { 
        // filtro por categorias
        let cate = prompt('Por favor mensione la categoria: > ');
        if(filter_by_category(cate.toLocaleLowerCase())) {
            console.table(filter_by_category(cate.toLocaleLowerCase()));
            console.log('\nFiltro por categoria exitoso.\n');
        
        } else { 
            console.log('No hay datos.\n');
        }

    } else if (option_l == 3) { 
        // filtro por rango de fechas
        console.log('\nEl formato es AA-MM-DD')
        let desde = input('Desde: ');
        console.log('\nEl formato es AA-MM-DD');
        let hasta = input('Hasta: ');
        console.log('\nElije para filtrar:');
        console.log('\t1. Por año.');
        console.log('\t2. Por mes.');
        console.log('\t3. Por día.');
        let by = parseInt(input('> '));
        let ranges = filter_by_range_date(by, desde, hasta);
        if (ranges) {
            console.log(tabulate(ranges, headers='keys', tablefmt='rounded_grid'));
            console.log('Filtro por rango de fehcas exitoso.');

        } else { 
            console.log('No hay datos.\n');
        };

    } else if (option_l == 4) { 
        // Volver al menu principal
        console.log('\n');
        return true;
    };
};

export function sum_all_cost(){ 
    /*
        Esta funcion se encarga  de mostrar el resultado de la suma de todos los gastos registrados en el sistema.
        No resibe parametros.
        No tiene retorno.
        1. Calcula y muestra el total de gastos del día actual.
        2. Calcula y muestra el total de gastos de los últimos siete días.
        3. Calcula y muestra el total de gastos del último mes.
    */
    console.log('=============================================');
    console.log('        Calcular el total de gastos          ');
    console.log('=============================================');
    console.log('Seleccione el período de cálculo:\n');

    console.log('1. Calcular total diario.');
    console.log('2. Calcular el total semanal.');
    console.log('3. Calcular el total mensual.');
    console.log('4. Regresar al menú principal.');
    console.log('=============================================');
    let option_s = parseInt(prompt('> '));
    let hoy = int(datetime.now().strftime('%d'));

    if (option_s == 1) {
        // Calcula y muestra el total de gastos del día actual."""
        let mes = int(datetime.now().strftime('%m'));
        console.log(`\nGasto total del del dia de hoy ${hoy} del mes ${mes}: ${total_cost(option_s, hoy)}`);

    } else if (option_s == 2) { 
        // Calcula y muestra el total de gastos de los últimos siete días."""
        console.log(total_cost(option_s, hoy));

    } else if (option_s == 3) { 
        // Calcula y muestra el total de gastos del último mes."""
        console.log(total_cost(option_s, hoy));

    } else if (option_s == 4) { 
        // Volver al menú de incio."""
        console.log('\n');
        return true;
    }
}

export function generate_cost_report() { 
    /*
        Esta funcion se encarga mostrar la parte del menú para mostrar el screen para generar un informe de gastos.
        No recibe parametros.
        No tiene retorno.
        Puede mostrar por pantalla:
            1. Calcula y muestra el total de gastos del día actual.
            2. Calcula y muestra el total de gastos de los últimos siete días.
            3. Calcula y muestra el total de gastos del último mes.
    */
    console.log('=============================================');
    console.log('         Generar Informe de Gastos           ');
    console.log('=============================================');
    console.log('Seleccione el tipo de informe:\n');

    console.log('1. Reporte diario');
    console.log('2. Informe semanal');
    console.log('3. Informe mensual');
    console.log('4. Regresar al menú principal');
    console.log('=============================================');
    option_p = parseInt(prompt('> '))

    if (option_p == 1) { 
        console.log(cost_report(option_p));

    } else if (option_p == 2) { 
        console.log(cost_report(option_p));

    } else if (option_p == 3) { 
        console.log(cost_report(option_p));

    } else if (option_p == 4) { 
        console.log('\n');
        return true;
    } 
};

export function finish_program() {

     /*
        Esta función permite terminar le programa.
        No recibe parametros.
        No retorna nada.
        Detiene el programa.
    */
    let dato = prompt('\n¿Quieres salir del programa ? (S/N): ').toLocaleLowerCase();

    if (dato.toLocaleLowerCase() == 's') { 
        console.log('\nGracias por utilizar el software. Bye!!');
        return false;

    } else if (dato.toLocaleLowerCase() == 'n') { 
        console.log('\nEsta bien!!\n');
        return true;
            
    } else { 
        console.log('Por favor, elija una opción valida!!');
    }
}

// Desarrollado por Alexi Durán Gómez : C.C-1.067.031.983