document.getElementById("boton-login").addEventListener("click", function registrarse() {
    window.location.href = "/pagina de registro/login.html";
})

document.getElementById("enlaceContraseña").addEventListener("click", function(event) {
    event.preventDefault();

     window.open(this.getAttribute("href"), "_blank", "width=600,height=400,resizable=yes,scrollbars=yes");
});

document.getElementById("boton-confirmar").addEventListener("click", function confirmacion() {
    alert("Te has registrado!")
})