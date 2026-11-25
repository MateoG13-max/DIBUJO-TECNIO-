# 📐 Dibujo Técnico — Sitio Web Educativo

> *"El arte del dibujo técnico es el lenguaje universal de la ingeniería."*  
> — Gaspard Monge

Sitio web educativo completo, moderno y responsivo dedicado al **Dibujo Técnico**: su historia, sus técnicas, sus normas internacionales y sus aplicaciones en las distintas ramas de la ingeniería y el diseño.

---

## 🎯 Descripción General

Este proyecto es una experiencia web de 4 páginas que cubre el mundo del dibujo técnico desde sus orígenes en la antigüedad hasta el diseño asistido por computadora (CAD/BIM). Está diseñado con una estética inspirada en planos arquitectónicos (blueprints), tablas de dibujo técnico y cuadrículas milimetradas.

### Páginas incluidas

| Página | Archivo | Descripción |
|--------|---------|-------------|
| **Inicio** | `index.html` | Hero animado, métricas, pilares del dibujo técnico |
| **Historia** | `historia.html` | Línea de tiempo interactiva: Antigüedad → Era Digital |
| **Galería** | `galeria.html` | Planos filtrables con lightbox y especificaciones técnicas |
| **Aplicaciones** | `aplicaciones.html` | Tabs interactivos por industria: Arquitectura, Mecánica, Civil, Electrónica, Producto |

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión / Uso |
|------------|--------------|
| **HTML5** | Semántico — `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`, `<dialog>` |
| **CSS3** | Variables custom (`--color-*`), Grid, Flexbox, `@keyframes`, `clamp()`, `backdrop-filter` |
| **JavaScript** | Vanilla ES2020 (IIFE) — sin frameworks, sin dependencias de runtime |
| **Google Fonts** | Space Grotesk · Inter · JetBrains Mono (CDN) |
| **SVG inline** | Ilustraciones técnicas vectoriales generadas en código |
| **Imágenes** | JPEG generadas por IA en `assets/imagenes/` |

> **Sin dependencias de build.** El proyecto se abre directamente en el navegador. No requiere Node.js, bundler ni servidor.

---

## 🎨 Paleta de Colores

```css
--color-primario:    #0F172A;   /* Oxford Navy   — fondo principal    */
--color-secundario:  #1D4ED8;   /* Cobalt Blue   — acentos primarios  */
--color-acento:      #0891B2;   /* Cyan técnico  — líneas y detalles  */
--color-coral:       #E11D48;   /* Coral/Rose    — énfasis y alertas  */
--color-ambar:       #D97706;   /* Amber         — métricas y badges  */
--color-texto:       #F1F5F9;   /* Slate 100     — texto principal    */
--color-superficie:  #1E293B;   /* Slate 800     — tarjetas y panels  */
```

---

## 🗂️ Arquitectura del Sistema

```
Sitio estático de 4 páginas
│
├── Capa de presentación (HTML)
│   ├── index.html          ← Página de inicio / landing
│   ├── historia.html       ← Línea de tiempo histórica
│   ├── galeria.html        ← Galería filtrable de planos
│   └── aplicaciones.html   ← Aplicaciones por industria (tabs)
│
├── Capa de estilos (CSS)
│   └── css/
│       └── estilos-principales.css   ← CSS compartido por las 4 páginas
│
├── Capa lógica (JavaScript)
│   └── js/
│       └── aplicacion.js   ← Lógica compartida: datos + interacciones
│
└── Recursos estáticos
    └── assets/
        └── imagenes/       ← 8 imágenes JPEG de planos y portadas
```

**Flujo de datos en JS:**  
`PLANS_DATA[]` / `HISTORICAL_ERAS[]` / `APPLICATIONS_DATA[]` (arrays constantes en `aplicacion.js`) → `renderXxx()` funciones → inyección DOM → event listeners para filtros, tabs y lightbox.

---

## 📁 Estructura de Carpetas

```
dibujo-tecnico/
│
├── index.html                                    # Inicio: hero, métricas, pilares
├── historia.html                                 # Historia: timeline interactivo
├── galeria.html                                  # Galería: grid filtrable + lightbox
├── aplicaciones.html                             # Aplicaciones: tabs por industria
│
├── css/
│   └── estilos-principales.css                   # Estilos globales del sitio
│
├── js/
│   └── aplicacion.js                             # Lógica e interactividad
│
├── assets/
│   └── imagenes/
│       ├── portada-tablero-isometrico.jpg        # Hero de página inicio
│       ├── historia-evolucion-dibujo.jpg         # Ilustración página historia
│       ├── aplicaciones-ingenieria-multidisciplinar.jpg  # Hero aplicaciones
│       ├── plano-acoplamiento-isometrico.jpg     # Galería: perspectiva isométrica
│       ├── plano-despiece-caja-reductora.jpg     # Galería: despiece mecánico
│       ├── plano-corte-valvula-hidraulica.jpg    # Galería: cortes y secciones
│       ├── plano-arquitectura-planta-estudio.jpg # Galería: plano arquitectónico
│       └── plano-detalle-constructivo-cubierta.jpg  # Galería: detalle constructivo
│
├── README.md                                     # Este archivo
└── .gitignore
```

---

## ⚙️ Instalación y Ejecución

### Opción A — Apertura directa (más simple)

```bash
# 1. Clona el repositorio
git clone https://github.com/MateoG13-max/DIBUJO-TECNIO-.git

# 2. Entra al directorio
cd DIBUJO-TECNIO-

# 3. Abre index.html en tu navegador preferido
# Windows:
start index.html
# macOS:
open index.html
# Linux:
xdg-open index.html
```

### Opción B — Servidor local (recomendado para evitar restricciones CORS)

```bash
# Con Python 3
python -m http.server 8080

# Con Node.js / npx
npx serve .

# Luego abre: http://localhost:8080
```

---

## 🔐 Variables de Entorno

> **No aplica.** Este es un sitio completamente estático. No requiere variables de entorno, claves de API, servidor backend ni base de datos. Todos los datos están embebidos directamente en `js/aplicacion.js`.

---

## 📋 Normas Técnicas Referenciadas

| Norma | Descripción |
|-------|-------------|
| **ISO 128** | Principios generales de representación (vistas y secciones) |
| **ISO 5456** | Métodos de proyección (ortogonal y perspectiva) |
| **DIN 276** | Costos de construcción (referenciada en planos de obra) |
| **ISO 1101** | Tolerancias geométricas en piezas mecánicas |
| **ANSI Y14.5** | Dimensionado y tolerancias (norma americana) |

---

## 🌟 Características Destacadas

- ✅ **100% responsivo** — diseño adaptado a móvil, tablet y escritorio
- ✅ **Sin dependencias de runtime** — funciona offline después de clonar
- ✅ **Galería filtrable** — botones de categoría con animación de entrada
- ✅ **Lightbox nativo** — elemento `<dialog>` HTML5 para ampliar planos
- ✅ **Tabs interactivos** — sección de aplicaciones con pestañas accesibles
- ✅ **Línea de tiempo** — 4 eras históricas con diseño de tarjetas 2×2
- ✅ **Animaciones CSS** — scroll-reveal, hover con líneas de cota, transiciones fluidas
- ✅ **Tipografía técnica** — JetBrains Mono para escalas, medidas y datos

---

## 👨‍💻 Créditos

Desarrollado como proyecto educativo completo sobre Dibujo Técnico.  
Imágenes generadas por inteligencia artificial.  
Iconografía mediante SVG inline y CSS puro.

---

## 📄 Licencia

MIT — libre para uso educativo y personal.
