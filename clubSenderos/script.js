// Selecciona todas las imágenes de la galería
const galleryItems = document.querySelectorAll('.gallery-item');
const fullscreenContainer = document.getElementById('fullscreenContainer');
const fullscreenImg = document.getElementById('fullscreenImg');
const closeBtn = document.getElementById('closeBtn');
const isMobile = window.matchMedia("(max-width: 768px)").matches;


// Agrega un evento click a cada imagen de la galería
if(!isMobile){
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            fullscreenImg.src = item.src; // Muestra la imagen seleccionada
            fullscreenContainer.style.display = 'flex'; // Muestra el contenedor en pantalla completa
        });
    });

    // Cierra la imagen en pantalla completa cuando se hace clic en el botón de cerrar
    closeBtn.addEventListener('click', () => {
        fullscreenContainer.style.display = 'none';
    });
}