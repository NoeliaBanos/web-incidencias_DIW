// Activa la validación de Bootstrap 5
document.addEventListener("DOMContentLoaded", function () {
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
});
// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener("DOMContentLoaded", function () {
  // Recupera el email desde localStorage al cargar la página
  const email = localStorage.getItem("userEmail");

  // Muestra el email en la página si existe
  const userEmailElement = document.getElementById("userEmail");
  if (email) {
    userEmailElement.textContent = "Bienvenid@: " + email;
  } else {
    userEmailElement.textContent = "No hay usuario registrado.";
  }

  // Muestra u oculta el enlace de "Cerrar sesión" dependiendo si el email existe
  const logoutNavItem = document.getElementById("logoutNavItem");
  if (!email) {
    logoutNavItem.style.display = "none"; // Oculta el enlace si no hay usuario
  }

  // Escucha el evento submit del formulario de login
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Evita que se recargue la página

      // Captura el email ingresado en el formulario
      const emailInput = document.getElementById("email").value;

      // Guarda el email en localStorage
      localStorage.setItem("userEmail", emailInput);

      // Redirige a la página principal
      window.location.href = "index.html";
    });
  }

  // Manejador de "Cerrar sesión"
  const logoutLink = document.querySelector('.nav-link[href="login.html"]');
  if (logoutLink) {
    logoutLink.addEventListener("click", function () {
      // Borra el email del localStorage al hacer clic en "Cerrar sesión"
      localStorage.removeItem("userEmail");
    });
  }
});

// Función para cerrar sesión
function logout() {
  localStorage.removeItem("userEmail"); // Borra el email del localStorage
  window.location.href = "login.html"; // Redirige a la página de login
}

function cambiarColor() {
  const select = document.getElementById("estado");
  const valor = select.value;

  // Remueve todas las clases previas
  select.classList.remove("bg-success", "bg-secondary", "bg-primary");

  // Aplica la clase según el valor seleccionado
  if (valor === "FINALIZADO") {
    select.classList.add("bg-success");
  } else if (valor === "EN PROCESO") {
    select.classList.add("bg-secondary");
  } else if (valor === "SIN EMPEZAR") {
    select.classList.add("bg-primary");
  }
}

// Llama a la función al cargar la página para establecer el color inicial
document.addEventListener("DOMContentLoaded", cambiarColor);
