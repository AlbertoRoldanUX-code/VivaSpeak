$(document).ready(function () {
  // Navbar elements:
  const menu = $("#nav-toggle");
  const dropdown = $("nav ul");
  const links = $(".nav-list");

  // Ensure dropdown is hidden on mobile view on page load
  if ($(window).width() <= 768) {
    dropdown.hide();
  }

  // Opens dropdown when clicking the menu
  menu.click(function () {
    dropdown.slideToggle();
    this.classList.toggle("active");
  });

  // Closes dropdown when clicking on a link in mobile view only
  $(".nav-list a").click(function () {
    if (window.innerWidth <= 768) {
      if (dropdown.is(":visible")) {
        menu[0].classList.toggle("active");
        dropdown.slideUp();
      }
    }
  });

  // Makes year dynamic
  $("#year").html(new Date().getFullYear());
});
