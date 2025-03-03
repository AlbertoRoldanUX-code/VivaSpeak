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

  // Oculta el menú de navegación al hacer clic en un enlace
  $(".nav-list a").click(function () {
    if ($(window).width() <= 1203) {
      if (dropdown.is(":visible")) {
        menu.removeClass("active");
        dropdown.slideUp();
      }
    }
  });

  document
    .getElementById("togglePricing")
    .addEventListener("change", function () {
      const pro = document.getElementById("pro-price");
      const elite = document.getElementById("elite-price");

      if (this.checked) {
        switch (lang) {
          case "es":
            pro.innerText = "€95 / mes (facturado anualmente)";
            elite.innerText = "€191 / mes (facturado anualmente)";
            break;
          case "de":
            pro.innerText = "€95 / Monat (jährlich abgerechnet)";
            elite.innerText = "€191 / Monat (jährlich abgerechnet)";
            break;
          default:
            pro.innerText = "€95 / month (billed annually)";
            elite.innerText = "€191 / month (billed annually)";
        }
      } else {
        switch (lang) {
          case "es":
            pro.innerText = "€119 / mes";
            elite.innerText = "€239 / mes";
            break;
          case "de":
            pro.innerText = "€119 / Monat";
            elite.innerText = "€239 / Monat";
            break;
          default:
            pro.innerText = "€119 / month";
            elite.innerText = "€239 / month";
        }
      }
    });

  // Makes year dynamic
  $("#year").text(new Date().getFullYear());
});
