// Año actual en el pie de página
document.getElementById("anio").textContent = new Date().getFullYear();

// Marca en el menú la sección que se está viendo
const enlaces = document.querySelectorAll(".menu ul a");
const secciones = document.querySelectorAll("main section[id]");

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        enlaces.forEach((enlace) => {
          enlace.classList.toggle(
            "activo",
            enlace.getAttribute("href") === "#" + entrada.target.id
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

secciones.forEach((seccion) => observador.observe(seccion));
