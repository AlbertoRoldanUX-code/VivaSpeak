$(document).ready(function () {
  const menu = $("#hamburger");
  const dropdown = $("nav ul");

  $(window)
    .on("resize", function () {
      if ($(window).width() > 768) {
        dropdown.show(); // Asegura que el dropdown está siempre visible en desktop
        menu.removeClass("active"); // Asegura que el icono esté en estado hamburguesa
      } else {
        dropdown.hide(); // Esconde el dropdown en vistas móviles inicialmente
        menu.removeClass("active"); // Asegura que el icono esté en estado hamburguesa
      }
    })
    .trigger("resize"); // Trigger the resize event on page load

  menu.click(function () {
    dropdown.slideToggle();
    this.classList.toggle("active"); // Cambia el estado de activo a inactivo y viceversa
  });

  $(".nav-list a").click(function () {
    if ($(window).width() <= 768) {
      if (dropdown.is(":visible")) {
        menu.removeClass("active");
        dropdown.slideUp();
      }
    }
  });

  // Cambiar los precios
  document
    .getElementById("togglePricing")
    .addEventListener("change", function () {
      if (this.checked) {
        document.getElementById("basic-price").innerText =
          "€39 / month (billed annually)";
        document.getElementById("plus-price").innerText =
          "€79 / month (billed annually)";
        document.getElementById("premium-price").innerText =
          "€159 / month (billed annually)";
      } else {
        document.getElementById("basic-price").innerText = "€49 / month";
        document.getElementById("plus-price").innerText = "€99 / month";
        document.getElementById("premium-price").innerText = "€199 / month";
      }
    });
  // Makes year dynamic
  $("#year").text(new Date().getFullYear());
});
