document.addEventListener('DOMContentLoaded', () => {
            const intro = document.getElementById('Welcomed');
            const welcomeText = document.getElementById('welcome-text');
            const slidesIntro = intro.querySelectorAll('img');
            const contentWrapper = document.getElementById('content-wrapper');
            const nav = document.getElementById('main-nav');

            // --- Lógica Intro ---
            setTimeout(() => welcomeText.classList.add('show'), 500);
            setTimeout(() => {
                slidesIntro[0].classList.remove('active');
                slidesIntro[1].classList.add('active');
            }, 2500);

            setTimeout(() => {
                welcomeText.style.opacity = '0';
                setTimeout(() => {
                    intro.style.transition = 'all 1.5s cubic-bezier(0.645, 0.045, 0.355, 1)';
                    intro.style.transform = 'translateY(-100%)';
                    contentWrapper.style.opacity = '1';
                    setTimeout(() => nav.classList.add('visible'), 800);
                }, 800);
            }, 5500);

            // --- Lógica Carrusel Main ---
            const mainSlides = document.querySelectorAll('#main-carousel img');
            let currentSlide = 0;
            setInterval(() => {
                mainSlides[currentSlide].classList.remove('active');
                currentSlide = (currentSlide + 1) % mainSlides.length;
                mainSlides[currentSlide].classList.add('active');
            }, 4000);
        });




        // INDEX

        /* ============================================
           SPA ROUTER — el cerebro del sistema
           Solo necesitas estas dos funciones para toda la app
        ============================================ */

        // Mapa: nombre → id de la vista en el HTML
        const VISTAS = {
            'inicio':       'vista-inicio',
            'alojamiento':  'vista-alojamiento',
            'transporte':   'vista-transporte',
            'ecoturismo':   'vista-ecoturismo',
            'comercio':     'vista-comercio',
            'entidades':    'vista-entidades',
            'exploracion':  'vista-exploracion',
            'quienes':      'vista-quienes',
        };

        let vistaActual = 'inicio';

        function navegarA(nombre) {
            if (nombre === vistaActual) return; // ya estás ahí

            // 1. Oculta la vista actual
            const viejaVista = document.getElementById(VISTAS[vistaActual]);
            if (viejaVista) viejaVista.classList.remove('active');

            // 2. Muestra la nueva vista con animación
            const nuevaVista = document.getElementById(VISTAS[nombre]);
            if (nuevaVista) {
                nuevaVista.classList.add('active', 'entrando');
                // Quita la clase de animación después de que termina
                setTimeout(() => nuevaVista.classList.remove('entrando'), 500);
            }

            // 3. Actualiza el nav — marca el botón activo
            document.querySelectorAll('.nav button').forEach(btn => btn.classList.remove('nav-activo'));
            // (opcional) si quieres resaltar el botón del nav correspondiente

            // 4. Scroll al tope suavemente
            window.scrollTo({ top: 0, behavior: 'smooth' });

            vistaActual = nombre;
        }

        // Función para abrir módulos desde los botones de servicios
        function abrirModulo(nombre) {
            navegarA(nombre);
        }

        /* ============================================
           Tu código existente (scroll, panel, intro)
           — lo dejas igual —
        ============================================ */
        const btnSalto = document.getElementById('btn-salto-central');
        const panel = document.getElementById('panel-desplegable');

        window.addEventListener('scroll', () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (window.scrollY / scrollTotal) * 100;
            btnSalto.style.display = scrollPercent > 45 ? 'block' : 'none';
        });

        function abrirPanel()  { if(panel) { panel.classList.add('active'); document.body.style.overflow = 'hidden'; } }
        function cerrarPanel() { if(panel) { panel.classList.remove('active'); document.body.style.overflow = 'auto'; } }

        function irAMapa() {
            cerrarPanel();
            navegarA('inicio');
            setTimeout(() => {
                document.getElementById('seccion-mapa-ref')?.scrollIntoView({ behavior: 'smooth' });
            }, 600);
        }


        