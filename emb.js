document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Alternar la clase para abrir/cerrar el menú
        nav.classList.toggle('nav-active');

        // Añadir animación a los enlaces
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Alternar el ícono de la hamburguesa
        burger.classList.toggle('toggle');
    });

    // Cerrar el menú al hacer clic en un enlace del menú
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
            navLinks.forEach(link => {
                link.style.animation = '';
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.getElementById('anim-section');

    function checkVisibility() {
        const rect = animatedElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const margin = 100; // Ajusta este valor según sea necesario

        // Verifica si el elemento está dentro de la ventana de visualización con un margen adicional
        if (rect.top < windowHeight - margin && rect.bottom > margin) {
            if (!animatedElement.classList.contains('animate__rollIn') && !animatedElement.classList.contains('text visible')) {
                console.log('Elemento visible. Añadiendo clase "visible".');
                animatedElement.classList.add('animate__rollIn');
            }
        }
        else {
            if (animatedElement.classList.contains('animate__rollIn')) {
                console.log('Elemento fuera de vista. Eliminando clase "visible".');
                animatedElement.classList.add('animate__backOutLeft');
                animatedElement.classList.remove('animate__rollIn');
            }
        }
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar la visibilidad al cargar la página
});
document.addEventListener('DOMContentLoaded', function () {
    const animatedElement = document.getElementById('anim-section2');

    function checkVisibility() {
        const rect = animatedElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const margin = 100; // Ajusta este valor según sea necesario

        // Verifica si el elemento está dentro de la ventana de visualización con un margen adicional
        if (rect.top < windowHeight - margin && rect.bottom > margin) {
            if (!animatedElement.classList.contains('animate__fadeInRight') && !animatedElement.classList.contains('circle visible')) {
                console.log('Elemento visible. Añadiendo clase "visible".');
                animatedElement.classList.remove('animate__fadeOutRight');
                animatedElement.classList.add('animate__fadeInRight');
            }
        }
        else {
            if (animatedElement.classList.contains('animate__fadeInRight')) {
                console.log('Elemento fuera de vista. Eliminando clase "visible".');
                animatedElement.classList.add('animate__fadeOutRight');
                animatedElement.classList.remove('animate__fadeInRight');
            }
        }
    }
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verificar la visibilidad al cargar la página
});