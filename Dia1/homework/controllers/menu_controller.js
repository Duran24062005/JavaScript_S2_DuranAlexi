// Proyecto_Python_DuranAlexi 
// Menu Controlador: El archivo controler o controlador es un archivo creado para aislar la logica de funcionamiento del programa 
// con el objetivo de modularizarlo y que de está manera sea mucho más legible al igual que facil de modificar.
// Archivo para modularizar y guardar como funciones las opciones del menu.

function register_new_cost(){ 
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

    let monto = input('- Monto del gasto: ' );
    let category = input('- Categoría (ej. comida, transporte, entretenimiento, otros): ');
    let description = input('- Descripción (opcional): ');

    let option_m = input("Ingrese ' S ' para guardar o ' C ' para cancelar: ");
    console.log('=============================================\n');
    console.log(`El monto del gasto fue de ${monto}`);
    console.log(`El gasto pertenece a la categoria: ${category}`);
    console.log(`Descripción: ${description}. \n`);

    if (option_m.lower() == 's') { 
        // Guardar el costo generado
        let success = add_new_cost(category, description, monto)
        if (success) { 
            console.log('¡¡Costo guardado exitosamente!!\n')
        } else { 
            console.log('No fue posible.')
        }

    } else if (option_m.lower() == 'c') { 
        // No guardar el costo generado
        console.log('Costo no guardado!!\n')

    } else { 
        console.log('¡Por favor, elija una opción valida!\n');
    }
}

/* def list_all_cost():
    """
        Esta funcion se encarga de mostrar la parte del menú para mostrar todos los gasto registrados en el sistema.
        No recibe parametros.
        Dependiendo de la opción entregado porel usuario retora o no retorna nada.
            1. Muestra por pantalla una lista de todos los gastos.
            2. Muestra por pantalla una lista de los gastos pertenecientes a una categoria.
            3. Muestra por pantalla una lista de los gastos filtrados por fechaa: año, mes o día.
    """
    
    print('=============================================')
    print('                Listar Gastos                ')
    print('=============================================')
    print('Seleccione una opción para filtrar los gastos:')

    print('1. Ver todos los gastos.')
    print('2. Filtrar por categoría.')
    print('3. Filtrar por rango de fechas.')
    print('4. Regresar al menú principal.')
    print('=============================================')
    option_l = int(input('> '))

    if (option_l == 1):
        """Ver todos los gastos actuales"""
        print('\nEstos son todos los gastos:\n')
        if(list_costs()):
            print(tabulate(list_costs(), headers='keys', tablefmt='rounded_grid'))
        else:
            print('No hay costos registrados')

    elif (option_l == 2):
        """filtro por categorias"""
        print('\nPor favor mensione la categoria: ')
        cate = input('> ')
        header = ["fecha", "categoria", "descripcion", "monto"]
        if(filter_by_category(cate)):
            print(' ')
            print(tabulate(filter_by_category(cate), headers = "keys", tablefmt='rounded_grid'))
            print('\nFiltro por categoria exitoso.\n')
        
        else:
            print('No hay datos.\n')

    elif (option_l == 3):
        """filtro por rango de fechas"""
        print('\nEl formato es AA-MM-DD')
        desde = input('Desde: ')
        print('\nEl formato es AA-MM-DD')
        hasta = input('Hasta: ')
        print('\nElije para filtrar:')
        print('\t1. Por año.')
        print('\t2. Por mes.')
        print('\t3. Por día.')
        by = int(input('> '))
        ranges = filter_by_range_date(by, desde, hasta)
        if ranges:
            print(tabulate(ranges, headers='keys', tablefmt='rounded_grid'))
            print('Filtro por rango de fehcas exitoso.')

        else:
            print('No hay datos.\n')

    elif (option_l == 4):
        """Volver al menu principal"""
        print('\n')
        return True

    
def sum_all_cost():
    """
        Esta funcion se encarga  de mostrar el resultado de la suma de todos los gastos registrados en el sistema.
        No resibe parametros.
        No tiene retorno.
        1. Calcula y muestra el total de gastos del día actual.
        2. Calcula y muestra el total de gastos de los últimos siete días.
        3. Calcula y muestra el total de gastos del último mes.
    """
    print('=============================================')
    print('        Calcular el total de gastos          ')
    print('=============================================')
    print('Seleccione el período de cálculo:\n')

    print('1. Calcular total diario.')
    print('2. Calcular el total semanal.')
    print('3. Calcular el total mensual.')
    print('4. Regresar al menú principal.')
    print('=============================================')
    option_s = int(input('> '))
    hoy = int(datetime.now().strftime('%d'))

    if (option_s == 1):
        """Calcula y muestra el total de gastos del día actual."""
        mes = int(datetime.now().strftime('%m'))
        print(f'\nGasto total del del dia de hoy {hoy} del mes {mes}: {total_cost(option_s, hoy)}')

    elif (option_s == 2):
        """Calcula y muestra el total de gastos de los últimos siete días."""
        print(total_cost(option_s, hoy))

    elif (option_s == 3):
        """Calcula y muestra el total de gastos del último mes."""
        print(total_cost(option_s, hoy))

    elif (option_s == 4):
        """Volver al menú de incio."""
        print('\n')
        return True


def generate_cost_report():
    """
        Esta funcion se encarga mostrar la parte del menú para mostrar el screen para generar un informe de gastos.
        No recibe parametros.
        No tiene retorno.
        Puede mostrar por pantalla:
            1. Calcula y muestra el total de gastos del día actual.
            2. Calcula y muestra el total de gastos de los últimos siete días.
            3. Calcula y muestra el total de gastos del último mes.
    """
    print('=============================================')
    print('         Generar Informe de Gastos           ')
    print('=============================================')
    print('Seleccione el tipo de informe:\n')

    print('1. Reporte diario')
    print('2. Informe semanal')
    print('3. Informe mensual')
    print('4. Regresar al menú principal')
    print('=============================================')
    option_p = int(input('> '))

    if (option_p == 1):
        print(cost_report(option_p))

    elif (option_p == 2):
        print(cost_report(option_p))

    elif (option_p == 3):
        print(cost_report(option_p))

    elif (option_p == 4):
        print('\n')
        return True


def finish_program():
    /*
        Esta función permite terminar le programa.
        No recibe parametros.
        No retorna nada.
        Detiene el programa.
    """
    dato = input('\n¿Quieres salir del programa ? (S/N): ')

    if (dato.lower() == 's'):
        print('\nGracias por utilizar el software. Bye!!')
        return False

    elif (dato.lower() == 'n'):
        print('\nEsta bien!!\n')
        return True
            
    else:
        print('Por favor, elija una opción valida!!')


# Desarrollado por Alexi Durán Gómez : C.C-1.067.031.983