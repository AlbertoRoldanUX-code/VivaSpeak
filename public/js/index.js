document.addEventListener("DOMContentLoaded", function () {
  // --- Selectores ---
  const menu = document.getElementById("hamburger");
  // Seleccionamos "nav ul" (asumiendo que es la lista dentro de .top-nav)
  const dropdown = document.querySelector(".nav-list");
  const header = document.querySelector("header");
  const navLinks = document.querySelectorAll(".nav-list a");
  const yearSpan = document.getElementById("year");
  const clickableImages = document.querySelectorAll(".clickable-image");
  const modal = document.getElementById("imageModal");
  const mockupCounter = document.getElementById("mockupCounter");

  // --- 1. Lógica de Resize (Pantallas grandes vs móviles) ---
  function handleResize() {
    if (window.innerWidth > 991) {
      // En escritorio, aseguramos que el menú se vea (reseteamos display inline para que el CSS mande)
      if (dropdown) {
        dropdown.classList.remove("open");
        dropdown.style.display = "";
      }
      if (menu) menu.classList.remove("active");
      if (header) header.classList.remove("menu-open");
    } else {
      // En móvil, si el menú no tiene la clase active, aseguramos que esté oculto al redimensionar
      if (menu && !menu.classList.contains("active") && dropdown) {
        dropdown.classList.remove("open");
        dropdown.style.display = "";
      }
      if (menu && !menu.classList.contains("active") && header) {
        header.classList.remove("menu-open");
      }
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize(); // Ejecutar una vez al cargar

  // --- 2. Toggle Menú Móvil (Reemplazo de slideToggle) ---
  if (menu && dropdown) {
    menu.addEventListener("click", function () {
      this.classList.toggle("active");

      // Simulación de slideToggle con display
      if (dropdown.style.display) dropdown.style.display = "";
      dropdown.classList.toggle("open");
      if (header) header.classList.toggle("menu-open");
    });
  }

  // --- 3. Cerrar menú al hacer clic en un enlace ---
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 991) {
        // Solo si el menú está visible
        if (dropdown && dropdown.classList.contains("open")) {
          if (menu) menu.classList.remove("active");
          dropdown.classList.remove("open");
          if (header) header.classList.remove("menu-open");
        }
      }
    });
  });

  // --- 4. Modal de Imagen ---

  // Abrir modal al hacer click en imágenes
  clickableImages.forEach((img) => {
    img.addEventListener("click", function () {
      openModal(this.getAttribute("src"));
    });
  });

  // Cerrar modal con la tecla Escape
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Cerrar modal al hacer click en la X o en el fondo
  if (modal) {
    modal.addEventListener("click", function (e) {
      // Si se pulsa en el fondo (modal) o en el botón cerrar
      if (e.target === modal || e.target.closest(".close")) {
        closeModal();
      }
    });
  }

  // --- 5. Año dinámico ---
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- 6. Intersection Observer (Animaciones fade) ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  });

  document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

  // --- 7. Contador dinámico en el mockup ---
  const counterMessages = [
    "+1 cita confirmada",
    "+2 leads cualificados",
    "+1 WhatsApp resuelto",
  ];
  let counterIndex = 0;
  if (mockupCounter) {
    setInterval(() => {
      counterIndex = (counterIndex + 1) % counterMessages.length;
      mockupCounter.textContent = counterMessages[counterIndex];
    }, 2800);
  }
});

// --- Funciones Globales del Modal ---
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  // Nota: Como el HTML del modal no estaba en tu código original,
  // asegúrate de que existan estos IDs en tu HTML.
  if (modal && modalImg) {
    modal.style.display = "flex";
    modalImg.src = src;
    document.body.style.overflow = "hidden"; // Bloquear scroll
  } else {
    console.warn("No se encontró el modal #imageModal o la imagen #modalImg");
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Restaurar scroll
  }
}
