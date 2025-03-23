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

  // Verifica si el elemento existe antes de añadir el evento
  const togglePricing = document.getElementById("togglePricing");
  if (togglePricing) {
    togglePricing.addEventListener("change", function () {
      const pro = document.getElementById("pro-price");
      const premium = document.getElementById("premium-price");

      if (this.checked) {
        switch (lang) {
          case "es":
            pro.innerText = "€95 / mes (facturado anualmente)";
            premium.innerText = "€191 / mes (facturado anualmente)";
            break;
          case "de":
            pro.innerText = "€95 / Monat (jährlich abgerechnet)";
            premium.innerText = "€191 / Monat (jährlich abgerechnet)";
            break;
          default:
            pro.innerText = "€95 / month (billed annually)";
            premium.innerText = "€191 / month (billed annually)";
        }
      } else {
        switch (lang) {
          case "es":
            pro.innerText = "€119 / mes";
            premium.innerText = "€239 / mes";
            break;
          case "de":
            pro.innerText = "€119 / Monat";
            premium.innerText = "€239 / Monat";
            break;
          default:
            pro.innerText = "€119 / month";
            premium.innerText = "€239 / month";
        }
      }
    });
  }

  // Makes year dynamic
  $("#year").text(new Date().getFullYear());
});
