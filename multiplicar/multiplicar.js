let fs = require('fs')
const color = require('colors')

let listarTabla = (base, limite) => {

    console.log('==================='.green);
    console.log(`===Tabla del ${base}====`.green);
    console.log('==================='.green);
    for (i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}\n`);
    }




}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {



        let dat = ''
        if (!Number(base)) {
            reject(`El dato ${base} no es un numero`)
        }
        for (let i = 1; i <= limite; i++) {
            dat += `${base} * ${i} = ${base * i}\n`
        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, dat, (err) => {

            if (err) reject(err)
            else resolve(color.green(`tabla-${base}-al-${limite}.txt`, 'ha sido creado'.white))

        })
    })
}

module.exports = {
    listarTabla,
    crearArchivo
}