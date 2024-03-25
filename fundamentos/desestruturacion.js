const deadpool = {
    nombre : 'Wade',
    apellido :'Winston',
    poder : 'regeneración',
    getNombre() { return `${this.nombre} ${this.apellido} ${ this.poder}`} // Template string
}

function imprimirHeroe ({ nombre , apellido , poder , edad = 0 }){ // Destructuring
        console.log(nombre,apellido,poder,edad);
}

// const { nombre , apellido , poder , edad = 0 } = deadpool;
// console.log(deadpool.getNombre(), edad);
const [,,h3] = ['Batman','Superman','Flash']; // Destructuring
// const { nombre , apellido , poder , edad = 0 } = deadpool;
imprimirHeroe(deadpool);
console.log(h3);