/**
 * eventos.js
 * ──────────────────────────────────────────────────────────────
 * BAR EL TUERO — Datos de eventos
 *
 * Edita este array para añadir, quitar o modificar eventos.
 * No toques el HTML: la web se actualiza sola al guardar este archivo.
 *
 * Campos de cada evento:
 *   titulo      → Nombre del evento (texto corto)
 *   fecha       → Formato libre, ej: "Sábado 28 de junio · 21:00h"
 *   descripcion → 1-2 frases, se recorta visualmente si es muy larga
 *   urlImagen   → Ruta o URL de la imagen del evento (ver nota abajo)
 *
 * 📸 IMÁGENES:
 *   Sube tus fotos a la carpeta /assets/img/eventos/ y referencia aquí
 *   la ruta relativa, ej: "assets/img/eventos/concierto-flamenco.jpg"
 *   Tamaño recomendado: 800x600px (relación 4:3), formato .jpg o .webp
 *   optimizado a menos de 300kb para que la web cargue rápido.
 *
 *   Si no tienes foto todavía, deja la URL de placeholder que hay puesta;
 *   se sustituye sola por una imagen genérica de gastrobar.
 * ──────────────────────────────────────────────────────────────
 */

const eventos = [
  {
    titulo: "Noche de Migas y Vino de Pitarra",
    fecha: "Viernes 26 de junio · 21:30h",
    descripcion:
      "Migas extremeñas tradicionales acompañadas de nuestro vino de pitarra de la casa. Plazas limitadas, reserva en barra.",
    // 👉 PEGA AQUÍ LA RUTA DE TU IMAGEN (ej: "assets/img/eventos/migas.jpg")
    urlImagen:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Actuación en directo: Dúo La Dehesa",
    fecha: "Sábado 27 de junio · 22:00h",
    descripcion:
      "Música en vivo con guitarra y voz en nuestra terraza. Entrada libre hasta completar aforo.",
    // 👉 PEGA AQUÍ LA RUTA DE TU IMAGEN
    urlImagen:
      "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=800&auto=format&fit=crop",
  },
  {
    titulo: "Degustación de Ibéricos de la Dehesa",
    fecha: "Domingo 5 de julio · 13:00h",
    descripcion:
      "Cata de jamón, lomo y chorizo ibérico de bellota de productores locales de Aldea del Cano y alrededores.",
    // 👉 PEGA AQUÍ LA RUTA DE TU IMAGEN
    urlImagen:
      "https://images.unsplash.com/photo-1625938144755-652e08e359b7?q=80&w=800&auto=format&fit=crop",
  },
];
