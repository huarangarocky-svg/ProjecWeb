
// ========================================
// BOTONES DE PROYECTOS
// ========================================

const projectButtons = document.querySelectorAll(".project-button");

projectButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const project = button.dataset.project;

        alert(
            "Has seleccionado: " +
            project +
            "\n\nPronto agregaremos este proyecto."
        );

    });

});


// ========================================
// BOTÓN DE CONTACTO
// ========================================

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", function() {

    alert(
        "Aquí podremos agregar tu WhatsApp, Instagram o correo."
    );

});

// ========================================
// MENÚ MÓVIL
// ========================================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function() {

    navMenu.classList.toggle("active");

});

const menuLinks = document.querySelectorAll("#navMenu a");

menuLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

    });

});

// // ========================================
// ANIMACIONES AL HACER SCROLL
// ========================================

const elementsToReveal = document.querySelectorAll(
    ".section, .project-card"
);

// Preparamos los elementos
elementsToReveal.forEach(function(element) {
    element.classList.add("reveal");
});


// Detectamos cuando entran o salen de la pantalla
const revealObserver = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                // Entra en pantalla
                entry.target.classList.add("visible");

            } else {

                // Sale de pantalla
                entry.target.classList.remove("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


// Activamos el observador
elementsToReveal.forEach(function(element) {

    revealObserver.observe(element);

});

// ========================================
// MODO CLARO / OSCURO
// ========================================

const themeButton =
    document.getElementById("themeButton");


// Comprobar tema guardado

const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeButton.textContent = "☀️";

}


// Cambiar tema

themeButton.addEventListener("click", function() {

    document.body.classList.toggle("light-mode");


    const isLight =
        document.body.classList.contains("light-mode");


    if (isLight) {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});
