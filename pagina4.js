const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");

// Maneja el envío del formulario
form.onsubmit = (event) => {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente.
  let isValid = true;

  // Elimina los mensajes de error previos
  form.querySelectorAll(".error-message").forEach((msg) => msg.remove());

  // Valida cada campo
  inputs.forEach((input) => {
    const error = validateInput(input);
    if (error) {
      isValid = false;
      showError(input, error);
    }
  });

  if (isValid) {
    // Muestra el modal de éxito
    showModal();
  }
};

// Función de validación
function validateInput(input) {
  if (!input.value.trim()) {
    return "Este campo es obligatorio.";
  }

  if (input.type === "email" && !/\S+@\S+\.\S+/.test(input.value)) {
    return "Por favor, ingresa un correo válido.";
  }

  if (input.id === "teléfono") {
    if (!/^\d+$/.test(input.value)) {
      return "El teléfono debe contener solo números.";
    }
    if (input.value.length !== 9) {
      return "Debe contener exactamente 9 números.";
    }
  }

  return null; // No hay errores
}

// Función para mostrar los errores
function showError(input, message) {
  const errorSpan = document.createElement("span");
  errorSpan.className = "error-message";
  errorSpan.textContent = message;
  errorSpan.style.color = "red";
  errorSpan.style.fontSize = "0.9em";
  input.insertAdjacentElement("afterend", errorSpan);
}

// Función para mostrar el modal
function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block"; // Muestra el modal

  // Cierra el modal cuando se hace clic en el botón de cierre
  const closeModal = document.getElementById("closeModal");
  closeModal.onclick = () => {
    modal.style.display = "none"; // Oculta el modal
  }

  // Cierra el modal si se hace clic fuera de la ventana modal
  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }

  // Redirige al inicio al hacer clic en el botón "Continuar"
  const continueButton = document.getElementById("continueButton");
  continueButton.onclick = () => {
    modal.style.display = "none"; // Oculta el modal
    window.location.href = "Pagina1.html"; // Redirige al inicio (ajusta la URL según necesites)
  };
};
