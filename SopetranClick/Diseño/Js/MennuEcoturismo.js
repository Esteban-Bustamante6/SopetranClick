/* ================================================================
   DATOS — Veredas y sus lugares icónicos de Sopetrán, Antioquia
   Agrega, edita o quita veredas y lugares aquí fácilmente.
   Para usar imágenes reales: cambia 'img' por la ruta de tu archivo.
================================================================ */
const VEREDAS = [
    {
        id: 'santa-rita',
        nombre: 'Santa Rita',
        icono: '🌿',
        tags: ['Cascadas', 'Café', 'Senderismo'],
        cantidad: 5,
        img: null, // Pon aquí tu ruta: '../../Img/Veredas/santa-rita.jpg'
        lugares: [
            {
                nombre: 'Cascada del Gallinaso',
                tipo: 'Cascada',
                subtipo: 'Atractivo Natural',
                desc: 'Caída de agua rodeada de selva nativa, ideal para baños naturales y fotografía.',
                tags: ['🥾 Senderismo', '📸 Foto'],
                icono: '💧',
                img: "../../Img/PRINCI/carrosaFrutas.PNG"
            },
            {
                nombre: 'Mirador Las Águilas',
                tipo: 'Mirador',
                subtipo: 'Vista Panorámica',
                desc: 'Punto más alto de la vereda con vista al Cañón del Cauca y las montañas circundantes.',
                tags: ['🦅 Avistamiento', '🌅 Amanecer'],
                icono: '🦅',
                img: null
            },
            {
                nombre: 'Sendero del Café',
                tipo: 'Ruta Agrícola',
                subtipo: 'Agricultura Local',
                desc: 'Recorrido entre fincas cafeteras donde puedes aprender el proceso del café de la mano de campesinos.',
                tags: ['☕ Café', '🌱 Agroturismo'],
                icono: '☕',
                img: null
            },
            {
                nombre: 'Capilla Santa Rita',
                tipo: 'Patrimonio',
                subtipo: 'Cultura y Fe',
                desc: 'Pequeña capilla colonial con más de 150 años de historia en el corazón de la vereda.',
                tags: ['⛪ Historia', '📸 Foto'],
                icono: '⛪',
                img: null
            },
            {
                nombre: 'Posada Santa Rita',
                tipo: 'Hospedaje',
                subtipo: 'Alojamiento Rural',
                desc: 'Cabaña campesina con desayuno típico antioqueño, zona de hamacas y vista a la montaña.',
                tags: ['🏡 Hospedaje', '❤️ Favorito'],
                icono: '🏡',
                img: null
            }
        ]
    },
    {
        id: 'hidalgo',
        nombre: 'Vereda Hidalgo',
        icono: '💦',
        tags: ['Cascadas', 'Piscinas'],
        cantidad: 3,
        img: null,
        lugares: [
            {
                nombre: 'Salto de Agua Hidalgo',
                tipo: 'Cascada',
                subtipo: 'Cascada Principal',
                desc: 'La cascada más grande del municipio, con más de 30 metros de caída libre sobre rocas naturales.',
                tags: ['💧 Cascada', '🏊 Baño', '📸 Foto'],
                icono: '🌊',
                img: null
            },
            {
                nombre: 'Quebrada La Honda',
                tipo: 'Río',
                subtipo: 'Cuerpo de Agua',
                desc: 'Quebrada de aguas cristalinas con pozos naturales perfectos para refrescarse en verano.',
                tags: ['🥾 Senderismo', '🏊 Baño'],
                icono: '🏞️',
                img: null
            },
            {
                nombre: 'Reserva Forestal El Bosque',
                tipo: 'Naturaleza',
                subtipo: 'Reserva Natural',
                desc: 'Zona de bosque primario con gran variedad de aves y flora endémica del occidente antioqueño.',
                tags: ['🦜 Aves', '🌳 Flora'],
                icono: '🌳',
                img: null
            }
        ]
    },
    {
        id: 'duende',
        nombre: 'El Duende',
        icono: '🌲',
        tags: ['Cascadas', 'Fauna', 'Leyendas'],
        cantidad: 4,
        img: null,
        lugares: [
            {
                nombre: 'Salto El Duende',
                tipo: 'Cascada',
                subtipo: 'Cascada Mítica',
                desc: 'Cascada rodeada de mitos y leyendas del folklore antioqueño. El sonido del agua crea un ambiente mágico.',
                tags: ['💧 Cascada', '🌙 Leyenda', '📸 Foto'],
                icono: '✨',
                img: null
            },
            {
                nombre: 'Sendero de los Colibríes',
                tipo: 'Ruta',
                subtipo: 'Avistamiento de Aves',
                desc: 'Camino rural donde se pueden observar más de 12 especies de colibríes en su hábitat natural.',
                tags: ['🦜 Aves', '🥾 Senderismo'],
                icono: '🐦',
                img: null
            },
            {
                nombre: 'Finca El Paraíso',
                tipo: 'Agroturismo',
                subtipo: 'Turismo Rural',
                desc: 'Finca familiar con cultivos de cacao, plátano y café. Ofrecen tours y productos artesanales.',
                tags: ['🌱 Agro', '🍫 Cacao'],
                icono: '🌱',
                img: null
            },
            {
                nombre: 'Mirador Cerro Azul',
                tipo: 'Mirador',
                subtipo: 'Vista Panorámica',
                desc: 'En días despejados se divisa el embalse del Río Grande y la cordillera occidental.',
                tags: ['🌄 Vista', '📸 Foto'],
                icono: '⛰️',
                img: null
            }
        ]
    },
    {
        id: 'guayabal',
        nombre: 'Guayabal',
        icono: '🏞️',
        tags: ['Río', 'Pesca', 'Camping'],
        cantidad: 3,
        img: null,
        lugares: [
            {
                nombre: 'Playa del Río Cauca',
                tipo: 'Playa Fluvial',
                subtipo: 'Recreación Acuática',
                desc: 'Playas de arena fina a orillas del Cauca, perfectas para picnic y baños familiares en temporada seca.',
                tags: ['🏖️ Playa', '🏊 Baño', '🎣 Pesca'],
                icono: '🏖️',
                img: null
            },
            {
                nombre: 'Puerto El Guayabal',
                tipo: 'Puerto',
                subtipo: 'Patrimonio Cultural',
                desc: 'Antiguo puerto fluvial con balsas artesanales. Historia viva del comercio en el Cauca.',
                tags: ['⛵ Bote', '📜 Historia'],
                icono: '⛵',
                img: null
            },
            {
                nombre: 'Zona de Camping La Ceiba',
                tipo: 'Camping',
                subtipo: 'Ecoturismo Nocturno',
                desc: 'Zona habilitada bajo una ceiba centenaria para acampar, con fogata y observación de estrellas.',
                tags: ['⛺ Camping', '🌟 Estrellas'],
                icono: '⛺',
                img: null
            }
        ]
    },
    {
        id: 'santa-barbara',
        nombre: 'Santa Bárbara',
        icono: '🌺',
        tags: ['Flores', 'Cultivos', 'Miradores'],
        cantidad: 3,
        img: null,
        lugares: [
            {
                nombre: 'Finca Floristería Andina',
                tipo: 'Agroturismo',
                subtipo: 'Floricultura',
                desc: 'Cultivos de flores tropicales y orquídeas endémicas. Experiencia guiada de arreglos florales.',
                tags: ['🌸 Flores', '🌿 Orquídeas'],
                icono: '🌺',
                img: null
            },
            {
                nombre: 'Mirador El Paraíso',
                tipo: 'Mirador',
                subtipo: 'Vista Panorámica',
                desc: 'Vista 360° del municipio de Sopetrán, la cuenca del Cauca y los municipios vecinos.',
                tags: ['🌄 Vista', '📸 Foto'],
                icono: '🗻',
                img: null
            },
            {
                nombre: 'Laguna del Encanto',
                tipo: 'Laguna',
                subtipo: 'Ecosistema Acuático',
                desc: 'Pequeña laguna natural con aves acuáticas y vegetación de humedal. Lugar tranquilo para picnic.',
                tags: ['🦢 Aves', '🌿 Natura'],
                icono: '🌊',
                img: null
            }
        ]
    },
    {
        id: 'amorro',
        nombre: 'La Amorro',
        icono: '☕',
        tags: ['Café', 'Artesanías', 'Historia'],
        cantidad: 3,
        img: null,
        lugares: [
            {
                nombre: 'Beneficiadero Tradicional de Café',
                tipo: 'Patrimonio',
                subtipo: 'Cultura Cafetera',
                desc: 'Antiguo beneficiadero en piedra donde se procesa café de manera artesanal como hace 100 años.',
                tags: ['☕ Café', '📜 Historia'],
                icono: '☕',
                img: null
            },
            {
                nombre: 'Taller de Artesanías en Guadua',
                tipo: 'Artesanía',
                subtipo: 'Arte Local',
                desc: 'Artesanos locales fabrican muebles, canastos y decoraciones en guadua. Taller abierto al público.',
                tags: ['🎍 Guadua', '🛒 Tienda'],
                icono: '🎍',
                img: null
            },
            {
                nombre: 'Sendero El Balcón',
                tipo: 'Senderismo',
                subtipo: 'Ruta Interpretativa',
                desc: 'Sendero de 3 km con letreros de flora nativa. Termina en un mirador con vista al casco urbano.',
                tags: ['🥾 Senderismo', '🌿 Flora'],
                icono: '🌿',
                img: null
            }
        ]
    }
];

/* ================================================================
   RENDER — PANTALLA A: VEREDAS
================================================================ */
function renderVeredas() {
    const grid = document.getElementById('veredas-grid');
    grid.innerHTML = '';

    VEREDAS.forEach(v => {
        const card = document.createElement('div');
        card.className = 'vereda-card';
        card.onclick = () => abrirVereda(v.id);

        const imgHtml = v.img
            ? `<img class="vereda-img" src="${v.img}" alt="${v.nombre}">`
            : `<div class="vereda-img-placeholder">${v.icono}</div>`;

        const tagsHtml = v.tags.map(t => `<span class="vereda-tag">${t}</span>`).join('');

        card.innerHTML = `
            ${imgHtml}
            <div class="vereda-body">
                <div class="vereda-arrow"><i class="bi bi-arrow-right"></i></div>
                <h3 class="vereda-name">${v.nombre}</h3>
                <div class="vereda-cantidad">
                    <i class="bi bi-geo-alt-fill"></i>
                    ${v.cantidad} lugar${v.cantidad !== 1 ? 'es' : ''} icónico${v.cantidad !== 1 ? 's' : ''}
                </div>
                <div class="vereda-iconos">${tagsHtml}</div>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* ================================================================
   RENDER — PANTALLA B: LUGARES
================================================================ */
function abrirVereda(id) {
    const vereda = VEREDAS.find(v => v.id === id);
    if (!vereda) return;

    // Actualizar portal info
    document.getElementById('portal-icono').textContent = vereda.icono;
    document.getElementById('portal-nombre').textContent = vereda.nombre;
    document.getElementById('portal-label').textContent =
        `Actual vereda seleccionada · ${vereda.lugares.length} lugares`;

    // Breadcrumb
    document.getElementById('eco-breadcrumb').innerHTML = `
        <span style="cursor:pointer;color:var(--texto-dim)" onclick="volverAVeredas()">Veredas</span>
        <i class="bi bi-chevron-right"></i>
        <span class="activo">${vereda.nombre}</span>
    `;

    // Render lugares
    const grid = document.getElementById('lugares-grid');
    grid.innerHTML = '';

    vereda.lugares.forEach(l => {
        const card = document.createElement('div');
        card.className = 'lugar-card';

        const imgHtml = l.img
            ? `<img class="lugar-img" src="${l.img}" alt="${l.nombre}">`
            : `<div class="lugar-img-placeholder">${l.icono}</div>`;

        const tagsHtml = l.tags.map(t => `<span class="lugar-tag verde">${t}</span>`).join('');

        card.innerHTML = `
            <div class="lugar-img-wrap">
                ${imgHtml}
                <span class="lugar-tipo-badge">${l.tipo}</span>
                <div class="lugar-acciones">
                    <button class="lugar-accion-btn" title="Senderismo"><i class="bi bi-person-walking"></i></button>
                    <button class="lugar-accion-btn" title="Favorito"><i class="bi bi-heart"></i></button>
                    <button class="lugar-accion-btn" title="Fotografía"><i class="bi bi-camera"></i></button>
                </div>
            </div>
            <div class="lugar-body">
                <h4 class="lugar-nombre">${l.nombre}</h4>
                <p class="lugar-subtipo">${l.subtipo}</p>
                <p class="lugar-desc">${l.desc}</p>
                <div class="lugar-footer-tags">${tagsHtml}</div>
            </div>
        `;

        grid.appendChild(card);
    });

    // Animación: salida de veredas → entrada de lugares
    const pantallaV = document.getElementById('pantalla-veredas');
    const pantallaL = document.getElementById('pantalla-lugares');

    pantallaV.classList.add('saliendo');
    setTimeout(() => {
        pantallaV.style.display = 'none';
        pantallaL.style.display = 'block';
        pantallaL.classList.add('visible', 'entrando');
        setTimeout(() => pantallaL.classList.remove('entrando'), 450);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 380);
}

function volverAVeredas() {
    const pantallaV = document.getElementById('pantalla-veredas');
    const pantallaL = document.getElementById('pantalla-lugares');

    pantallaL.style.display = 'none';
    pantallaL.classList.remove('visible');

    pantallaV.style.display = 'block';
    pantallaV.classList.remove('saliendo');

    // Breadcrumb reset
    document.getElementById('eco-breadcrumb').innerHTML =
        `<span class="activo">Veredas</span>`;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---- INIT ---- */
renderVeredas();

/* ================================================================
   NOTA PARA INTEGRACIÓN EN Index.html
   ---------------------------------------------------------------
   1. Copia TODO el contenido del <section id="vista-ecoturismo">
      y pégalo dentro de <main id="main-content"> en tu Index.html,
      reemplazando el placeholder que ya existe.

   2. Copia el bloque <style> al <head> de Index.html
      (o a tu archivo index.css).

   3. Copia el bloque <script> al final del <body>,
      ANTES de tu script del SPA router — así las funciones
      renderVeredas() y abrirVereda() estarán disponibles.

   4. El botón eco-back-btn ya llama a navegarA('inicio')
      que es tu función existente del SPA router. ✅

   5. Para agregar imágenes reales a veredas y lugares:
      Cambia el campo img: null  →  img: '../../Img/Veredas/nombre.jpg'
================================================================ */