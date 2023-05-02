const fs = require('fs');

const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        salida = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } X ${ i } = ${ base * i } \n`
        }

        if(listar) {
            console.log('===================================')
            console.log('  Tabla de Multiplicar del ',base)
            console.log('===================================')            
            console.log(salida)
        }
        
        fs.writeFileSync(`./tabla/tabla—${base}.txt`, salida)
        
        return `tabla—${base}.txt` 
               
    } catch (err) {
        throw err
    }



}

module.exports = {
    crearArchivo
}