document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que se recargue la página

        // Captura el email
        const email = document.getElementById("email").value;

        // Guarda el email en localStorage
        localStorage.setItem("userEmail", email);

        // Redirige a la otra página
        window.location.href = "/index.html";

});
