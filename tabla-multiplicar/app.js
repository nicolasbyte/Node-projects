const argv = require('./config/yargs');

const { crearArchivo } = require('./helpers/multiplicar');


// const base = 5;

// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');
const { base , listar , hasta } = argv;
crearArchivo( base , listar , hasta )
            .then( nombreArchivo => console.log( nombreArchivo ) )
            .catch( err => console.log( err ) );


