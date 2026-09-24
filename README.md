# Web de La Colmena CIA

Esta guía explica cómo actualizar la web sin necesidad de saber programar. La mayoría de los cambios se hacen en **dos lugares**:

- `src/data/site.ts`: textos generales, contacto, redes sociales y datos de la compañía.
- `src/content/works/`: obras, funciones de la agenda, fotos y dosieres.

> [!IMPORTANT]
> No edites `dist/`, `node_modules/`, el `index.html` de la carpeta principal ni las carpetas `css/` y `js/`. La web actual se genera desde `src/` y `public/`.

## La forma más sencilla: editar desde GitHub

1. Entra en el repositorio de GitHub.
2. Abre el archivo que quieras cambiar.
3. Pulsa el icono del lápiz (**Edit this file**).
4. Haz el cambio con cuidado, sin borrar comillas, comas, guiones ni espacios de sangrado.
5. Pulsa **Commit changes…**.
6. Escribe un resumen breve, por ejemplo `Actualizar próxima función`.
7. Confirma con **Commit changes**.

Si la web está conectada a un servicio de publicación automática, el cambio aparecerá en unos minutos. Si no aparece o GitHub marca un error, avisa a la persona responsable de la web e indica cuál fue el último cambio.

## Qué archivo hay que editar

| Quiero cambiar… | Archivo o carpeta |
| --- | --- |
| Nombre, descripción general o menú | `src/data/site.ts` |
| Correo, ciudad o Instagram | `src/data/site.ts` |
| Portada | `src/data/site.ts`, apartado `home` |
| Biografía, trayectoria o equipo | `src/data/site.ts`, apartado `company` |
| Datos de una obra | `src/content/works/nombre-de-la-obra.md` |
| Fechas de la agenda | El archivo de la obra correspondiente en `src/content/works/` |
| Fotos | `public/assets/images/` |
| Dosieres y fichas PDF | `public/assets/docs/` |
| Colores, tipografías o diseño | `public/css/main.css` (mejor pedir ayuda técnica) |

## Cambiar textos generales

Abre `src/data/site.ts`. Cada dato tiene un nombre a la izquierda y el texto visible entre comillas a la derecha:

```ts
generalEmail: 'contacto@lacolmenacia.com',
city: 'Sevilla, España',
```

Cambia solamente el contenido entre comillas. Conserva las comillas y la coma final:

```ts
generalEmail: 'nuevo@correo.com',
city: 'Málaga, España',
```

Los textos de varias líneas aparecen como una lista. Cada párrafo debe conservar sus comillas y su coma:

```ts
companyParagraphs: [
  'Primer párrafo.',
  'Segundo párrafo.',
],
```

### Mostrar u ocultar una página del menú

En `navLinks`, las líneas que empiezan por `//` están ocultas:

```ts
// { href: '/talleres/', label: 'Talleres' },
```

Para mostrar la página, borra solamente `//`:

```ts
{ href: '/talleres/', label: 'Talleres' },
```

Para ocultarla, añade `//` al principio. Las páginas de Talleres y Prensa existen aunque ahora no aparezcan en el menú.

### Cambiar redes sociales

En `socialLinks`, modifica el enlace completo que aparece en `href`. Para activar una red oculta, elimina `//` al principio de su línea:

```ts
{ href: 'https://www.instagram.com/lacolmena.cia', label: 'Instagram' },
```

## Actualizar una obra

Cada obra tiene su propio archivo en `src/content/works/`. Por ejemplo:

```text
src/content/works/escaparate.md
```

El archivo tiene dos partes:

1. La ficha, situada entre las dos líneas `---`.
2. El texto largo de la obra, situado después de la segunda línea `---`.

Ejemplo reducido:

```md
---
title: "Escaparate"
year: 2026
duration: "45 min"
synopsis: "Resumen breve de la obra."
---

Aquí va la descripción larga de la obra.
```

Puedes cambiar los textos entre comillas. No borres las dos líneas `---`.

### Estados permitidos

El campo `status` solo acepta uno de estos tres valores:

```yaml
status: "gira"
status: "creacion"
status: "archivo"
```

`statusLabel` es el texto que verá el público, por ejemplo `"En gira"`, `"En creación"` o `"Archivo"`.

### Destacar una obra en la portada

```yaml
featured: true
```

- `true`: aparece entre las obras destacadas de la portada.
- `false`: no aparece en la portada, pero sigue apareciendo en Obras.

La portada muestra como máximo dos obras destacadas. `order: 1`, `order: 2`, etc. controla su orden.

## Añadir o cambiar una fecha de la agenda

Las funciones se escriben dentro de `agenda` en el archivo de su obra:

```yaml
agenda:
  - date: "2026-10-05"
    venue: "Teatro Cervantes"
    city: "Málaga"
    country: "España"
    label: "Entradas"
    url: "https://ejemplo.com/entradas"
```

Para añadir otra función, copia desde `- date` hasta `url`, pégalo debajo y cambia los datos:

```yaml
  - date: "2026-11-20"
    venue: "Nombre del espacio"
    city: "Ciudad"
    country: "España"
```

Reglas importantes:

- La fecha debe escribirse siempre como `AÑO-MES-DÍA`, por ejemplo `2026-09-07`.
- Mantén exactamente la misma sangría (los espacios al principio de cada línea).
- `label` y `url` son opcionales. Si no hay enlace de entradas o información, se pueden borrar esas dos líneas.
- No es necesario mover las funciones antiguas: la web separa automáticamente las próximas de las pasadas.
- Una función añadida a una obra aparece automáticamente tanto en la página de la obra como en la agenda general.

## Añadir fotos

### Fotos de una obra

1. Entra en `public/assets/images/`.
2. Abre la carpeta de la obra, por ejemplo `escaparate`.
3. Pulsa **Add file → Upload files** y sube la foto.
4. Evita espacios, tildes y `ñ` en el nombre del archivo. Un nombre seguro sería `escaparate-12.jpg`.
5. Añade la foto a `gallery` dentro del archivo de la obra:

```yaml
gallery:
  - src: "/assets/images/escaparate/escaparate-12.jpg"
    alt: "Escena de Escaparate con el elenco completo"
```

El texto `alt` describe la imagen para personas que no pueden verla. Conviene que sea breve pero concreto.

### Imagen principal de una obra

Sube la imagen a su carpeta y cambia `headerImage`:

```yaml
headerImage: "/assets/images/escaparate/header.jpg"
```

### Galería general

La página Galería recoge automáticamente todas las imágenes guardadas dentro de las subcarpetas de `public/assets/images/`. No hace falta añadirlas una segunda vez.

> [!TIP]
> Antes de subir fotografías, redúcelas a un tamaño razonable para que la web cargue rápido. Como referencia práctica, intenta que cada JPG o WebP pese menos de 1 MB.

## Cambiar un dosier PDF

1. Sube el PDF a la carpeta de la obra dentro de `public/assets/docs/`.
2. Evita espacios y tildes en el nombre.
3. Actualiza `dossierUrl` en el archivo de la obra:

```yaml
dossierUrl: "/assets/docs/escaparate/dossier.pdf"
```

Si no existe un dosier, elimina la línea o déjala comentada poniendo `#` al principio.

## Añadir un vídeo

1. Guarda el archivo en `public/assets/videos/`. Usa preferentemente MP4 (vídeo H.264 y audio AAC) para que funcione en la mayoría de navegadores.
2. Evita espacios y tildes en el nombre del archivo.
3. En el archivo de la obra, indica la ruta desde `public`:

```yaml
video:
  label: "Teaser — Nombre de la obra"
  src: "/assets/videos/nombre-de-la-obra.mp4"
```

Opcionalmente, puedes mostrar una imagen antes de reproducir el vídeo:

```yaml
  poster: "/assets/images/nombre-de-la-obra/cartel.jpg"
```

## Añadir una obra nueva

La forma más segura es duplicar una obra existente:

1. Copia `src/content/works/escaparate.md`.
2. Pon al nuevo archivo un nombre corto, en minúsculas, sin espacios ni tildes, por ejemplo `nueva-obra.md`. Ese nombre formará parte de la dirección web: `/obras/nueva-obra/`.
3. Sustituye todos los datos de la ficha y el texto largo.
4. Crea `public/assets/images/nueva-obra/` y sube allí sus imágenes.
5. Si hay documentos, crea `public/assets/docs/nueva-obra/` y súbelos allí.
6. Revisa especialmente las rutas de `headerImage`, `gallery` y `dossierUrl`.

No elimines campos porque parezcan vacíos sin comprobar antes otra obra. Si no se necesita una sección opcional, puede dejarse como una lista vacía:

```yaml
credits: []
technical: []
support: []
gallery: []
pressQuotes: []
agenda: []
```

## Errores habituales

- **La publicación falla:** suele faltar una comilla, una coma o la sangría correcta.
- **Una imagen no aparece:** comprueba mayúsculas, minúsculas y extensión. `Foto.jpg` y `foto.jpg` pueden considerarse nombres distintos.
- **Una fecha no aparece:** revisa que tenga el formato `2026-09-07`, con dos cifras para mes y día.
- **Una obra no aparece en portada:** comprueba que tenga `featured: true`.
- **El vídeo queda vacío:** comprueba que el archivo exista dentro de `public/assets/videos/` y que la ruta y la extensión coincidan exactamente.
- **Aparecen caracteres extraños:** guarda siempre los archivos con codificación UTF-8.

Si algo deja de funcionar después de un cambio, vuelve al archivo en GitHub, abre **History**, entra en la versión anterior y usa **Revert** si está disponible. También puedes pedir ayuda indicando el archivo editado y el mensaje de error.

## Comprobar la web en un ordenador (opcional)

Esta parte requiere tener [Node.js](https://nodejs.org/) instalado. Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

La terminal mostrará una dirección local, normalmente `http://localhost:4321`. Ábrela en el navegador. Para detener el servidor, pulsa `Ctrl + C`.

Antes de publicar, se puede comprobar que toda la web se genera correctamente con:

```bash
npm run build
```

Si termina sin errores, la versión lista para publicar se habrá generado en `dist/`. No edites esa carpeta manualmente.

## Resumen rápido para una actualización habitual

1. Edita los textos generales en `src/data/site.ts` o la obra en `src/content/works/`.
2. Sube las nuevas imágenes o documentos a `public/assets/`.
3. Comprueba que las rutas escritas coinciden exactamente con los nombres de los archivos.
4. Guarda mediante **Commit changes**.
5. Revisa la web publicada unos minutos después.
