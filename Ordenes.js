function redireccion() {
    // NYXOT 19/04/2023
    // se busca el formulario por su id
    let formulario = document.getElementById("formularioRediccionDinamica");
    // NYXOT 19/04/2023
    // generamos un objeto FormData con el formulario para poder acceder a metodos
    const formData = new FormData(formulario)
    // NYXOT 19/04/2023
    // usamos el metodo get especificando que campo queremos para recuperar el valor del formulario
    let tipo = formData.get("userType");

    // NYXOT 19/04/2023
    // este if estaba haciendo mal las comparaciones, usando solo un "=" es asignación
    if (tipo == "Desarrollador") {
        window.location.href = "desarrollador.html"
    } else if (tipo == "Pug") {
        // NYXOT 19/04/2023
        // en las redirecciones debes tomar en cuenta que "sales" desde la ubicación del script y debes mapear correctamente la ruta
        location.href = "Pug/pug.html"
    } else if (tipo == "Chewbaca") {
        location.href = "Chewbaca/Chewbaca.html"
    } else if (tipo == "RataWomp") {
        location.href = "RatWomp/rataWomp.html"
    } else {
        // NYXOT 19/04/2023
        // un mensaje a pantalla para avisar que no selecciono nada
        alert("Debes seleccionar un tipo");
    }
}