const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de Multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Es el factor a Multiplicar'
    })    
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra en consola la tabla de multiplicar'
    })                    
    .check( (argv, options) => {
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un numero'
        }
        return true
    })
    .argv;

module.exports = argv;