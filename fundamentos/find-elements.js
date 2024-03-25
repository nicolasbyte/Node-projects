let users = [];

for(let i = 9999; i >= 0; i-- ){

    users[i] = {
        id : i,
        name : Math.random().toString()
    }
}

let list = [];

for(let i = 9999; i >= 0; i-- ){

    list[i] = {
        id : i,
        name : Math.random().toString(),
        created_by : Math.floor(Math.random()*10000)
    }
}

console.time('usando find'); 
const conUser = list.map( element => { 
    return {
        ...element,
        created_by_user : users.find( u => u.id === element.id ).created_by
    }
})
console.timeEnd('usando find');


const usersIndex = users.reduce((acc,el) => {  // Crear un index para los usuarios
    acc[el.id] = el
    return acc
}, {});

console.time('usando index');
/**
 * Maps the elements in the list and adds the 'created_by_user' property using the index to find the user.
 *
 * @type {Array}
 */
const conUserIndex = list.map( element => {  // Usar el index para buscar el usuario
    return {
        ...element,
        created_by_user : usersIndex[element.id].created_by
    }
})
console.timeEnd('usando index');