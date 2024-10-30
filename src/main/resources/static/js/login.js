
$(document).ready(function() {
    console.log('Documento listo'); // Línea de depuración
});

async function iniciarSesion(){

    console.log('Iniciar sesión llamado'); // Línea de depuración

    let datos = {};
    datos.email = document.getElementById('txtEmail').value;
    datos.password = document.getElementById('txtPassword').value;

    const request = await fetch('api/login', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(datos)

    });
    const respuesta = await request.text();
    console.log('Respuesta del servidor:', respuesta); // Línea de depuración

    if(respuesta != 'FAIL'){
        localStorage.token = respuesta;
        localStorage.email = datos.email;
        console.log('Token almacenado:', localStorage.token); // Línea de depuración
        window.location.href = 'usuarios.html'
    }else{
        alert("Las credenciales son incorrectas. Por favor intentelo de nuevo");
    }

}