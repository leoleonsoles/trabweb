// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los botones con la clase .toggle-btn
    const toggleButtons = document.querySelectorAll('.toggle-btn');
    
    // Recorremos cada botón
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Obtenemos el valor de data-target (esto coincide con los IDs de las secciones)
            const targetId = button.getAttribute('data-target');
            const targetDiv = document.getElementById(targetId); // Obtenemos el div correspondiente
            
            // Alternamos el estado de display entre 'none' y 'block'
            if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
                targetDiv.style.display = 'block';  // Mostrar
            } else {
                targetDiv.style.display = 'none';   // Ocultar
            }
        });
    });
});