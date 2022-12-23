const URL = "http://localhost:4000/clientes"

//Cuando se crea un nuevo cliente - por default es get, por eso ahora le ponemos el metodo de post
export const nuevoCliente = async cliente => {
    try {
        await fetch(URL , {
            method:"POST",
            body: JSON.stringify( cliente ),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.href = "/index.html";

    } catch (error) {
        console.log(error);        
    }

}

//Obtiene todos los clientes - por GET, no hace falta aclarar method
export const obtenerClientes = async () => {
    try {
        const resultado = await fetch(URL);
        const clientes = await resultado.json(); // doble await porque el primero se tiene que haber cumplido
        return clientes;
        
    } catch (error) {
        console.log(error);  
    }
}

//Elimina cliente por id, usamos method delete
export const eliminarCliente = async (id) => {
    try {
        await fetch (`${URL}/${id}`,{
            method:"DELETE"
        });
    } catch (error) {
        console.log(error);  
        
    }
}

//Obtiene un cliente por su ID
export const obtenerCliente = async id => {
    try {
        const resultado = await fetch (`${URL}/${id}`);
        const cliente = await resultado.json();
        return cliente;
        
    } catch (error) {
       console.log(error); 
        
    }
}

//Actualiza un registro - method PUT, hay dos formas, patch y put, los dos hacen lo mismo, pero put es completo y patch es parcial
export const editarCliente = async cliente => {
    try {
        await fetch(`${URL}/${cliente.id}`,{
            method:"PUT",
            body:JSON.stringify(cliente),
            headers: {
                "Content-Type": "application/json"
            }
        });
        window.location.href = "/index.html";
    } catch (error) {
        console.log(error); 
    }
}