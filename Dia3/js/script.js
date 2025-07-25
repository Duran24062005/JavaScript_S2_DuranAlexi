/*console.log('Inicio');

for (let i = 1; i < 6; i++) {
    setTimeout( () => {
        console.log(i);
    }, i*1000 );
};

console.log('Fin')*/



function procesoLento(text, callback) {
    for (let index = 1; index < 2; index++) {
        setTimeout( () => {
            console.log(text);
            callback();
        }, index*3000 );
    }
};


function holaMundo() {
    console.log('El proceso ha finalizado');
}

procesoLento('Ahí fue', holaMundo);