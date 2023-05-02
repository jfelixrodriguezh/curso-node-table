var colors = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear()

//console.log(argv)

console.log('Base:',argv.b)









//console.log(process.argv)

// const [, , arg3] = process.argv
//console.log(arg3)
// const [,base] = arg3.split('=')
// console.log(base)
//base = 8

crearArchivo(argv.b, argv.l, argv.h)
    .then( data => console.log(data, 'creado'.green))
    .catch( err => console.log(err))


