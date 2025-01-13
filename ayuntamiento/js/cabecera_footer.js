 // Función para cargar el contenido de un archivo HTML en un contenedor específico
 function loadHTML(url, elementId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error cargando el archivo:', error));
}

// Cargar header y footer
loadHTML('header.html', 'header-container');
loadHTML('footer.html', 'footer-container');