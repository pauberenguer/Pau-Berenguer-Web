# Desplegar Landing en GoHighLevel — Guía Paso a Paso

## Estructura de archivos generados

```
ghl-deploy/
├── INSTRUCCIONES.md          ← Este archivo
├── HEAD_CODE.html            ← Para Tracking Code > Header (IGUAL en las 4 páginas)
├── CUSTOM_CSS.css            ← Para Custom CSS (IGUAL en las 4 páginas)
├── 1-landing/
│   └── BODY_CONTENT.html     ← Para Custom JS/HTML element (landing principal)
├── 2-gracias/
│   └── BODY_CONTENT.html     ← Para Custom JS/HTML element (página de gracias)
├── 3-politica-privacidad/
│   └── BODY_CONTENT.html     ← Para Custom JS/HTML element (política privacidad)
└── 4-terminos/
    └── BODY_CONTENT.html     ← Para Custom JS/HTML element (términos)
```

---

## PASO 1: Subir imágenes a GHL Media Library

1. Ve a **Marketing > Media** (o la sección Media de tu cuenta)
2. Sube estos 4 archivos desde tu proyecto:
   - `favicon-32.png`
   - `favicon-192.png`
   - `apple-touch-icon.png`
   - `pau-berenguer.JPG`
3. Copia la URL de cada imagen (click derecho > Copiar URL)
4. Guarda las 4 URLs, las necesitarás en los siguientes pasos

---

## PASO 2: Crear el Funnel

1. Ve a **Sites > Funnels > + Create Funnel**
2. Elige **"Start from scratch"**
3. Nombra el funnel: "Landing Clase IA"
4. Crea 4 Steps (páginas), cada uno con plantilla "Blank":
   - Step 1: **Landing** (path: `/` o raíz)
   - Step 2: **Gracias** (path: `/gracias`)
   - Step 3: **Política de Privacidad** (path: `/politica-privacidad`)
   - Step 4: **Términos y Condiciones** (path: `/terminos`)
5. Ve a **Settings > Domains** y asigna tu dominio

---

## PASO 3: Configurar cada página (repetir para las 4)

Para CADA página del funnel:

### A. Tracking Code > Header

1. Abre la página en el editor
2. Ve a **Settings** (icono de engranaje) > **Tracking Code**
3. En el campo **Header Code**, pega el contenido de `HEAD_CODE.html`
4. Las URLs de favicon ya están configuradas con las de GHL Media Library (no necesitas cambiar nada)

### B. Custom CSS

1. En **Settings** > **Custom CSS** (o Typography/Styling según versión de GHL)
2. Pega el contenido COMPLETO de `CUSTOM_CSS.css`

### C. Body Content (Custom HTML Element)

1. En el editor visual, **elimina todas las secciones** que GHL pone por defecto
2. Añade un elemento **"Custom JS/HTML"** (está en Elements > Advanced o Add Elements)
3. Ponlo a **ancho completo (Full Width)**, sin padding ni margin
4. Abre el elemento y pega el contenido del archivo BODY_CONTENT.html correspondiente:
   - Landing → `1-landing/BODY_CONTENT.html`
   - Gracias → `2-gracias/BODY_CONTENT.html`
   - Política → `3-politica-privacidad/BODY_CONTENT.html`
   - Términos → `4-terminos/BODY_CONTENT.html`
5. La foto de Pau ya tiene la URL de GHL Media Library configurada (no necesitas cambiar nada)

---

## PASO 4: Conectar el formulario con GHL (Webhook)

1. Ve a **Automation > Workflows**
2. Crea un nuevo Workflow
3. Añade un trigger **"Inbound Webhook"**
4. Copia la URL del webhook
5. En los archivos BODY_CONTENT de la landing y gracias, busca `TU_WEBHOOK_GHL_AQUI` y reemplázalo por la URL real del webhook
6. Configura las acciones del workflow (crear contacto, enviar email de confirmación, etc.)

---

## PASO 5: Resolver posibles problemas de CSS

GHL inyecta su propio CSS que puede interferir. Si ves estilos rotos, añade esto al PRINCIPIO del Custom CSS:

```css
/* Reset GHL styles */
body { margin: 0 !important; padding: 0 !important; }
#preview-container, .hl_page-preview, .hl_page-preview--content { all: unset !important; display: block !important; }
.hl_page-preview--content > .container--fluid { padding: 0 !important; max-width: none !important; }
```

---

## Notas importantes

- Los enlaces entre páginas ya usan rutas de funnel (`/gracias`, `/politica-privacidad`, `/terminos`) en lugar de `.html`
- El tema por defecto es "d" (Vapor Clinic) y se guarda en localStorage
- El countdown de la página de gracias apunta al 7 de Abril de 2026 a las 19:00h CEST
- Las fuentes de Google y GSAP se cargan desde CDN (no necesitan subirse)
- El formulario hace POST al webhook y redirige a `/gracias` automáticamente
