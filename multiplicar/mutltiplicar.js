const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i }\n`.blue);
    }
}


// en el cuerpo de la promesa toda la logica 
let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`.red);
            return;
        }
        let data = '';
        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i }\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);
            console.log(`tabla de ${ base}`.green);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}