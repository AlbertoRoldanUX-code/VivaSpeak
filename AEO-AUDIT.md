# Auditoría AEO — vivaspeak.com

Análisis de Answer Engine Optimization (AEO): cómo los motores de respuesta (Google AI Overviews, ChatGPT, Perplexity, Alexa, Siri) interpretan, extraen y citan el contenido de este sitio.

Fecha: marzo 2026

---

## Estado actual — Qué funciona bien

| Señal                         | Estado         | Detalle                                                                 |
| ----------------------------- | -------------- | ----------------------------------------------------------------------- |
| FAQPage schema                | ✅ Activo      | Homepage, `/clinica/`, `/inmobiliaria/`                                 |
| Article schema                | ✅ Activo      | 4 posts del blog (ES) + 4 (EN) con headline, datePublished, breadcrumbs |
| Organization + WebSite schema | ✅ Activo      | En todas las páginas vía `SchemaMarkup.astro`                           |
| SoftwareApplication schema    | ✅ Activo      | Precio, categoría, sistema operativo                                    |
| BreadcrumbList schema         | ✅ Activo      | Blog posts y páginas verticales                                         |
| Jerarquía de headings         | ✅ Correcta    | H1 → H2 → H3 consistente en blog y landings                             |
| Hreflang                      | ✅ Correcto    | ES ↔ EN con x-default apuntando a ES                                    |
| Canonical URLs                | ✅ Consistente | Definidas en todas las páginas                                          |
| Meta description              | ✅ Presente    | Todas las páginas tienen description única                              |
| Open Graph / Twitter Cards    | ✅ Completo    | Título, descripción, imagen, locale                                     |

---

## Oportunidades de mejora

### 1. Añadir schema `speakable`

**Impacto: Alto**
**Páginas afectadas:** Blog posts, secciones FAQ, página de inicio

Google usa `speakable` para identificar contenido apto para lectura en voz alta (Google Assistant, AI Overviews). Es la señal más directa para que un motor de respuesta cite un fragmento concreto.

**Qué hacer:**

- Añadir `speakable` con selectores CSS apuntando a los párrafos de definición y respuestas FAQ.
- Priorizar los blog posts y las secciones "Cómo funciona".

```json
{
  "@type": "WebPage",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".blog-article > p:first-of-type", ".faq-content"]
  }
}
```

---

### 2. Añadir schema `HowTo`

**Impacto: Alto**
**Páginas afectadas:** Homepage (sección "Cómo funciona VivaSpeak"), blog post `agente-voz-ia`

El contenido paso a paso ya existe en el HTML pero no tiene markup estructurado. Los motores de respuesta priorizan `HowTo` para consultas tipo "cómo funciona un agente de voz IA".

**Qué hacer:**

- Crear schema `HowTo` con `step` para cada paso de la sección "Cómo funciona".
- En el blog post `agente-voz-ia`, marcar la sección "Cómo funciona un agente de voz IA paso a paso" (6 pasos).

```json
{
  "@type": "HowTo",
  "name": "Cómo funciona un agente de voz IA",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "El cliente llama a tu número",
      "text": "Se redirige automáticamente al número del agente, sin cambiar tu número de siempre."
    }
  ]
}
```

---

### 3. Corregir `schemaFaq` ausente en páginas con FAQ visible

**Impacto: Alto**
**Páginas afectadas:** `/abogados/`, `/salud/`

La página de abogados tiene una sección FAQ completa en el HTML (4 preguntas con `<details>`) pero no pasa `schemaFaq` al Layout. Esto significa que el contenido visible no tiene respaldo en datos estructurados. Los motores de respuesta no pueden extraer esas FAQ de forma fiable.

`/salud/` directamente no tiene sección FAQ — debería tenerla dado que es un vertical con preguntas naturales (¿funciona sin internet?, ¿qué idiomas soporta?, ¿cómo se activa?).

**Qué hacer:**

- En `abogados.astro`: definir el array `schemaFaq` en el frontmatter y pasarlo al Layout.
- En `salud.astro`: crear sección FAQ + schema.

---

### 4. Añadir schema `VideoObject`

**Impacto: Medio-Alto**
**Páginas afectadas:** Homepage, `/clinica/`, `/inmobiliaria/`, `/en/`

Hay múltiples iframes de YouTube (demos, testimonios) sin markup estructurado. Los motores de respuesta usan `VideoObject` para mostrar vídeos en respuestas y para entender el contenido del vídeo sin reproducirlo.

**Qué hacer:**

- Añadir `VideoObject` por cada embed con: `name`, `description`, `thumbnailUrl`, `uploadDate`, `contentUrl`, `embedUrl`.

```json
{
  "@type": "VideoObject",
  "name": "Demo Clara VivaSpeak - Agente de voz IA para clínicas",
  "description": "Ejemplo real donde Clara atiende una llamada, resuelve dudas y agenda una cita.",
  "thumbnailUrl": "https://img.youtube.com/vi/_MwMo-mlBGQ/maxresdefault.jpg",
  "uploadDate": "2024-06-01",
  "contentUrl": "https://www.youtube.com/watch?v=_MwMo-mlBGQ",
  "embedUrl": "https://www.youtube.com/embed/_MwMo-mlBGQ"
}
```

---

### 5. Añadir schema `Review` / `AggregateRating`

**Impacto: Medio-Alto**
**Páginas afectadas:** Homepage, `/inmobiliaria/`

La sección de testimonios tiene citas reales de clientes con nombre, empresa y rol. Sin embargo, no hay markup `Review`. Los motores de respuesta usan esto para contestar "opiniones de VivaSpeak" o "¿funciona VivaSpeak?".

**Qué hacer:**

- Marcar cada testimonio como `Review` con `author`, `reviewBody`, `itemReviewed`.
- Opcionalmente, agregar `AggregateRating` en el `SoftwareApplication` schema existente.

---

### 6. Localizar la descripción del schema `Organization`

**Impacto: Medio**
**Páginas afectadas:** Todas (vía `SchemaMarkup.astro`)

La descripción del Organization schema está solo en inglés:

> "AI voice agents for calls, WhatsApp and email. 24/7 automated customer service."

El sitio principal es en español. Los motores de respuesta que sirven consultas en español pueden no asociar correctamente esta entidad.

**Qué hacer:**

- Pasar `lang` como prop a `SchemaMarkup.astro`.
- Usar descripción en español cuando `lang === "es"` y en inglés cuando `lang === "en"`.

---

### 7. Añadir `dateModified` a los artículos del blog

**Impacto: Medio**
**Páginas afectadas:** Los 4 blog posts (ES) + 4 (EN)

Todos los artículos tienen `datePublished` de mediados de 2024 pero ninguno tiene `dateModified`. Los motores de respuesta usan `dateModified` como señal de frescura. Un artículo sin fecha de modificación se percibe como potencialmente desactualizado.

**Qué hacer:**

- Añadir `dateModified` al objeto `schemaArticle` en cada blog post.
- Actualizar la fecha cada vez que se edite el contenido.

```js
const schemaArticle = {
  headline: title,
  description,
  datePublished: '2024-06-01',
  dateModified: '2026-03-15', // ← añadir esto
  image: 'https://vivaspeak.com/assets/og-image.png',
};
```

---

### 8. Añadir schema `DefinedTerm` para conceptos clave

**Impacto: Medio**
**Páginas afectadas:** Blog posts, `/sobre-nosotros/`

El sitio define repetidamente conceptos como "agente de voz IA", "base de conocimiento", "cualificación de leads". Marcarlos con `DefinedTerm` ayuda a los motores de respuesta a extraer definiciones cuando un usuario pregunta "¿qué es un agente de voz IA?".

**Qué hacer:**

- En el blog post `agente-voz-ia`, marcar la definición del primer párrafo como `DefinedTerm`.

```json
{
  "@type": "DefinedTerm",
  "name": "Agente de voz IA",
  "description": "Sistema que responde llamadas como un humano, entiende la conversación, accede a información real y ejecuta acciones."
}
```

---

### 9. Enriquecer el schema de la página "Sobre nosotros"

**Impacto: Medio**
**Páginas afectadas:** `/sobre-nosotros/`, `/en/about/`

Actualmente solo hereda el schema Organization genérico. Los motores de respuesta necesitan más señales de entidad para confiar en una fuente antes de citarla.

**Qué hacer:**

- Añadir `AboutPage` como tipo de página.
- Enriquecer Organization con: `areaServed`, `knowsLanguage`, `slogan`.

---

### 10. Crear contenido educativo y comparativo (no promocional)

**Impacto: Alto (a medio plazo)**
**Páginas afectadas:** Blog

Los 4 posts actuales son todos VivaSpeak-centric. Los motores de respuesta prefieren citar fuentes que explican conceptos de forma neutral. Cuando todo el contenido es promocional, los AI engines tienden a buscar fuentes más objetivas.

**Contenido sugerido:**

- "Agente de voz IA vs IVR tradicional: diferencias reales"
- "Agente de voz IA vs call center externalizado: cuándo usar cada uno"
- "Coste real de automatizar llamadas con IA en 2026"
- "Cómo elegir un agente de voz IA para tu negocio" (guía de compra neutral)

Estos artículos posicionan a VivaSpeak como fuente de referencia del sector, no solo como vendedor.

---

### 11. Añadir `sameAs` actualizados y verificar perfiles sociales

**Impacto: Bajo-Medio**
**Páginas afectadas:** `SchemaMarkup.astro`

El schema Organization incluye un enlace a Twitter (`twitter.com/vivaspeak`) pero el footer no enlaza a Twitter — solo Instagram, LinkedIn y YouTube. Si el perfil de Twitter no existe o está inactivo, es mejor eliminarlo del `sameAs`.

**Qué hacer:**

- Verificar que todos los perfiles en `sameAs` existen y están activos.
- Eliminar los que no existan.
- Considerar añadir el perfil de Google Business si existe.

---

### 12. Añadir `mainEntity` en páginas de vertical

**Impacto: Medio**
**Páginas afectadas:** `/clinica/`, `/inmobiliaria/`, `/abogados/`, `/salud/`

Cada página vertical describe un producto/servicio específico (Clara para clínicas, Laura para inmobiliarias). Añadir `mainEntity` de tipo `Service` o `Product` con `provider` apuntando al Organization ayuda a los motores de respuesta a entender la relación entre la entidad y el servicio.

```json
{
  "@type": "Service",
  "name": "Clara - Agente de voz IA para clínicas",
  "provider": { "@id": "https://vivaspeak.com/#organization" },
  "description": "Agente de voz IA que agenda citas, responde WhatsApp y reduce llamadas perdidas en clínicas.",
  "areaServed": "ES",
  "availableLanguage": ["es", "en"]
}
```

---

## Resumen de prioridades

| Prioridad              | Acción                                    | Esfuerzo |
| ---------------------- | ----------------------------------------- | -------- |
| 🔴 Alta                | Añadir `speakable` schema                 | Bajo     |
| 🔴 Alta                | Añadir `HowTo` schema                     | Bajo     |
| 🔴 Alta                | Corregir `schemaFaq` en abogados y salud  | Bajo     |
| 🟠 Media-Alta          | Añadir `VideoObject` schema               | Medio    |
| 🟠 Media-Alta          | Añadir `Review` / `AggregateRating`       | Medio    |
| 🟡 Media               | Localizar descripción Organization        | Bajo     |
| 🟡 Media               | Añadir `dateModified` a artículos         | Bajo     |
| 🟡 Media               | Añadir `DefinedTerm` schema               | Bajo     |
| 🟡 Media               | Enriquecer schema "Sobre nosotros"        | Bajo     |
| 🟡 Media               | Añadir `mainEntity` Service en verticales | Medio    |
| 🔵 Media (largo plazo) | Crear contenido educativo/comparativo     | Alto     |
| ⚪ Baja                | Verificar `sameAs` en Organization        | Bajo     |
