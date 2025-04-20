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
      const essential = document.getElementById("essential-price");
      const pro = document.getElementById("pro-price");
      const premium = document.getElementById("premium-price");

      if (this.checked) {
        switch (lang) {
          case "es":
            essential.innerText = "47€ / mes (facturado anualmente)";
            pro.innerText = "79€ / mes (facturado anualmente)";
            premium.innerText = "119€ / mes (facturado anualmente)";
            break;
          case "de":
            pro.innerText = "€95 / Monat (jährlich abgerechnet)";
            premium.innerText = "€191 / Monat (jährlich abgerechnet)";
            break;
          default:
            essential.innerText = "€47 / month (billed annually)";
            pro.innerText = "€79 / month (billed annually)";
            premium.innerText = "€119 / month (billed annually)";
        }
      } else {
        switch (lang) {
          case "es":
            essential.innerText = "59€ / mes";
            pro.innerText = "99€ / mes";
            premium.innerText = "149€ / mes";
            break;
          case "de":
            essential.innerText = "€59 / Monat";
            pro.innerText = "€99 / Monat";
            premium.innerText = "€149 / Monat";
            break;
          default:
            essential.innerText = "59€ / month";
            pro.innerText = "99€ / month";
            premium.innerText = "149€ / month";
        }
      }
    });
  }

  // Makes year dynamic
  $("#year").text(new Date().getFullYear());
});
