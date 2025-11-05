$(document).ready(function () {
  const menu = $("#hamburger");
  const dropdown = $("nav ul");
  const lang = $("html").attr("lang");

  // Muestra el menú de navegación en pantallas grandes
  $(window)
    .on("resize", function () {
      if ($(window).width() > 1188) {
        dropdown.show();
        menu.removeClass("active");
      } else {
        dropdown.hide();
        menu.removeClass("active");
      }
    })
    .trigger("resize");

  // Toggle menu en móvil
  menu.click(function () {
    dropdown.slideToggle();
    this.classList.toggle("active");
  });

  // Cierra el modal de la imagen con Esc
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });

  // Oculta el menú de navegación al hacer clic en un enlace
  $(".nav-list a").click(function () {
    if ($(window).width() <= 1203) {
      if (dropdown.is(":visible")) {
        menu.removeClass("active");
        dropdown.slideUp();
      }
    }
  });

  // Modal de imagen - click en imagen clicable
  $(".clickable-image").on("click", function () {
    openModal($(this).attr("src"));
  });

  // Modal de imagen - click en el botón cerrar
  $(".close, #imageModal").on("click", function (e) {
    // Si se clica en el fondo o en la X, cerrar
    if (e.target === this) {
      closeModal();
    }
  });

  // Año dinámico
  $("#year").text(new Date().getFullYear());
});

// Funciones del modal (globales para que funcionen con onclick si es necesario)
function openModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  if (modal && modalImg) {
    modal.style.display = "flex";
    modalImg.src = src;
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  if (modal) {
    modal.style.display = "none";
    // Restaurar scroll del body
    document.body.style.overflow = "auto";
  }
}
