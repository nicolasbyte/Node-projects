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
const getEmpleado = ( id ) => { // The function getEmpleado is a promise that resolves to the name of the employee if found, or rejects with an error message if the employee does not exist.

    
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

const id = 4;
// getEmpleado( id )
//     .then( empleado => console.log( empleado ) )
//     .catch( console.error );

// getSalario( id )
//     .then( salario => console.log( salario ) )
//     .catch( console.error );
let nombre;

getEmpleado( id ) // The function getEmpleado is a promise that resolves to the name of the employee if found, or rejects with an error message if the employee does not exist.
       .then( empleado =>  { 
         nombre = empleado;       
         return getSalario( id ) 
       })
       .then( salario => { 
              console.log( 'El empleado:', nombre, 'tiene un salario de:', salario );
       })
       .catch( console.error );