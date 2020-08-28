const color = require('colors')
const argv = require('./config/yargs').argv

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')



let comandos = argv._[0]
switch (comandos) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(datos => { console.log(datos) })
            .catch(err => { console.log(err) })
    default:
        console.log('No existe el comando');
}