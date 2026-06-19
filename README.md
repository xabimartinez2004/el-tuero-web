# Bar El Tuero — Web

Web de una sola página para Bar El Tuero (Aldea del Cano, Cáceres).
HTML5 + Tailwind CSS (vía CDN) + JavaScript vainilla. Sin build, sin dependencias que instalar.

## Estructura del proyecto

```
bar-el-tuero/
├── index.html        ← Toda la maquetación, estilos y SEO
├── eventos.js         ← Array de eventos (edítalo para actualizar el tablón)
├── assets/
│   ├── img/            ← Aquí van tus fotos (interior, favicon, og-image, eventos...)
│   └── carta-el-tuero.pdf   ← (opcional) tu carta en PDF
└── README.md
```

## Qué tienes que editar tú

Busca en el código los comentarios que empiezan por `👉` — son los puntos exactos
donde debes pegar tus datos reales:

| Dónde | Qué pegar |
|---|---|
| `index.html` `<head>` | Imagen Open Graph (`og:image`), favicon |
| `index.html` JSON-LD | Teléfono, dirección exacta, coordenadas GPS, horarios reales, Instagram/Facebook |
| `index.html` sección "La casa" | Foto del interior del bar |
| `index.html` sección "Carta" | Enlace a tu PDF de carta (si lo tienes) |
| `index.html` sección "Contacto" | Teléfono, enlace de Instagram, enlace/iframe de Google Maps |
| `eventos.js` | Tus eventos reales: título, fecha, descripción y foto de cada uno |

### Cómo conseguir el iframe correcto de Google Maps
1. Busca "Bar El Tuero" (o tu dirección) en Google Maps.
2. Clic en **Compartir** → pestaña **Insertar un mapa** → copia el código `<iframe>`.
3. Sustituye el `<iframe>` que hay en la sección `#contacto` por el tuyo.

### Cómo añadir un evento nuevo
Abre `eventos.js` y copia un bloque `{ ... }` dentro del array, cambiando los datos:

```js
{
  titulo: "Cata de quesos de la Sierra",
  fecha: "Sábado 12 de julio · 13:00h",
  descripcion: "Selección de quesos artesanos de la zona con maridaje.",
  urlImagen: "assets/img/eventos/cata-quesos.jpg",
},
```

La web lo mostrará automáticamente, sin tocar el HTML.

---

## Despliegue en Netlify (conectando GitHub)

### 1. Sube el proyecto a GitHub
Si aún no tienes el repositorio creado:

```bash
cd bar-el-tuero
git init
git add .
git commit -m "Primera versión web Bar El Tuero"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/bar-el-tuero.git
git push -u origin main
```

(Sustituye `TU_USUARIO` por tu usuario de GitHub; antes crea el repositorio vacío
desde github.com → **New repository**, sin README ni licencia para evitar conflictos.)

### 2. Conecta Netlify con tu cuenta de GitHub
1. Entra en **[netlify.com](https://www.netlify.com)** y haz login (puedes usar "Sign up with GitHub" directamente).
2. En el panel, pulsa **"Add new site" → "Import an existing project"**.
3. Elige **GitHub** como proveedor y autoriza el acceso (Netlify te pedirá permiso para leer tus repositorios).
4. Selecciona el repositorio `bar-el-tuero` de la lista.

### 3. Configuración de build
Como es un proyecto estático sin build, deja:
- **Build command**: *(vacío)*
- **Publish directory**: `.` (la raíz del proyecto, donde está `index.html`)

Pulsa **"Deploy site"**.

### 4. Despliegue automático
A partir de aquí, cada vez que hagas `git push` a la rama `main`, Netlify
reconstruye y publica la web sola, en 1-2 minutos. No necesitas volver a
subir nada manualmente.

### 5. Dominio propio (opcional)
1. En el panel del sitio → **Domain settings** → **Add a domain**.
2. Si ya tienes un dominio (ej. `barteltuero.com`) comprado en otro proveedor,
   Netlify te dará los registros DNS (normalmente un `CNAME` o registros `A`)
   que debes añadir en el panel de tu proveedor de dominio.
3. Netlify emite el certificado HTTPS gratis automáticamente en cuanto el DNS propaga.

### 6. Variables y notas finales
- No hay backend ni base de datos: toda la web es estática, así que no hace
  falta configurar variables de entorno.
- Recuerda comprimir las imágenes antes de subirlas (herramientas como
  [TinyPNG](https://tinypng.com)) para que la web cargue rápido en móvil.
- Antes de publicar, sustituye **todas** las URLs de ejemplo
  (`https://www.barteltuero.com`, el teléfono `600 000 000`, el usuario de
  Instagram, etc.) por tus datos reales — están marcadas con `👉` en el código.
