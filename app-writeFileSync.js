const fs = require('fs');


base = 3
salida = ''
for (let i = 1; i <= 10; i++) {
    //console.log(`${ base } X ${ i } = ${ base * i }`)
    salida += `${ base } X ${ i } = ${ base * i } \n`
}

console.log(salida)

fs.writeFileSync(`tabla—${base}.txt`, salida)

console.log(`tabla—${base}.txt`)
