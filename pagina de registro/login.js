function OlvidarContraseña() {
    alert("¿Olvidaste tu contraseña? JAJAJAJAJ cagaste")
}

document.getElementById("boton-registro").addEventListener("click", function registrarse() {
    window.location.href = "/pagina de registro/registro.html"
})


document.getElementById("form-login").addEventListener("submit", function(event) {
  

    // Obtener los valores de usuario y contraseña
    let usuario = document.getElementById("inputUser").value;
    let usuarioEspecial = ["Alice", "Alicia", "Liz", "Vicky", "Isthar","Winter" ];
    let usuarioAutora = ["Renata", "Batman", "Ren", "Renny", "Renatinha"];

    // Comprobar si el usuario es el usuario especial
    if (usuarioEspecial.includes(usuario) ) {
        alert("Te amo, eres mi persona favorita y me motivas a seguir intentando. Gracias por creer en mi y gracias por todo <3");
    } else if (usuarioAutora.includes(usuario)) {
        alert("Bienvenida, caballera oscura. Gotham city te extrañaba.");
    }  else {
        alert("Has hecho login!");
    }

})