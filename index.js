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

  menu.click(function () {
    dropdown.slideToggle();
    this.classList.toggle("active");
  });

  // Cierra el modal de la imagen en Esc
  $(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      $("#imageModal").css("display", "none");
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

  // Reproducción automática del video en escritorio
  const video = document.getElementById("testimonio-video");

  // Detecta si NO es móvil
  const isDesktop = window.innerWidth > 768;

  if (isDesktop && video) {
    video.setAttribute("autoplay", "");
    video.play().catch((e) => {
      console.warn("Autoplay failed:", e);
    });
  }

  // Año dinámico
  $("#year").text(new Date().getFullYear());
});
// Modal imagen
function openModal(src) {
  document.getElementById("imageModal").style.display = "flex";
  document.getElementById("modalImg").src = src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
