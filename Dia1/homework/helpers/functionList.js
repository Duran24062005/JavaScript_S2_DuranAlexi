// Proyecto_Python_DuranAlexi
// Controller file: El archivo controler o controlador es un archivo creado para aislar la logica de funcionamiento del programa 
// con el objetivo de modularizarlo y que de está manera sea mucho más legible al igual que facil de modificar.

import db_prueba from "../db/datos.js";
import create_id from "./auxFunctions.js";

/*from datetime import datetime, timedelta
from tabulate import tabulate
from db.test_data import test_db
from functions.crud_persistent import *
from functions.auxfunctions import */

export function add_new_cost(category, description, monto) { 
    /*
        Esta función se encarga de aislar la logica de creación de un nuevo gasto, llamando las funciones para guardar en la base de datos
        Recibe tres parametros: categoria, descripción y monto
        Retorna True si se crea exitosamente el usuario, o False si no se logra.

        str(datetime.now().strftime('%Y-%m-%d')
    */
    let gasto = {
        "id": create_id(),
        "fecha": null,
        "hora": null,
        "categoria": category,
        "descripcion": description,
        "monto": parseInt(monto)
    };

    let new_list_costs = db_prueba.push(gasto);

    if (new_list_costs){ 
        return true;
    } else { 
        return false;
    };
};

export function list_costs() { 
    /*
        Esta función se encarga de enviar la lista de todos los costos.
        No recibe parametros.
        Retorna una lista de costos que hay en la base de satos, en caso no haber, retorna falso.
    */
    if (db_prueba){ 
        return db_prueba;
    } else {
        return false
    }
}

export function filter_by_category(category){
    /*
    Esta función fltra por categoria.
    Recibe el nombre de la categoria como argumento de tipo string.
     Retorna una lista de los elementos que pertenecen a esa categoria
    */
    let categorys = [];
    for (let i = 0; i < db_prueba.length; i++){ 
        if (db_prueba[i] && db_prueba[i].categoria) {
            if (category === db_prueba[i].categoria.toLocaleLowerCase()){
                categorys.push(db_prueba[i]);
            };
        };
    };

    if (categorys.length > 0) { 
        return categorys;
    } else { 
        return false;
    };
};

export function filter_by_range_date(por, _from, to,) { 
    /*
    Esta función está diseñada para filtrar por año, meses y dias.
    Recibe 3 parametros: 
            por: es un entero entregado como opción por el usuario.
            from: momento desde el que se quiere filtar.
            to: momento hasta el cual se quiere filtrar.
    Retorna una lista con los elementos filtrados.
    */
    let rngs = []
    let datos = db_prueba;
    if (por == 1) {
        // Filtrar por rango de años
        let desde = datetime.strptime(_from, '%Y-%m-%d').year
        let hasta = datetime.strptime(to, '%Y-%m-%d').year

        let dato = db_prueba;
        
        for (let index = 0; index < db_prueba.length; index++) {
            let anio = datetime.strptime(datos[i]['fecha'], '%Y-%m-%d').year
            if (desde <= anio <= hasta) { 
                rngs.append(datos[i]);
            }
        };

        if (rngs) {
            return rngs ;
        } else { 
            return false;
        }

    } else if (por == 2) {
        // Filtrar por rango de mesese
        desde = datetime.strptime(_from, '%Y-%m-%d').month
        hasta = datetime.strptime(to, '%Y-%m-%d').month

        for (let index = 0; index < db_prueba.length; index++) {
            month = datetime.strptime(datos[i]['fecha'], '%Y-%m-%d').month
            if (desde <= month <= hasta) { 
                rngs.append(datos[i]);
            };
        };

        if (rngs) { 
            return rngs;
        } else { 
            return false;
        }

    } else if (por == 3) { 
        // Filtar por rango de dias
        desde = datetime.strptime(_from, '%Y-%m-%d').day
        hasta = datetime.strptime(to, '%Y-%m-%d').day
        for (let index = 0; index < db_prueba.length; index++) { 
            day = datetime.strptime(datos[i]['fecha'], '%Y-%m-%d').day
            if (desde <= day <= hasta){ 
                rngs.push(datos[i]);
            }
        }
        if (rngs) { 
            return rngs  
        } else { 
            return False;
        }
    }
};
    
/*
def total_cost(opt, today):
    """
    Esta función suma el total de los gastos.
    Recibe una opción como parametro.
    Puede retornar la suma de todos los gastos:
        1. Del día.
        2. De la ultima semana.
        3. Del ultimo mes.
        4. De la semana actual.
    """
    costo = 0
    datos = abrirJSON()

    if (opt == 1):
        """Suma de los gastos del día"""
        for i in range(len(datos)):
            if (int(datetime.strptime(datos[i]['fecha'], '%Y-%m-%d').day) == today):
                costo += int(datos[i]['monto'])

        return costo

    elif (opt == 2):
        """Suma de los gastos del la ultima semana"""
        for i in range(len(datos)):
            fecha = int(datetime.strptime(datos[i]['fecha'], '%Y-%m-%d').day)
            if (fecha <= today-7 and fecha == today):
                costo += int(datos[i]['monto'])

        return costo

    elif (opt == 3):
        """Suma de los gastos del ultimo mes"""
        for i in range(len(datos)):
            if (int(datetime.strptime(datos[i]['fecha'], '%Y-%m-%d').day) <= today-30):
                costo += int(datos[i]['monto'])

        return costo

    elif (opt == 4):
        """Suma de los gastos de la semana actual"""
        for i in range(len(datos)):
            fecha = datetime.strptime(datos[i]['fecha'], '%Y-%m-%d')
            semana_actual = datetime.now().isocalendar()[1]
            semana_gasto = fecha.isocalendar()[1]
            if (semana_gasto == semana_actual):
                costo += int(datos[i]['monto'])

        return costo


def cost_report(opts):
    """
    Esta función genera reportes.
    Recice una opción como parametro.
    Retorno:
        1. Genera un reporte con los gastos del día actual.
        2. Genera un reporte con los gastos de la última semana.
        3. Genera un reporte con los gastos del último mes.
    """
    hoy = datetime.now()
    hoy_str = hoy.strftime("%Y-%m-%d")

    if opts == 1:  # Diario
        desde = hasta = hoy_str
        by = 3  # Filtrar por día
        titulo = f"REPORTE DIARIO - {hoy_str}"

    elif opts == 2:  # Semanal
        desde = (hoy - timedelta(days=6)).strftime("%Y-%m-%d")
        hasta = hoy_str
        by = 4
        titulo = f"REPORTE SEMANAL - Del {desde} al {hasta}"

    elif opts == 3:  # Mensual
        desde = hoy.replace(day=1).strftime("%Y-%m-%d")
        hasta = hoy_str
        by = 2  # Filtrar por mes
        titulo = f"REPORTE MENSUAL - {hoy.strftime('%B %Y')}"

    else:
        return "Opción de reporte no válida."

    # Obtener datos
    gastos = filter_by_range_date(by, desde, hasta)

    if not gastos:
        return f"{titulo}\nNo hay datos disponibles para este periodo.\n"

    # Generar tabla
    tabla = tabulate(gastos, headers='keys', tablefmt='rounded_grid')

    # Calcular total
    total = sum(float(gasto['monto']) for gasto in gastos)

    # Crear diccionario para guardar en JSON
    reporte_json = {
        "titulo": titulo,
        "desde": desde,
        "hasta": hasta,
        "gastos": gastos,
        "total_gastado": total
    }

    guardarJSONReports(reporte_json, reporte_json['titulo'])

    # Armar informe
    informe = f"{titulo}\n\n{tabla}\n\nTOTAL GASTADO: ${total:.2f}\n"
    return informe
  
*/

// Desarrollado por Alexi Durán Gómez : C.C-1.067.031.983