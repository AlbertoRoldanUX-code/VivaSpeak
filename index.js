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
      const basic = document.getElementById("basic-price");
      const plus = document.getElementById("plus-price");

      if (this.checked) {
        switch (lang) {
          case "es":
            basic.innerText = "€39 / mes (facturado anualmente)";
            plus.innerText = "€79 / mes (facturado anualmente)";
            break;
          case "de":
            basic.innerText = "€39 / Monat (jährlich abgerechnet)";
            plus.innerText = "€79 / Monat (jährlich abgerechnet)";
            break;
          default:
            basic.innerText = "€39 / month (billed annually)";
            plus.innerText = "€79 / month (billed annually)";
        }
      } else {
        switch (lang) {
          case "es":
            basic.innerText = "€49 / mes";
            plus.innerText = "€99 / mes";
            break;
          case "de":
            basic.innerText = "€49 / Monat";
            plus.innerText = "€99 / Monat";
            break;
          default:
            basic.innerText = "€49 / month";
            plus.innerText = "€99 / month";
        }
      }
    });

  // Makes year dynamic
  $("#year").text(new Date().getFullYear());
});
