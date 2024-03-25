const empleados = [
    {
        id   : 1,
        name : 'Nicolas'
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

const getEmpleado = ( id , callback ) => {
    
    const empleado = empleados.find( e  => e.id == id );
    
    if( empleado ){
        callback( null , empleado.name );
    }else{
        callback( `Empleado con id ${id} no existe` );
    }
}


const getSalario = ( id , callback ) => {

    const salario = salarios.find( s => s.id == id )?.sales;

    if( salario ){
        callback(null, salario );
    }else{
        callback( `No existe salario para el id ${id}` );
    }
};

const id = 3;
getEmpleado(id , ( err , empleado ) => { // The function getEmpleado is a promise that resolves to the name of the employee if found, or rejects with an error message if the employee does not exist.

    if(err){
        console.log( 'ERROR!' );
        return console.error( err );
    }

    getSalario(id , (err , salario) => {
    
            if(err){
                console.log( 'ERROR!' );
                return console.error( err );
            }
        
            console.log(`El empleado: ${empleado} tiene un salario de: ${salario}`);
            console.log( salario );
    });


});

