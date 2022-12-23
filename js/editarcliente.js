import { obtenerCliente, editarCliente } from "./API.js"
import { mostrarAlerta, validar } from "./funciones.js"

(function(){
    
    //Campos del formulario
    const nombreInput = document.querySelector("#nombre");
    const emailInput = document.querySelector("#email");
    const empresaInput = document.querySelector("#empresa");
    const telefonoInput = document.querySelector("#telefono");
    const idInput = document.querySelector("#id");

    document.addEventListener("DOMContentLoaded", async () =>  {
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parseInt(parametrosURL.get("id"));
        const cliente = await obtenerCliente(idCliente);

        mostarCliente(cliente);

        //Submit al form
        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", validarCliente);
    })

    function mostarCliente(cliente){
       const { nombre, empresa, email, telefono, id } = cliente;
       nombreInput.value = nombre;
       emailInput.value = empresa;
       empresaInput.value = email;
       telefonoInput.value = telefono;
       idInput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();

        const cliente = {
            nombre: nombreInput.value,
            email : emailInput.value,
            telefono : telefonoInput.value,
            empresa : empresaInput.value,
            id : parseInt(idInput.value)
        }

     if(validar(cliente)){
        //Mostar mensaje
        mostrarAlerta("Faltan campos")
        return;
     }
      

     //Reescribe el objeto
     editarCliente(cliente)

    }


    

})();