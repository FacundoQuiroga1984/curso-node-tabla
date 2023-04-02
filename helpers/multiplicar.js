const fs = require('fs');
const colors=require("colors")

const crearArchivo = async (base = 5, l, h) => {

    try {
        let salida = "";
        let consola="";

        for ( let  i= 1; i <= h; i++) {
            consola += `${base} ${"x".green} ${i} ${"=".green} ${base * i}\n`
            salida += `${base} x ${i} = ${base * i}\n`
            
        }
        if (l) {
            console.log('========================'.green);
            console.log('TABLA DEL: '.green, colors.blue(base));
            console.log('========================'.green);
           console.log(consola);
        };

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla del ${base} `
    }

    catch (err) {
        throw err
    }
}
module.exports = {
    crearArchivo
}