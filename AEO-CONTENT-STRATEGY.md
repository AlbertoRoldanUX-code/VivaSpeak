# Estrategia AEO — Guía de contenido para vivaspeak.com

Documento de referencia para optimizar el sitio frente a motores de respuesta (Google AI Overviews, ChatGPT, Perplexity, Alexa, Siri) basándose en las preguntas reales que hacen los compradores de agentes de IA.

Fecha: marzo 2026

---

## Principio rector

Los motores de respuesta citan al sitio que responde la pregunta de forma más directa, estructurada y fiable. No citan al que más vende — citan al que mejor explica.

Cada pregunta de esta guía debe tener:

1. Una respuesta visible en el HTML (párrafo o sección con heading propio).
2. Un schema estructurado que la respalde (FAQPage, HowTo, speakable).
3. Un tono informativo primero, comercial después.

---

## Cómo usar este documento

- Cada bloque temático lista las preguntas que los compradores hacen.
- Para cada bloque se indica: dónde responderla (página existente o nueva), qué schema usar, y un borrador de respuesta optimizada para extracción por IA.
- Las respuestas borrador están escritas para ser concisas (2-4 frases) porque los motores de respuesta extraen fragmentos cortos.

---

## Bloque 1 — Valor y ROI

### Preguntas a responder

| Pregunta                                             | Dónde responder                | Schema              |
| ---------------------------------------------------- | ------------------------------ | ------------------- |
| ¿Qué problema concreto resuelve un agente de voz IA? | Homepage FAQ + blog post nuevo | FAQPage + speakable |
| ¿Cuánto dinero o tiempo ahorra un agente de voz IA?  | Homepage FAQ + `/recursos/`    | FAQPage             |
| ¿En cuánto tiempo se ven resultados (ROI)?           | Homepage FAQ                   | FAQPage             |
| ¿Genera ingresos o solo reduce costes?               | Blog post nuevo                | FAQPage + speakable |

### Respuestas borrador (optimizadas para extracción)

**¿Qué problema concreto resuelve un agente de voz IA?**

> Un agente de voz IA atiende llamadas y mensajes de WhatsApp automáticamente cuando el equipo no puede: fuera de horario, en horas punta o cuando la recepción está ocupada. Cualifica contactos, agenda citas y envía resúmenes al equipo. El problema que resuelve es la pérdida de leads y citas por llamadas no atendidas.

**¿Cuánto dinero o tiempo ahorra?**

> Depende del volumen de llamadas. Un negocio que recibe 30-50 llamadas diarias y pierde el 30% puede recuperar entre 10 y 15 citas semanales. En sectores como inmobiliaria o clínicas, eso equivale a entre 500 € y 3.000 € mensuales en ingresos recuperados. El agente cuesta entre 150 € y 400 €/mes.

**¿En cuánto tiempo se ven resultados?**

> Desde la primera semana. El agente empieza a atender llamadas en 24-48 horas tras la configuración. Los KPIs (llamadas atendidas, citas creadas, leads cualificados) son visibles en el panel desde el primer día.

**¿Genera ingresos o solo reduce costes?**

> Ambos. Reduce costes al eliminar la necesidad de contratar recepción adicional o call center. Genera ingresos al convertir llamadas perdidas en citas confirmadas y leads cualificados que antes se perdían.

### Acción concreta

- Añadir estas 4 preguntas al array `schemaFaq` de la homepage (`index.astro` y `en/index.astro`).
- Crear un blog post: "¿Cuánto ahorra un agente de voz IA? Datos reales por sector".
- Marcar las respuestas con `speakable` en el schema.

---

## Bloque 2 — Casos de uso

### Preguntas a responder

| Pregunta                                                     | Dónde responder                             | Schema           |
| ------------------------------------------------------------ | ------------------------------------------- | ---------------- |
| ¿Para qué lo usan otras empresas como la mía?                | Páginas verticales existentes + testimonios | Review + FAQPage |
| ¿Sirve para atención al cliente, ventas, operaciones o todo? | Homepage sección "Qué puede hacer" + FAQ    | FAQPage          |
| ¿Puede automatizar X proceso específico?                     | FAQ de cada vertical                        | FAQPage          |

### Respuestas borrador

**¿Para qué lo usan otras empresas?**

> Clínicas lo usan para agendar citas y responder dudas de pacientes 24/7. Inmobiliarias lo usan para filtrar llamadas de alquiler y venta, precualificar leads y agendar visitas. Despachos de abogados lo usan para clasificar consultas por urgencia y especialidad. Empresas de servicios lo usan para atender llamadas fuera de horario y captar leads de formularios.

**¿Sirve para atención al cliente, ventas u operaciones?**

> Principalmente para atención al cliente y ventas entrantes: responder llamadas, cualificar leads, agendar citas y enviar seguimientos. También se usa en operaciones internas como filtrado de candidatos en RRHH y gestión de recordatorios.

### Acción concreta

- La homepage ya tiene la sección "Qué puede hacer VivaSpeak" — falta convertirla en FAQ schema (actualmente solo es HTML visual).
- Cada página vertical debería tener al menos una pregunta tipo "¿Para qué tipo de [sector] funciona mejor?" en su FAQ.
- Añadir datos concretos a los testimonios existentes (números, porcentajes) para que los motores de respuesta los extraigan como evidencia.

---

## Bloque 3 — Implementación

### Preguntas a responder

| Pregunta                           | Dónde responder                                | Schema          |
| ---------------------------------- | ---------------------------------------------- | --------------- |
| ¿Cuánto tarda en implementarse?    | Homepage FAQ + cada vertical                   | FAQPage         |
| ¿Necesito equipo técnico?          | Homepage FAQ                                   | FAQPage         |
| ¿Se integra con mi CRM/agenda/ERP? | `/recursos/` + FAQ homepage                    | FAQPage         |
| ¿Qué datos necesito darle?         | Blog post `base-conocimiento-agente-voz` + FAQ | FAQPage + HowTo |

### Respuestas borrador

**¿Cuánto tarda en implementarse?**

> Entre 24 horas y una semana, dependiendo de las integraciones. La configuración básica (agente de voz + base de conocimiento) se activa en 24-48 horas. Integraciones con CRM, software de agenda o WhatsApp Business pueden tardar 3-5 días.

**¿Necesito equipo técnico?**

> No. La configuración la hace el equipo de VivaSpeak. El cliente solo necesita proporcionar la información del negocio (servicios, horarios, preguntas frecuentes) y compartir acceso al calendario o CRM si quiere integración.

**¿Se integra con mis sistemas actuales?**

> Sí. Se integra con Google Calendar, Microsoft Bookings, Salesforce, HubSpot y CRMs con API. También con WhatsApp Business API y software de agenda médica. Para sistemas sin API, se pueden usar webhooks o integraciones personalizadas.

**¿Qué datos necesito darle?**

> Una base de conocimiento con: descripción del negocio, servicios/productos con precios y duraciones, preguntas frecuentes, horarios y ubicaciones. Cuanto más estructurada esté la información, mejor responde el agente.

### Acción concreta

- Añadir "¿Cuánto tarda en implementarse?" y "¿Necesito equipo técnico?" al FAQ de la homepage (actualmente no están).
- En el blog post `base-conocimiento-agente-voz`, añadir schema `HowTo` para la sección "Estructura recomendada".
- Crear una sección "Integraciones" en `/recursos/` con lista de sistemas compatibles (actualmente solo está en `/clinica/`).

---

## Bloque 4 — Coste

### Preguntas a responder

| Pregunta                                    | Dónde responder               | Schema                                    |
| ------------------------------------------- | ----------------------------- | ----------------------------------------- |
| ¿Cuánto cuesta realmente? (setup + mensual) | Homepage sección precio + FAQ | FAQPage + SoftwareApplication (ya existe) |
| ¿Es más barato que contratar a una persona? | Blog post nuevo               | FAQPage + speakable                       |
| ¿Hay costes ocultos?                        | Homepage FAQ                  | FAQPage                                   |

### Respuestas borrador

**¿Cuánto cuesta un agente de voz IA?**

> La mayoría de clientes pagan entre 150 € y 400 € al mes. El precio depende del volumen de llamadas, el número de canales (voz, WhatsApp, chat web) y las integraciones necesarias. No hay coste de setup en la mayoría de casos.

**¿Es más barato que contratar a una persona?**

> Sí. Un recepcionista a tiempo parcial cuesta entre 800 € y 1.200 €/mes en España. Un agente de voz IA cuesta entre 150 € y 400 €/mes, funciona 24/7 y puede atender múltiples llamadas simultáneas. No sustituye al equipo humano — complementa la atención cuando el equipo no puede responder.

**¿Hay costes ocultos?**

> No. El precio incluye el agente, el panel de control, las transcripciones y el soporte. Las integraciones estándar (Google Calendar, WhatsApp) están incluidas. Integraciones personalizadas con CRMs específicos pueden tener un coste adicional que se define antes de empezar.

### Acción concreta

- Añadir "¿Hay costes ocultos?" al FAQ de la homepage.
- Crear blog post: "Agente de voz IA vs recepcionista: comparativa real de costes".
- Actualizar el schema `SoftwareApplication` para reflejar el rango de precios (actualmente dice "249" fijo).

---

## Bloque 5 — Control y fiabilidad

### Preguntas a responder

| Pregunta                            | Dónde responder          | Schema              |
| ----------------------------------- | ------------------------ | ------------------- |
| ¿Qué pasa si el agente se equivoca? | Homepage FAQ + blog post | FAQPage             |
| ¿Puedo revisar lo que hace?         | Homepage FAQ             | FAQPage             |
| ¿Qué nivel de precisión tiene?      | Blog post nuevo          | speakable           |
| ¿Puede inventarse cosas (alucinar)? | Homepage FAQ + blog post | FAQPage + speakable |

### Respuestas borrador

**¿Qué pasa si el agente se equivoca?**

> El agente solo responde con información de la base de conocimiento que tú defines. Si no tiene la respuesta, lo dice y ofrece transferir a un humano. Todas las llamadas quedan grabadas y transcritas en el panel para que puedas revisar cualquier interacción.

**¿Puedo revisar lo que hace?**

> Sí. Cada llamada y mensaje queda registrado en el panel con grabación, transcripción completa y resumen automático. Puedes filtrar por fecha, resultado y tipo de consulta.

**¿Puede inventarse cosas?**

> El agente está limitado a la información de tu base de conocimiento. No genera respuestas libres como ChatGPT. Si la pregunta no está cubierta en la base de conocimiento, el agente indica que no tiene esa información y ofrece alternativas (transferir, dejar mensaje, enviar email).

### Acción concreta

- Estas preguntas son críticas para la adopción y actualmente no están en ningún FAQ del sitio. Añadirlas a la homepage y a cada vertical.
- Crear blog post: "¿Puede un agente de voz IA inventarse cosas? Cómo funciona el control de respuestas".
- Este es contenido de alta confianza — exactamente lo que los motores de respuesta buscan para citar cuando alguien pregunta "¿son fiables los agentes de voz IA?".

---

## Bloque 6 — Personalización

### Preguntas a responder

| Pregunta                             | Dónde responder           | Schema  |
| ------------------------------------ | ------------------------- | ------- |
| ¿Se adapta a mi negocio específico?  | FAQ homepage + verticales | FAQPage |
| ¿Puede hablar en mi tono/marca?      | FAQ homepage              | FAQPage |
| ¿Puede seguir mis procesos internos? | FAQ verticales            | FAQPage |

### Respuestas borrador

**¿Se adapta a mi negocio?**

> Sí. Cada agente se configura con la información, el tono y los procesos del negocio. Tú defines qué preguntas hace, qué información da, cuándo transfiere a un humano y cómo agenda citas. No es un agente genérico — se entrena con tu base de conocimiento.

**¿Puede hablar en mi tono de marca?**

> Sí. El tono de voz se define en la base de conocimiento: formal, cercano, comercial o neutro. El agente adapta su forma de hablar según lo que configures.

### Acción concreta

- Añadir "¿Se puede personalizar para mi negocio?" al FAQ de la homepage (actualmente no está).
- El blog post `base-conocimiento-agente-voz` ya cubre parte de esto — enlazarlo desde el FAQ como respuesta extendida.

---

## Bloque 7 — Seguridad y legal

### Preguntas a responder

| Pregunta                               | Dónde responder                           | Schema  |
| -------------------------------------- | ----------------------------------------- | ------- |
| ¿Qué pasa con mis datos?               | FAQ homepage + `/politica-de-privacidad/` | FAQPage |
| ¿Cumple con RGPD?                      | FAQ homepage + `/aviso-legal/`            | FAQPage |
| ¿Dónde se almacenan los datos?         | FAQ homepage                              | FAQPage |
| ¿Puede acceder a información sensible? | FAQ homepage                              | FAQPage |

### Respuestas borrador

**¿Cumple con RGPD?**

> Sí. El agente incluye aviso legal automático al inicio de cada llamada informando de la grabación. Los datos se procesan conforme al RGPD. El cliente puede solicitar eliminación de datos en cualquier momento.

**¿Dónde se almacenan los datos?**

> Los datos se almacenan en servidores seguros. Las grabaciones, transcripciones y datos de contacto son accesibles solo desde el panel del cliente con autenticación.

### Acción concreta

- La página de abogados ya menciona RGPD y aviso legal — pero no está en el FAQ schema. Añadirlo.
- Añadir "¿Cumple con RGPD?" al FAQ de la homepage. Es una pregunta que los motores de respuesta europeos priorizan.
- Considerar crear una página `/seguridad/` o sección dedicada que centralice toda la información de seguridad y cumplimiento.

---

## Bloque 8 — Escalabilidad

### Preguntas a responder

| Pregunta                                 | Dónde responder | Schema  |
| ---------------------------------------- | --------------- | ------- |
| ¿Puede manejar muchos clientes a la vez? | FAQ homepage    | FAQPage |
| ¿Qué pasa si crezco?                     | FAQ homepage    | FAQPage |

### Respuestas borrador

**¿Puede manejar muchas llamadas simultáneas?**

> Sí. A diferencia de un equipo humano, el agente puede atender múltiples llamadas y conversaciones de WhatsApp al mismo tiempo. No hay cola de espera ni llamadas perdidas por línea ocupada.

**¿Qué pasa si mi negocio crece?**

> El precio se ajusta por volumen. Si necesitas más capacidad, más idiomas o más integraciones, se actualiza el plan sin cambiar la configuración existente.

### Acción concreta

- Añadir ambas preguntas al FAQ de la homepage.
- El testimonio de Juan Taborda (200+ solicitudes por vivienda) ya demuestra escalabilidad — referenciarlo en la respuesta.

---

## Bloque 9 — Diferencia con otras soluciones

### Preguntas a responder

| Pregunta                                         | Dónde responder | Schema              |
| ------------------------------------------------ | --------------- | ------------------- |
| ¿En qué se diferencia de un chatbot tradicional? | Blog post nuevo | FAQPage + speakable |
| ¿Por qué no usar ChatGPT directamente?           | Blog post nuevo | FAQPage + speakable |
| ¿Es mejor que un asistente virtual humano?       | Blog post nuevo | FAQPage             |

### Respuestas borrador

**¿En qué se diferencia de un chatbot?**

> Un chatbot tradicional responde texto con reglas fijas (si dice X, responde Y). Un agente de voz IA mantiene conversaciones naturales por teléfono, entiende contexto, accede a sistemas reales (agenda, CRM) y ejecuta acciones (crear citas, enviar emails, transferir llamadas). No es un árbol de decisiones — es una conversación real.

**¿Por qué no usar ChatGPT directamente?**

> ChatGPT es un modelo de lenguaje general. No puede atender llamadas telefónicas, conectarse a tu agenda, crear citas en tu CRM ni enviar WhatsApp. Un agente de voz IA usa modelos de lenguaje como base pero añade integración con telefonía, calendarios, CRMs y canales de mensajería.

**¿Es mejor que un asistente virtual humano?**

> No es mejor ni peor — es complementario. Un agente de voz IA atiende 24/7, no tiene horario, maneja múltiples llamadas simultáneas y cuesta menos. Un humano entiende matices complejos y puede improvisar. Lo ideal es que el agente IA atienda el primer contacto y transfiera al humano cuando la situación lo requiere.

### Acción concreta

- Este es el bloque con mayor potencial AEO. Estas preguntas comparativas son exactamente las que los motores de respuesta necesitan contestar y actualmente no hay contenido en el sitio que las cubra.
- Crear 2 blog posts:
  - "Agente de voz IA vs chatbot: diferencias reales"
  - "Agente de voz IA vs ChatGPT: por qué no es lo mismo"
- Añadir "¿En qué se diferencia de un chatbot?" al FAQ de la homepage.

---

## Bloque 10 — Mantenimiento y soporte

### Preguntas a responder

| Pregunta                           | Dónde responder | Schema  |
| ---------------------------------- | --------------- | ------- |
| ¿Quién lo mantiene?                | FAQ homepage    | FAQPage |
| ¿Necesita entrenamiento continuo?  | FAQ homepage    | FAQPage |
| ¿Qué pasa si cambian mis procesos? | FAQ homepage    | FAQPage |

### Respuestas borrador

**¿Quién lo mantiene?**

> El equipo de VivaSpeak se encarga del mantenimiento técnico. El cliente solo necesita mantener actualizada su base de conocimiento (precios, horarios, servicios) desde el panel.

**¿Necesita entrenamiento continuo?**

> No en el sentido técnico. Si cambias servicios, precios u horarios, actualizas la base de conocimiento desde el panel y el agente lo refleja inmediatamente. No necesitas programar ni entrenar modelos.

### Acción concreta

- Añadir estas preguntas al FAQ de la homepage. Actualmente no hay ninguna pregunta sobre mantenimiento.

---

## Bloque 11 — Riesgo

### Preguntas a responder

| Pregunta                      | Dónde responder | Schema    |
| ----------------------------- | --------------- | --------- |
| ¿Qué pasa si dejo de usarlo?  | FAQ homepage    | FAQPage   |
| ¿Estoy atado a la plataforma? | FAQ homepage    | FAQPage   |
| ¿Es estable esta tecnología?  | Blog post       | speakable |

### Respuestas borrador

**¿Qué pasa si dejo de usarlo?**

> Sin permanencia. Si cancelas, las llamadas vuelven a tu número original. Puedes exportar el historial de contactos y transcripciones desde el panel antes de cancelar.

**¿Estoy atado a la plataforma?**

> No. No hay permanencia ni penalización por cancelar. Tu número de teléfono sigue siendo tuyo. Los datos de contacto son exportables.

### Acción concreta

- Añadir "¿Hay permanencia?" al FAQ de la homepage. La respuesta "sin permanencia" ya aparece en la página de inmobiliaria pero no está en el FAQ principal ni tiene schema.

---

## Plan de ejecución

### Fase 1 — FAQ schema (1-2 días)

Ampliar el array `schemaFaq` de la homepage con las preguntas de mayor impacto que actualmente faltan:

1. ¿Qué problema concreto resuelve un agente de voz IA?
2. ¿Cuánto tarda en implementarse?
3. ¿Necesito equipo técnico?
4. ¿Hay costes ocultos?
5. ¿Qué pasa si el agente se equivoca o inventa cosas?
6. ¿Se puede personalizar para mi negocio?
7. ¿Cumple con RGPD?
8. ¿Puede manejar muchas llamadas a la vez?
9. ¿En qué se diferencia de un chatbot?
10. ¿Quién lo mantiene?
11. ¿Hay permanencia?

Cada pregunta debe tener:

- Entrada en el array `schemaFaq` del frontmatter.
- Sección `<details>` visible en el HTML.
- Respuesta de 2-4 frases, directa, sin jerga.

Repetir para la versión inglesa (`en/index.astro`).

### Fase 2 — Corregir schemas existentes (1 día)

- Añadir `schemaFaq` a `abogados.astro` (ya tiene FAQ en HTML, falta schema).
- Crear FAQ + schema en `salud.astro`.
- Añadir `dateModified` a los 8 blog posts.
- Localizar descripción del Organization schema (español/inglés).

### Fase 3 — Blog posts nuevos (1-2 semanas)

Prioridad por potencial AEO:

1. "Agente de voz IA vs chatbot: diferencias reales" → cubre Bloque 9
2. "Agente de voz IA vs ChatGPT: por qué no es lo mismo" → cubre Bloque 9
3. "¿Cuánto cuesta un agente de voz IA? Comparativa real" → cubre Bloques 1 y 4
4. "¿Puede un agente de voz IA inventarse cosas?" → cubre Bloque 5
5. "Agente de voz IA vs recepcionista: cuándo usar cada uno" → cubre Bloques 4 y 9

Cada post debe incluir:

- Schema `Article` con `datePublished` y `dateModified`.
- Schema `FAQPage` con las 2-3 preguntas principales del post.
- Schema `speakable` apuntando al primer párrafo (definición) y a las respuestas FAQ.
- Breadcrumbs.
- Tono informativo, no promocional. Mencionar VivaSpeak solo en la conclusión o CTA final.

### Fase 4 — Schemas avanzados (3-5 días)

- `HowTo` en homepage ("Cómo funciona") y blog post `agente-voz-ia`.
- `VideoObject` en todos los embeds de YouTube.
- `Review` en testimonios.
- `Service` como `mainEntity` en cada página vertical.
- `speakable` en las respuestas FAQ y primeros párrafos de blog posts.

### Fase 5 — Página de seguridad y confianza (1 semana)

Crear `/seguridad/` (y `/en/security/`) que centralice:

- Cumplimiento RGPD.
- Dónde se almacenan los datos.
- Cómo funciona el aviso legal en llamadas.
- Qué datos se recogen y cómo se eliminan.
- Política de grabación.

Esta página se convierte en la referencia que los motores de respuesta citan cuando alguien pregunta "¿es seguro usar un agente de voz IA?" o "¿cumple RGPD?".

---

## Métricas para medir el impacto

| Métrica                              | Herramienta               | Qué buscar                                                                      |
| ------------------------------------ | ------------------------- | ------------------------------------------------------------------------------- |
| Impresiones en queries de pregunta   | Google Search Console     | Aumento en queries tipo "qué es", "cómo", "cuánto cuesta"                       |
| CTR en queries de pregunta           | Google Search Console     | Si baja el CTR pero suben impresiones → AI Overview está mostrando tu contenido |
| Aparición en AI Overviews            | Búsqueda manual + SEMrush | Verificar si Google cita vivaspeak.com en respuestas generadas                  |
| Citaciones en Perplexity             | Búsqueda manual           | Buscar las preguntas clave y ver si Perplexity cita el sitio                    |
| Rich results                         | Google Rich Results Test  | Verificar que los schemas nuevos generan resultados enriquecidos                |
| Tráfico orgánico a blog posts nuevos | Google Analytics          | Medir si los posts comparativos atraen tráfico de cola larga                    |
