document.addEventListener('DOMContentLoaded', function() {
    // Efecto de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Botón de descarga (simulado)
    document.getElementById('downloadBtn').addEventListener('click', function() {
        alert('Esta función descargaría el CV en formato PDF en una implementación real.');
        // En una implementación real, aquí iría el código para generar/descargar el PDF
    });
    
    // Efecto de carga progresiva
    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    sections.forEach(section => {
        section.style.opacity = 0;
        observer.observe(section);
    });
    
    // Lightbox para la foto de perfil
    const profilePhoto = document.getElementById('profilePhoto');
    const lightbox = document.getElementById('photoLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.querySelector('.close-btn');
    
    profilePhoto.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
    
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
});