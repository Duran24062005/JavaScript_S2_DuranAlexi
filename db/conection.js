const mysql = require('mysql2');

const conection = mysql.createConnection({
    host: 'localhost',
    user: 'campus2023',
    password: 'campus2023',
    database: 'Victimas_Minas_Antipersonal'
});

// First Query
conection.query('SELECT * FROM Situacion_Victimas_Minas', (err, results, fields) => {
    if (err) {
        console.log('Error connection database: ' + err);
        return;
    }
    console.log('Database connected.');
    // results.forEach( e => {
        // console.log(`Results: + id: ${e.id} departamento: ${e.departamento}`);
    // });
    console.table(results);
});

conection.end();
