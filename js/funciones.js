export function mostrarAlerta(mensaje){
    const alerta = document.querySelector(".bg-red-100");

    if(!alerta){
        const alerta = document.createElement("p");

        alerta.classList.add("bg-red-100", "border-red-400", "text-red-700", "px-4", "py-3", "rounded", "max-w-lg", "mx-auto", "mt-6", "text-center");

        alerta.innerHTML = `
        <strong class="font-bold"> Error! </strong>
        <span class="block sm:inline"> ${mensaje} </span>
        `;

        const formulario = document.querySelector("#formulario");
        formulario.appendChild(alerta);

        setTimeout(() =>{
            alerta.remove();
        }, 3000 );
    }

}

export  //Validamos con esta funcion
function validar(obj){
    //leemos los valores del objeto, .every revisa una condición en cada uno de los elementos. si alguno esta vacio retorna un false, si le ponemos lo contrario ! nos retorna un true. si lleno todos los campos con la info que se requiere, va a dar true.
    return !Object.values(obj).every(input => input !== "")
}
