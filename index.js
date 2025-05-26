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

  // Lógica del switch de precios
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

  // Preselección del plan desde la URL
  const planFromURL = new URLSearchParams(window.location.search).get("plan");
  if (planFromURL) {
    const planSelect = document.getElementById("plan");
    if (planSelect) {
      for (let option of planSelect.options) {
        if (option.value.toLowerCase().includes(planFromURL.toLowerCase())) {
          option.selected = true;
          break;
        }
      }
    }
  }

  // Año dinámico
  $("#year").text(new Date().getFullYear());

  // Habilitar campo "datos" según el plan
  const planSelect = $("#plan");
  const datosSelect = $("#datos");
  const stripeLinks = {
    esencial: "https://buy.stripe.com/3cIaEXdMy0Zdg7xbU4c7u00",
    profesional: "https://buy.stripe.com/4gM5kD7oa5ft1cDe2cc7u01",
    premium: "https://buy.stripe.com/dRm5kD7oa6jx6wX9LWc7u02",
  };

  function updateDatosFieldState() {
    const selected = planSelect.val();
    const enable =
      selected.includes("Profesional") ||
      selected.includes("Professional") ||
      selected.includes("Premium");

    datosSelect.prop("disabled", !enable);
    datosSelect.css("opacity", enable ? "1" : "0.5");
    datosSelect.css("pointer-events", enable ? "auto" : "none");

    // Cambiar color de la etiqueta
    $("#label-datos").css("color", enable ? "#000" : "gray");

    // Mostrar/ocultar el mensaje de aviso
    $("#aviso-datos").toggle(!enable);
  }

  planSelect.on("change", updateDatosFieldState);
  updateDatosFieldState();

  // Formulario multistep
  let currentStep = 1;
  const totalSteps = 4;
  const nextBtn = document.getElementById("nextBtn");
  const prevBtn = document.getElementById("prevBtn");

  const getText = (key) => {
    const labels = {
      es: { next: "Siguiente", submit: "Enviar" },
      en: { next: "Next", submit: "Send" },
    };
    return labels[lang] && labels[lang][key]
      ? labels[lang][key]
      : labels["en"][key];
  };

  const showStep = (step) => {
    document.querySelectorAll(".form-step").forEach((el, index) => {
      el.style.display = index + 1 === step ? "block" : "none";
    });
    prevBtn.style.display = step > 1 ? "inline-block" : "none";
    nextBtn.innerText =
      step === totalSteps
        ? lang === "es"
          ? "Ir a pagar"
          : "Proceed to payment"
        : getText("next");
  };

  nextBtn.addEventListener("click", (event) => {
    const currentFormStep = document.querySelector(`#step-${currentStep}`);
    const inputs = currentFormStep.querySelectorAll("input, select, textarea");

    let isValid = true;

    inputs.forEach((input) => {
      if (
        input.hasAttribute("required") &&
        (input.type === "checkbox" ? !input.checked : !input.value.trim())
      ) {
        isValid = false;
        input.classList.add("input-error");
      } else {
        input.classList.remove("input-error");
      }
    });

    if (!isValid) {
      alert(
        lang === "es"
          ? "Por favor, completa los campos obligatorios antes de continuar."
          : "Please complete the required fields before continuing."
      );
      return;
    }

    if (currentStep === totalSteps) {
      const form = document.querySelector("form");

      // Evita enviar de forma predeterminada
      event.preventDefault();

      // Enviar el formulario manualmente a Netlify
      const formData = new FormData(form);
      fetch("/", {
        method: "POST",
        body: formData,
      })
        .then(() => {
          // Redirigir a Stripe según el plan elegido
          const plan = document.getElementById("plan").value.toLowerCase();
          if (plan.includes("esencial"))
            window.location.href = stripeLinks.esencial;
          else if (plan.includes("profesional"))
            window.location.href = stripeLinks.profesional;
          else if (plan.includes("premium"))
            window.location.href = stripeLinks.premium;
          else alert("Plan no reconocido.");
        })

        .catch(() => {
          alert(
            lang === "es"
              ? "Hubo un error al enviar el formulario. Intenta de nuevo."
              : "There was an error submitting the form. Please try again."
          );
        });
    } else {
      currentStep++;
      showStep(currentStep);
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 1) {
      currentStep--;
      showStep(currentStep);
    }
  });

  showStep(currentStep);
});
