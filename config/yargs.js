const argv = require('yargs')
    .command('listar', 'Esta es una descripcion de lisar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Ingresa la base y el limite', {
        base: {
            alias: 'b',
            demand: true
        },
        limite: {
            demand: true,
            alias: 'l'
        }
    })
    .help()
    .argv

module.exports = {
    argv
}