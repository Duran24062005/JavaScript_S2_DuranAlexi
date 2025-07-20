import db_prueba from "../db/datos.js";

export default function create_id() { 
    let datos = db_prueba;
    if (datos) { 
        return db_prueba[db_prueba.length - 1].id + 1;
    } else { 
        return null;
    }
}