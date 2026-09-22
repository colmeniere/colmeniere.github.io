export const site = {
  name: 'La Colmena CIA',
  title: 'La Colmena CIA — compañía de danza',
  description:
    'La Colmena CIA es una compañía de danza con un lenguaje artístico propio, en gira por festivales y teatros nacionales e internacionales.',
  navLinks: [
    { href: '/obras/', label: 'Obras' },
    { href: '/agenda/', label: 'Agenda' },
    { href: '/compania/', label: 'Compañía' },
    { href: '/galeria/', label: 'Galería' },
    // { href: '/prensa/', label: 'Prensa' },
    // { href: '/talleres/', label: 'Talleres' },
    { href: '/contacto/', label: 'Contacto', cta: true },
  ],
  socialLinks: [
    { href: 'https://www.instagram.com/lacolmena.cia', label: 'Instagram' },
    // { href: 'https://vimeo.com', label: 'Vimeo' },
    // { href: 'https://youtube.com', label: 'YouTube' },
    // { href: 'https://facebook.com', label: 'Facebook' },
  ],
  contactInfo: {
    bookingEmail: 'contacto@lacolmena.es',
    // pressEmail: 'contacto@lacolmena.es',
    // workshopsEmail: 'talleres@lacolmena.es',
    generalEmail: 'contacto@lacolmena.es',
    city: 'Sevilla, España',
  },
  home: {
    eyebrow: 'Compañía de danza',
    title: ['La', 'Colmena', 'CIA'],
    tagline:
      'Emergemos de la danza como compañía. El movimiento de la desesperanza. Perfectos, rotos, vacíos y ruidosos.',
    // quote:
    //   'Una coreógrafa que hace pensar al cuerpo antes que al ojo. Raramente el movimiento ha sido tan necesario.',
    // quoteSource: 'El País — Festival de Otoño, Madrid',
    companyTitle: 'Un lenguaje construido desde adentro',
    companyParagraphs: [
      'La Colmena CIA nace de la necesidad de crear un espacio escénico donde lo colectivo y lo individual coexisten en tensión creativa. La compañía trabaja desde la investigación corporal, el análisis del movimiento y la colaboración interdisciplinar.',
      'Con sede en Sevilla, La Colmena lleva sus obras a festivales y teatros nacionales e internacionales, construyendo un repertorio que crece desde la pregunta más que desde la respuesta.',
    ],
  },
  company: {
    label: 'Sobre la compañía',
    title: 'Compañía',
    intro:
      'Una práctica escénica que parte del cuerpo como archivo, como pregunta y como forma de pensamiento.',
    portraitCredit: 'Foto: archivo de compañía',
    portrait: '/assets/images/coreografa.jpg',
    bioTitle: 'Coreógrafa y directora',
    bioLead:
      'Laura López Barrera (Sevilla, 2003) es bailarina y creadora formada en Flamenco, con un lenguaje que fusiona tradición y contemporaneidad.',
    bioParagraphs: [
       'Su trayectoria combina creación propia, escena y docencia, construyendo una danza atravesada por la emoción y la reflexión social.' 
    ],
    timeline: [
      { year: '2026', text: 'Estreno de la obra Escaparate' },
      { year: '2025', text: 'Fundación de La Colmena CIA.' },
    ],
    statement:
      'Hacemos danza porque todavía no sabemos decir con palabras lo que el cuerpo ya ha entendido. La Colmena es un espacio donde lo que no cabe en el lenguaje encuentra su forma.',
    team: [
      { role: 'Intérpretes', detail: 'Equipo ampliado según cada producción' },
      { role: 'Iluminación', detail: 'Colaboración técnica por obra' },
      { role: 'Producción', detail: 'Gestión y distribución' },
      { role: 'Dramaturgia', detail: 'Asesoría y acompañamiento' },
      { role: 'Fotografía', detail: 'Archivo y documentación' },
    ],
    collaborators: [
      'Música y composición',
      'Diseño de luz',
      'Vestuario',
      'Espacio escénico',
      'Vídeo',
      'Imagen gráfica',
    ],
  },
  press: {
    label: 'Para programadores y medios',
    title: 'Prensa & Profesionales',
    intro:
      'Descarga dossiers, fichas técnicas y material gráfico. Para entrevistas y acreditaciones, escribe directamente al equipo.',
    quotes: [
      {
        source: 'El País',
        text: 'Una coreógrafa que hace pensar al cuerpo antes que al ojo. Raramente el movimiento ha sido tan necesario como en Enjambre.',
      },
      {
        source: 'Jot Down',
        text: 'La Colmena construye paisajes físicos donde el tiempo se dilata hasta hacerse materia.',
      },
      {
        source: 'Culturamas',
        text: 'Umbral es un solo que tiene la textura de lo inevitable. Un cuerpo solo en el escenario que vale por siete.',
      },
    ],
    downloads: [
      { name: 'Dossier general', type: 'PDF · La Colmena CIA · 2024', icon: '📄' },
      // { name: 'Dossier Enjambre', type: 'PDF · 2023', icon: '📄' },
      // { name: 'Dossier Umbral', type: 'PDF · 2021', icon: '📄' },
      // { name: 'Ficha técnica — Enjambre', type: 'PDF · Rider técnico completo', icon: '⚙️' },
      // { name: 'Ficha técnica — Umbral', type: 'PDF · Rider técnico completo', icon: '⚙️' },
      // { name: 'Fotos en alta resolución', type: 'ZIP · Enjambre + Umbral · Créditos incluidos', icon: '🖼' },
      // { name: 'Logo La Colmena CIA', type: 'PNG / SVG · Fondo claro y oscuro', icon: '🎨' },
      // { name: 'Bio corta — compañía y directora', type: 'DOCX · ES / EN', icon: '📝' },
    ],
  },
  workshops: {
    label: 'Mediación y pedagogía',
    title: 'Talleres',
    intro:
      'Laboratorios, workshops y proyectos comunitarios que extienden la investigación escénica de La Colmena hacia otros cuerpos y otros contextos.',
    paragraph:
      'La actividad pedagógica de La Colmena CIA es inseparable de su proceso creativo. Los talleres no son una extensión del espectáculo: son espacios propios de investigación, encuentro y práctica.',
    cards: [
      {
        number: '01',
        title: 'Laboratorio de movimiento — El enjambre como partitura',
        description:
          'Investigación práctica sobre el movimiento colectivo: cómo funciona un cuerpo cuando piensa junto a otros. Exploramos sincronía, ruptura y toma de decisiones en tiempo real.',
        tags: ['Profesional', '2–5 días', 'Máx. 16 participantes'],
      },
      {
        number: '02',
        title: 'Taller de interpretación somática',
        description:
          'Herramientas de análisis del movimiento, trabajo con la atención sensorial y construcción de material propio a partir de imágenes corporales.',
        tags: ['Formación profesional', '1–3 días', 'Máx. 20 participantes'],
      },
      {
        number: '03',
        title: 'Mediación con público general — La danza como pregunta',
        description:
          'Workshop de acceso abierto diseñado para públicos sin experiencia previa en danza. Punto de partida: el cuerpo cotidiano como material coreográfico.',
        tags: ['Público general', '3–4 h', 'Todas las edades'],
      },
      {
        number: '04',
        title: 'Proyectos comunitarios a medida',
        description:
          'Diseño de procesos de creación participativa para contextos específicos: centros educativos, comunidades vecinales, instituciones y proyectos de mediación.',
        tags: ['A medida', 'Proceso largo', 'Consultar'],
      },
      {
        number: '05',
        title: 'Residencia pedagógica para intérpretes',
        description:
          'Programa de residencia de trabajo para bailarines/as en desarrollo profesional. Incluye clases técnicas, laboratorio de creación y sesiones de dramaturgia del movimiento.',
        tags: ['Residencia', '1–3 semanas', 'Máx. 10 participantes'],
      },
    ],
    conditions: [
      'Los talleres pueden realizarse en la sede de La Colmena CIA en Sevilla o desplazarse a teatros, centros coreográficos o espacios partner.',
      'Los honorarios varían según formato, duración y contexto. Consultad disponibilidad y condiciones económicas.',
    ],
  },
  contactPage: {
    label: 'Habla con nosotros',
    title: 'Contacto',
    intro:
      'Para contratación, propuestas de colaboración o consultas.',
    // note:
    //   'Para solicitudes profesionales y contratación, indicar la obra de interés, las fechas tentativas y el espacio para poder responder con precisión.',
  },
} as const;

export type NavLink = (typeof site.navLinks)[number];
