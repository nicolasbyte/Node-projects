
const getUsuarioPorId = ( id , callBack ) => { // The function getUsuarioPorId is a callback that returns the user with the given ID.

    const usuario = {
        id,
        nombre : 'Nicolas'
    };

    setTimeout(() => {
        callBack(usuario);
    }, 100);

}


getUsuarioPorId(1 , (usuario) => {
        console.log(usuario);
})