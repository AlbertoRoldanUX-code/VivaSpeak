$(document).ready(function () {
  const lang = $("html").attr("lang");

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
          // Redirigir según el agente elegido
          // const agent = document.getElementById("agent").value.toLowerCase();
          // if (agent.includes("clinica")) window.location.href = links.clinica;
          // else if (agente.includes("inmobiliaria"))
          //   window.location.href = links.inmobiliaria;
          // else alert("Agente no reconocido.");
          window.location.href = "/gracias.html";
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

  // Mostrar/ocultar campo de idioma adicional
  $("#agente-idioma-adicional").on("change", function () {
    const showExtra = $(this).val() === "yes";
    $("#idioma-adicional-container").toggle(showExtra);
  });

  $("#transferencia-fallback").on("change", function () {
    $("#numero-fallback-container").toggle(this.value === "yes");
  });

  // Lógica para añadir preguntas frecuentes
  const faqContainer = document.getElementById("faq-container");
  let faqCount = 1;
  let maxFaqs = 10;

  document.getElementById("add-faq").addEventListener("click", () => {
    if (faqCount >= maxFaqs) {
      alert(
        lang === "es"
          ? `Solo puedes añadir hasta ${maxFaqs} preguntas frecuentes. Si necesitas más, ponte en contacto con nosotros en contact@vivaspeak.com.`
          : `You can only add up to ${maxFaqs} FAQs. If you need more, get in touch with us`
      );
      return;
    }

    faqCount++;
    const placeholder =
      faqPlaceholders[(faqCount - 1) % faqPlaceholders.length];

    const faqHTML = `
<div class="faq-pair">
  <label for="faq${faqCount}-p">Pregunta ${faqCount}</label>
  <input type="text" name="faq${faqCount}-p" id="faq${faqCount}-p" placeholder="${placeholder.question}" />

  <label for="faq${faqCount}-r">Respuesta ${faqCount}</label>
  <input type="text" name="faq${faqCount}-r" id="faq${faqCount}-r" placeholder="${placeholder.answer}" />
</div>`;
    faqContainer.insertAdjacentHTML("beforeend", faqHTML);
  });

  // Añadir preguntas frecuentes predefinidas
  const placeholders = {
    es: [
      {
        question: "¿Cómo puedo pedir una cita?",
        answer:
          "Puedes pedir una cita llamando directamente o desde nuestra web.",
      },
      {
        question: "¿Qué horarios tienen?",
        answer: "Atendemos de lunes a viernes de 9:00 a 19:00.",
      },
      {
        question: "¿Dónde están ubicados?",
        answer: "Estamos en Calle Real 45, en el centro de Málaga.",
      },
      {
        question: "¿Atienden urgencias?",
        answer: "No atendemos urgencias, pero damos cita lo antes posible.",
      },
      {
        question: "¿Puedo cancelar o cambiar una cita?",
        answer: "Sí, con al menos 24 h de antelación llamando o por WhatsApp.",
      },
      {
        question: "¿Tienen financiación disponible?",
        answer: "Sí, consulta nuestras opciones al llegar o por teléfono.",
      },
      {
        question: "¿Trabajan con seguros médicos?",
        answer:
          "Sí, trabajamos con algunas aseguradoras. Consulta cuál en recepción.",
      },
      {
        question: "¿Cuánto dura la primera consulta?",
        answer: "Dura aproximadamente 30 minutos.",
      },
      {
        question: "¿Puedo ir acompañado a la cita?",
        answer: "Sí, puedes venir con un acompañante.",
      },
      {
        question: "¿Cómo puedo recibir recordatorios?",
        answer: "Por llamada automática o mensaje de WhatsApp, como prefieras.",
      },
      {
        question: "¿Tienen aparcamiento cerca?",
        answer: "Sí, hay un parking público a 2 minutos andando.",
      },
      {
        question: "¿Ofrecen tratamientos faciales?",
        answer: "Sí, ofrecemos una amplia gama de tratamientos faciales.",
      },
      {
        question: "¿Puedo reservar online?",
        answer: "Sí, desde nuestra página web puedes reservar fácilmente.",
      },
      {
        question: "¿Qué precios tienen?",
        answer:
          "Puedes ver los precios en nuestra web o pedir información por WhatsApp.",
      },
      {
        question: "¿Cuánto tiempo dura cada sesión?",
        answer:
          "Depende del tratamiento, pero suele ser entre 30 y 60 minutos.",
      },
      {
        question: "¿Con cuánta antelación debo llegar?",
        answer: "Recomendamos llegar 10 minutos antes de tu cita.",
      },
      {
        question: "¿Qué idiomas habla el personal?",
        answer: "Hablamos español, inglés y francés.",
      },
      {
        question: "¿Qué tratamientos ofrecen?",
        answer: "Ofrecemos tratamientos estéticos, faciales y corporales.",
      },
      {
        question: "¿Hacen seguimiento después del tratamiento?",
        answer: "Sí, hacemos seguimiento personalizado de cada paciente.",
      },
      {
        question: "¿Tienen consultas gratuitas?",
        answer: "Sí, la primera consulta es gratuita para algunos servicios.",
      },
    ],
    en: [
      {
        question: "How can I book an appointment?",
        answer:
          "You can book an appointment by calling us directly or through our website.",
      },
      {
        question: "What are your opening hours?",
        answer: "We are open Monday to Friday from 9:00 AM to 7:00 PM.",
      },
      {
        question: "Where are you located?",
        answer: "We are located at Calle Real 45, in the center of Málaga.",
      },
      {
        question: "Do you handle emergencies?",
        answer:
          "We don't handle emergencies, but we offer appointments as soon as possible.",
      },
      {
        question: "Can I cancel or reschedule an appointment?",
        answer: "Yes, with at least 24 hours' notice by phone or WhatsApp.",
      },
      {
        question: "Do you offer financing?",
        answer: "Yes, ask about our options in person or by phone.",
      },
      {
        question: "Do you work with health insurance?",
        answer:
          "Yes, we work with some insurers. Ask at the front desk for details.",
      },
      {
        question: "How long is the first consultation?",
        answer: "It lasts approximately 30 minutes.",
      },
      {
        question: "Can I bring someone with me?",
        answer: "Yes, you can come with a companion.",
      },
      {
        question: "How can I receive appointment reminders?",
        answer: "Via automated call or WhatsApp message, whichever you prefer.",
      },
      {
        question: "Is there parking nearby?",
        answer: "Yes, there is a public parking lot 2 minutes away on foot.",
      },
      {
        question: "Do you offer facial treatments?",
        answer: "Yes, we offer a wide range of facial treatments.",
      },
      {
        question: "Can I book online?",
        answer: "Yes, you can easily book through our website.",
      },
      {
        question: "What are your prices?",
        answer: "You can check our prices on the website or ask via WhatsApp.",
      },
      {
        question: "How long does each session last?",
        answer:
          "It depends on the treatment, usually between 30 and 60 minutes.",
      },
      {
        question: "How early should I arrive?",
        answer: "We recommend arriving 10 minutes before your appointment.",
      },
      {
        question: "What languages does your staff speak?",
        answer: "We speak Spanish, English, and French.",
      },
      {
        question: "What treatments do you offer?",
        answer: "We offer aesthetic, facial, and body treatments.",
      },
      {
        question: "Do you offer follow-up after treatment?",
        answer: "Yes, we provide personalized follow-up for each patient.",
      },
      {
        question: "Do you offer free consultations?",
        answer: "Yes, the first consultation is free for some services.",
      },
    ],
  };
  const faqPlaceholders = placeholders[lang] || placeholders["es"];
});
