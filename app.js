/*

const fs = require('fs');

//declarar variable base
//comentar la base
//let base = 'jk';

/*
//EJERCICIO PARTE I 
//declarar variable data que va a ser la tabla de multiplicar
let data = ''


//arreglo que hace la multiplicacion de la tabla
for (let i = 1; i <= 10; i++) {
    //data que va a guardar en el archivo \n para que salgan por fila
    data += `${base} * ${i} = ${base * i }\n`;
}

//package que permite guardar archivo en el equipo
//guardar en una carpeta especifica
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    //incluir el nombre del archivo con template literal y la variable
    console.log(`El archivo tabla-${base}.txt ha sido creado`);
});
*/

/*
//para el ejercicio dos pasaremos toda la logica a un archivo multiplicar.js
//e importamos la funcion para usarla en app.js
const { crearArchivo } = require('./multiplicar/mutltiplicar');

// hay un modulo llamado process
//console.log(process.argv);

let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=')[1]


crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));
    */


//ejercicio con yargs
/*const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo } = require('./multiplicar/mutltiplicar');

let argv2 = process.argv;

console.log(argv.base);
console.log('Limite', argv.limite);*/
//console.log(argv2);



//comando listar 

const argv = require('./config/yargs').argv;


const { crearArchivo, listarTabla } = require('./multiplicar/mutltiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)

        //  console.log('listar');
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}