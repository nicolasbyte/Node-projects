const empleados = [
    {
        id   : 1,
        name : 'Pepa'
    },
    {
        id   : 2,
        name : 'Pepita'
    },
    {
        id   : 3,
        name : 'Pepito'
    }, 
];
const salarios = [
    {
        id    : 1,
        sales : 1600000
    },
    {
        id    : 2,
        sales : 230000
    },

];
/**
 * Retrieves the name of an employee based on their ID.
 * @param {number} id - The ID of the employee.
 * @returns {Promise<string>} A promise that resolves to the name of the employee if found, or rejects with an error message if the employee does not exist.
 */
const getEmpleado = ( id ) => {

    
    return new Promise( (resolve, reject) => {

        const empleado = empleados.find( e  => e.id == id )?.name;
        
        ( empleado ) 
                ? resolve ( empleado ) 
                : reject( `Empleado con id ${id} no existe` );
        
    });


};

const getSalario = ( id ) => {

    return new Promise( (resolve, reject) => { 

        const salario = salarios.find( s => s.id == id )?.sales;

        ( salario )
               ? resolve( salario ) 
               : reject( `No existe salario para el id ${id}` );
    });

};

const getInfoUsuario = async( id ) => {

    try {
        const empleado = await getEmpleado( id );
        const salario  = await getSalario( id );
    
        return `El salario del empleado: ${empleado} es de ${salario}`; // This is equivalent to calling resolve( `El salario del empleado: ${empleado} es de ${salario}` ) in a promise.
        
    } catch (error) {
        throw error; // This is equivalent to calling reject( error ) in a promise.
    }
}


const id = 3;

getInfoUsuario( id )
        .then(  console.log )
        .catch( console.error );
