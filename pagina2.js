// Espera hasta que el contenido esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    const serviciosSection = document.querySelector('.servicios');

    // Función para aplicar el zoom con scroll
    let zoomLevel = 1;  // Nivel de zoom inicial

    serviciosSection.addEventListener('wheel', function(event) {
        // Aumenta o disminuye el nivel de zoom según la dirección del scroll
        if (event.deltaY > 0) {
            zoomLevel -= 0.1;  // Resta al nivel de zoom (desplazar hacia abajo)
        } else {
            zoomLevel += 0.1;  // Suma al nivel de zoom (desplazar hacia arriba)
        }

        // Limitar el nivel de zoom entre 0.9 y 2
        zoomLevel = Math.min(Math.max(zoomLevel, 0.9), 2);

        // Aplicar el zoom a la sección
        serviciosSection.style.transform = scale($zoomLevel);
    });
});