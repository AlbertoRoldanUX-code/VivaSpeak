$(document).ready(function () {
  // Navbar elements:
  const menu = $("#hamburger");
  const dropdown = $("nav ul");
  const links = $(".nav-list");

  // Ensure dropdown is hidden on mobile view on page load
  $(window)
    .on("resize", function () {
      if ($(window).width() > 768) {
        dropdown.show(); // Asegura que el dropdown está siempre visible en desktop
      } else {
        dropdown.hide(); // Esconde el dropdown en vistas móviles inicialmente
      }
    })
    .trigger("resize"); // Trigger the resize event on page load

  // Opens dropdown when clicking the menu
  menu.click(function () {
    if ($(window).width() <= 768) {
      // Solo permite toggle en vistas móviles
      dropdown.slideToggle();
      $(this).toggleClass("active"); // Toggle the "active" class on the hamburger menu
    }
  });

  // Closes dropdown when clicking on a link in mobile view only
  $(".nav-list a").click(function () {
    if ($(window).width() <= 768) {
      if (dropdown.is(":visible")) {
        menu.removeClass("active");
        dropdown.slideUp();
      }
    }
  });

  // Makes year dynamic
  $("#year").text(new Date().getFullYear());
});
