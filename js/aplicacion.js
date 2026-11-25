/**
 * TRAZO.DT — Lógica compartida y modular del portal de Dibujo Técnico
 */

(() => {
  'use strict';

  /* ========================================================================
     1. DATOS HISTÓRICOS (historia.html)
     ======================================================================== */
  const HISTORICAL_ERAS = [
    {
      id: 0,
      badge: 'HITO 01 // 3000 a.C. – II d.C.',
      title: 'Antigüedad: Cánones Egipcios y Geometría Euclidiana',
      desc: 'Las primeras civilizaciones resolvieron el trazo arquitectónico mediante cuadrículas modulares, plomadas y cuerdas anudadas (triángulo 3-4-5). En Grecia, Euclides formalizó la geometría deductiva y Marco Vitruvio describió las vistas en planta (ichnographia) y alzado (orthographia).',
      figure: 'Euclides y Vitruvio',
      contribution: 'Regla, compás y retícula modular',
      caption: 'Esquema de proporción clásica y triángulo egipcio 3-4-5',
      svg: `
        <svg viewBox="0 0 280 180" width="260" height="168" fill="none">
          <rect x="20" y="20" width="240" height="140" stroke="#CBD5E1" stroke-dasharray="4 4"/>
          <polygon points="60,140 200,140 60,45" stroke="#1D4ED8" stroke-width="2" fill="rgba(29,78,216,0.07)"/>
          <rect x="60" y="126" width="14" height="14" stroke="#E11D48" stroke-width="1.5"/>
          <circle cx="155" cy="92" r="46" stroke="#0F172A" stroke-width="1.4" stroke-dasharray="5 3"/>
          <text x="122" y="155" font-family="JetBrains Mono" font-size="10" fill="#0F172A">4u</text>
          <text x="42" y="98" font-family="JetBrains Mono" font-size="10" fill="#0F172A">3u</text>
          <text x="135" y="84" font-family="JetBrains Mono" font-size="10" fill="#E11D48">5u (90°)</text>
        </svg>`
    },
    {
      id: 1,
      badge: 'HITO 02 // SIGLOS XV – XVI',
      title: 'Renacimiento: Perspectiva Cónica e Ingenios Mecánicos',
      desc: 'Brunelleschi demostró matemáticamente la perspectiva lineal mediante puntos de fuga. Leonardo da Vinci fusionó la sensibilidad artística con la precisión analítica, inventando la vista en corte y los despieces en explosión para documentar mecanismos, bombas hidráulicas y puentes.',
      figure: 'Da Vinci, Brunelleschi y Durero',
      contribution: 'Perspectiva cónica y vista explotada',
      caption: 'Construcción de perspectiva cónica con línea de horizonte (LH) y punto de fuga (PF)',
      svg: `
        <svg viewBox="0 0 280 180" width="260" height="168" fill="none">
          <line x1="20" y1="54" x2="260" y2="54" stroke="#E11D48" stroke-width="1.2" stroke-dasharray="5 3"/>
          <circle cx="140" cy="54" r="3.5" fill="#E11D48"/>
          <text x="148" y="48" font-family="JetBrains Mono" font-size="9.5" fill="#E11D48">PF / LH</text>
          <line x1="140" y1="54" x2="46" y2="152" stroke="#94A3B8" stroke-width="1"/>
          <line x1="140" y1="54" x2="234" y2="152" stroke="#94A3B8" stroke-width="1"/>
          <line x1="140" y1="54" x2="90" y2="152" stroke="#94A3B8" stroke-width="1"/>
          <line x1="140" y1="54" x2="190" y2="152" stroke="#94A3B8" stroke-width="1"/>
          <polygon points="75,122 205,122 183,96 97,96" stroke="#1D4ED8" stroke-width="2" fill="rgba(29,78,216,0.08)"/>
          <rect x="97" y="72" width="86" height="24" stroke="#0F172A" stroke-width="1.8"/>
        </svg>`
    },
    {
      id: 2,
      badge: 'HITO 03 // 1795 – SIGLO XIX',
      title: 'Revolución Industrial: Geometría Descriptiva de Monge',
      desc: 'Gaspard Monge sistematizó la proyección ortogonal sobre dos planos perpendiculares (vertical y horizontal) abatidos en una misma lámina. Esto permitió medir con exactitud cualquier arista o ángulo verdadero e hizo posible la intercambiabilidad de piezas industriales.',
      figure: 'Gaspard Monge',
      contribution: 'Sistema Diédrico y Planos Cianotipo',
      caption: 'Abatimiento diédrico: Alzado (PV) y Planta (PH) respecto a la Línea de Tierra (LT)',
      svg: `
        <svg viewBox="0 0 280 180" width="260" height="168" fill="none">
          <line x1="24" y1="90" x2="256" y2="90" stroke="#E11D48" stroke-width="1.8"/>
          <text x="24" y="83" font-family="JetBrains Mono" font-size="9.5" fill="#E11D48">L.T.</text>
          <rect x="85" y="34" width="110" height="42" stroke="#0F172A" stroke-width="2" fill="rgba(29,78,216,0.06)"/>
          <rect x="85" y="106" width="110" height="48" stroke="#0891B2" stroke-width="2" fill="rgba(8,145,178,0.08)"/>
          <circle cx="140" cy="130" r="14" stroke="#0F172A" stroke-width="1.5"/>
          <line x1="126" y1="34" x2="126" y2="106" stroke="#94A3B8" stroke-dasharray="3 3"/>
          <line x1="154" y1="34" x2="154" y2="106" stroke="#94A3B8" stroke-dasharray="3 3"/>
          <line x1="126" y1="34" x2="126" y2="76" stroke="#0F172A" stroke-dasharray="4 3"/>
          <line x1="154" y1="34" x2="154" y2="76" stroke="#0F172A" stroke-dasharray="4 3"/>
        </svg>`
    },
    {
      id: 3,
      badge: 'HITO 04 // 1960 – PRESENTE',
      title: 'Era Digital: CAD Paramétrico y Metodología BIM',
      desc: 'El tablero con regla T y estilógrafo dio paso a estaciones CAD capaces de almacenar modelos vectoriales exactos con capas, bloques y cotas asociativas. Hoy, los sistemas BIM integran geometría 3D con datos de coste, materiales, cálculo estructural y ciclo de vida.',
      figure: 'Ivan Sutherland y Pioneros CAD',
      contribution: 'Modelado paramétrico 3D y Gemelos Digitales',
      caption: 'Malla paramétrica con restricciones geométricas y actualización asociativa',
      svg: `
        <svg viewBox="0 0 280 180" width="260" height="168" fill="none">
          <g stroke="#1D4ED8" stroke-width="1.4">
            <polygon points="140,28 212,68 140,108 68,68" fill="rgba(6,182,212,0.12)"/>
            <polygon points="68,68 140,108 140,156 68,116" fill="rgba(15,23,42,0.06)"/>
            <polygon points="212,68 140,108 140,156 212,116" fill="rgba(29,78,216,0.14)"/>
          </g>
          <circle cx="140" cy="28" r="3" fill="#E11D48"/>
          <circle cx="212" cy="68" r="3" fill="#E11D48"/>
          <circle cx="68" cy="68" r="3" fill="#E11D48"/>
          <circle cx="140" cy="108" r="3" fill="#E11D48"/>
          <text x="20" y="28" font-family="JetBrains Mono" font-size="9" fill="#1D4ED8">PARAM: H=48mm</text>
          <text x="20" y="42" font-family="JetBrains Mono" font-size="9" fill="#0F172A">BIM LOD 400</text>
        </svg>`
    }
  ];

  /* ========================================================================
     2. DATOS DE LA GALERÍA DE PLANOS (galeria.html)
     ======================================================================== */
  const PLANS_DATA = [
    {
      id: 'plano-1',
      category: 'ortogonales',
      categoryLabel: 'Vistas Ortogonales',
      title: 'Soporte de Cojinete en U',
      scale: 'Escala 1:2',
      norm: 'ISO 128-30',
      projection: 'Sistema Europeo [E]',
      format: 'A3 Horizontal',
      image: null,
      excerpt: 'Representación diédrica completa en alzado, planta y perfil izquierdo con líneas ocultas normalizadas.',
      description: 'Proyección ortogonal de un soporte mecanizado en acero F-1140. Se muestran las tres vistas principales alineadas según el método del primer diedro, diferenciando aristas vistas, ejes de simetría y aristas ocultas.',
      highlights: [
        'Alzado frontal como vista principal con máxima información geométrica.',
        'Líneas de trazo discontinuo para representar el alojamiento interior del eje.',
        'Ejes de simetría en trazo largo y punto según ISO 128-20.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="270" fill="#FFFFFF"/>
          <path d="M 48 118 L 48 92 L 76 92 L 76 46 L 104 46 L 104 78 A 24 24 0 0 0 152 78 L 152 46 L 180 46 L 180 92 L 208 92 L 208 118 Z" stroke="#0F172A" stroke-width="2.2" fill="rgba(29,78,216,0.07)"/>
          <line x1="60" y1="92" x2="60" y2="118" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="70" y1="92" x2="70" y2="118" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="186" y1="92" x2="186" y2="118" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="196" y1="92" x2="196" y2="118" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="128" y1="32" x2="128" y2="244" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <rect x="48" y="156" width="160" height="72" stroke="#0F172A" stroke-width="2.2" fill="rgba(15,23,42,0.04)"/>
          <rect x="76" y="156" width="104" height="72" stroke="#0F172A" stroke-width="1.5"/>
          <line x1="104" y1="156" x2="104" y2="228" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="4 3"/>
          <line x1="152" y1="156" x2="152" y2="228" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle cx="65" cy="192" r="6" stroke="#0F172A" stroke-width="1.6"/>
          <circle cx="191" cy="192" r="6" stroke="#0F172A" stroke-width="1.6"/>
          <rect x="268" y="46" width="72" height="72" stroke="#0F172A" stroke-width="2.2" fill="rgba(8,145,178,0.07)"/>
          <line x1="268" y1="92" x2="340" y2="92" stroke="#0F172A" stroke-width="1.6"/>
          <line x1="268" y1="102" x2="340" y2="102" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="48" y1="244" x2="208" y2="244" stroke="#0891B2" stroke-width="1.2"/>
          <text x="128" y="256" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#0891B2">160</text>
          <text x="304" y="138" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#0F172A">PERFIL IZQ.</text>
          <text x="20" y="252" font-family="JetBrains Mono" font-size="9" fill="#E11D48">[E]</text>
        </svg>`
    },
    {
      id: 'plano-2',
      category: 'ortogonales',
      categoryLabel: 'Vistas Ortogonales',
      title: 'Brida Mecánica de 6 Taladros',
      scale: 'Escala 1:1',
      norm: 'DIN ISO 2768-m',
      projection: 'Sistema Europeo [E]',
      format: 'A4 Vertical',
      image: null,
      excerpt: 'Vista frontal circular con circunferencia primitiva de centros y proyección lateral acotada.',
      description: 'Brida de acoplamiento hidráulico en fundición nodular. La vista frontal define la distribución polar cada 60° de seis taladros pasantes Ø12 sobre diámetro primitivo Ø110.',
      highlights: [
        'Cotas de diámetro Ø148 exterior, Ø110 primitivo y Ø52 paso central.',
        'Tolerancias generales medias según DIN ISO 2768-m.',
        'Líneas de centro cruzadas en todos los taladros de fijación.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="270" fill="#FFFFFF"/>
          <circle cx="135" cy="135" r="82" stroke="#0F172A" stroke-width="2.2" fill="rgba(29,78,216,0.05)"/>
          <circle cx="135" cy="135" r="58" stroke="#E11D48" stroke-width="1.1" stroke-dasharray="8 3 2 3"/>
          <circle cx="135" cy="135" r="28" stroke="#0F172A" stroke-width="2" fill="#FFFFFF"/>
          <circle cx="135" cy="135" r="36" stroke="#0891B2" stroke-width="1.1" stroke-dasharray="4 3"/>
          <line x1="40" y1="135" x2="230" y2="135" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <line x1="135" y1="40" x2="135" y2="230" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <circle cx="193" cy="135" r="8" stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF"/>
          <circle cx="77" cy="135" r="8" stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF"/>
          <circle cx="164" cy="85" r="8" stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF"/>
          <circle cx="106" cy="85" r="8" stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF"/>
          <circle cx="164" cy="185" r="8" stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF"/>
          <circle cx="106" cy="185" r="8" stroke="#0F172A" stroke-width="1.8" fill="#FFFFFF"/>
          <path d="M 278 53 L 306 53 L 306 99 L 336 99 L 336 171 L 306 171 L 306 217 L 278 217 Z" stroke="#0F172A" stroke-width="2.2" fill="rgba(8,145,178,0.07)"/>
          <line x1="278" y1="107" x2="336" y2="107" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="278" y1="163" x2="336" y2="163" stroke="#1D4ED8" stroke-width="1.3" stroke-dasharray="4 3"/>
          <line x1="264" y1="135" x2="352" y2="135" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <text x="135" y="248" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#1D4ED8">Ø148 / 6×Ø12</text>
          <text x="307" y="248" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#0F172A">ESP. 22 mm</text>
        </svg>`
    },
    {
      id: 'plano-3',
      category: 'isometrica',
      categoryLabel: 'Perspectiva Isométrica',
      title: 'Acoplamiento Escalonado en Isometría',
      scale: 'Escala 1:2',
      norm: 'ISO 5456-3',
      projection: 'Axonometría Isométrica (30°)',
      format: 'A4 Horizontal',
      image: 'assets/imagenes/plano-acoplamiento-isometrico.jpg',
      excerpt: 'Corte parcial isométrico de acoplamiento escalonado sobre brida circular con ejes a 30° y 120°.',
      description: 'Representación isométrica estándar donde los tres ejes ortogonales forman ángulos de 120° entre sí, integrando el rayado interno en perspectiva para mostrar el paso escalonado.',
      highlights: [
        'Trazado con cartabón a 30° sobre la horizontal en ambos sentidos.',
        'Elipses isométricas construidas con relación de ejes 0.577.',
        'Ejes de simetría en coral-carmín para orientación espacial inmediata.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#94A3B8" stroke-width="1" stroke-dasharray="4 4">
            <line x1="200" y1="20" x2="200" y2="250"/>
            <line x1="70" y1="230" x2="330" y2="80"/>
            <line x1="330" y1="230" x2="70" y2="80"/>
          </g>
          <polygon points="200,45 292,98 242,127 150,74" fill="rgba(6,182,212,0.11)"/>
          <polygon points="108,150 150,126 200,155 200,222 108,169" fill="rgba(15,23,42,0.06)"/>
          <polygon points="200,155 292,102 292,169 200,222" fill="rgba(29,78,216,0.13)"/>
          <path d="M 108 169 L 108 130 L 150 106 L 150 74 L 200 45 L 292 98 L 292 169 L 200 222 Z" stroke="#0F172A" stroke-width="2.3" stroke-linejoin="round"/>
          <path d="M 150 74 L 242 127 L 292 98" stroke="#0F172A" stroke-width="2"/>
          <path d="M 108 130 L 200 183 L 200 222" stroke="#0F172A" stroke-width="2"/>
          <path d="M 200 183 L 242 159 L 242 127" stroke="#0F172A" stroke-width="2"/>
          <text x="298" y="196" font-family="JetBrains Mono" font-size="10" fill="#E11D48">30° / 30°</text>
          <text x="64" y="42" font-family="JetBrains Mono" font-size="10" fill="#1D4ED8">ISOMÉTRICO 1:2</text>
        </svg>`
    },
    {
      id: 'plano-4',
      category: 'isometrica',
      categoryLabel: 'Perspectiva Isométrica',
      title: 'Despiece Isométrico de Caja Reductora',
      scale: 'Escala 1:1',
      norm: 'ISO 5456-3 / ISO 6433',
      projection: 'Vista Explotada Axial',
      format: 'A3 Horizontal',
      image: 'assets/imagenes/plano-despiece-caja-reductora.jpg',
      excerpt: 'Conjunto mecánico en explosión isométrica con eje escalonado, chaveta, rodamientos y tornillería.',
      description: 'Documentación de montaje industrial que separa los componentes a lo largo de una línea axial en rojo-coral para mostrar el orden exacto de ensamblaje.',
      highlights: [
        'Orden secuencial de rodamientos, casquillo separador, engranaje y circlip.',
        'Línea de eje de explosión en trazo largo y punto.',
        'Ideal para manuales de mantenimiento y listas de materiales (BOM).'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="65" y1="210" x2="335" y2="55" stroke="#E11D48" stroke-width="1.3" stroke-dasharray="10 3 2 3"/>
          <ellipse cx="115" cy="181" rx="22" ry="38" transform="rotate(-30 115 181)" stroke="#0F172A" stroke-width="2" fill="rgba(29,78,216,0.08)"/>
          <ellipse cx="185" cy="141" rx="30" ry="50" transform="rotate(-30 185 141)" stroke="#1D4ED8" stroke-width="2" fill="rgba(6,182,212,0.1)"/>
          <ellipse cx="265" cy="95" rx="20" ry="34" transform="rotate(-30 265 95)" stroke="#0F172A" stroke-width="2" fill="rgba(29,78,216,0.08)"/>
          <text x="64" y="246" font-family="JetBrains Mono" font-size="10" fill="#0F172A">EJE DE EXPLOSIÓN AXIAL</text>
        </svg>`
    },
    {
      id: 'plano-5',
      category: 'cortes',
      categoryLabel: 'Cortes y Secciones',
      title: 'Cuerpo de Válvula — Corte Total A-A',
      scale: 'Escala 1:1',
      norm: 'ISO 128-40',
      projection: 'Corte Longitudinal A-A',
      format: 'A3 Horizontal',
      image: 'assets/imagenes/plano-corte-valvula-hidraulica.jpg',
      excerpt: 'Sección longitudinal por plano de simetría con rayado normalizado a 45° para exponer cámaras internas.',
      description: 'Mediante un corte total por el plano medio A-A se hacen visibles las cavidades interiores, asientos de válvula y espesores de pared sin recurrir a líneas ocultas confusas.',
      highlights: [
        'Rayado de material macizo en líneas finas inclinadas a 45°.',
        'Plano de corte indicado con flechas de observación en coral-carmín.',
        'Los taladros y nervios pasantes quedan claramente diferenciados.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hatch45" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="8" stroke="#1D4ED8" stroke-width="1.2"/>
            </pattern>
          </defs>
          <path d="M 55 70 L 82 70 L 82 95 L 155 95 L 155 48 L 245 48 L 245 95 L 318 95 L 318 70 L 345 70 L 345 200 L 318 200 L 318 175 L 82 175 L 82 200 L 55 200 Z" fill="url(#hatch45)" stroke="#0F172A" stroke-width="2.2"/>
          <path d="M 55 112 L 165 112 L 165 68 L 235 68 L 235 112 L 345 112 L 345 158 L 235 158 L 235 175 L 165 175 L 165 158 L 55 158 Z" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
          <line x1="165" y1="135" x2="235" y2="135" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="35" y1="135" x2="365" y2="135" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <line x1="200" y1="30" x2="200" y2="232" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <text x="200" y="248" text-anchor="middle" font-family="JetBrains Mono" font-size="11" font-weight="700" fill="#E11D48">SECCIÓN A-A (RAYADO 45°)</text>
        </svg>`
    },
    {
      id: 'plano-6',
      category: 'cortes',
      categoryLabel: 'Cortes y Secciones',
      title: 'Eje Escalonado con Sección Abatida',
      scale: 'Escala 1:2',
      norm: 'UNE 1-032 / ISO 128-50',
      projection: 'Corte Parcial y Sección',
      format: 'A4 Horizontal',
      image: null,
      excerpt: 'Representación de un eje de transmisión mediante sección transversal abatida y rotura parcial.',
      description: 'Los ejes macizos no se seccionan longitudinalmente, por lo que se emplea una sección transversal abatida para mostrar la profundidad del chavetero y un corte parcial para el taladro roscado.',
      highlights: [
        'Sección abatida dibujada con línea fina continua.',
        'Corte parcial delimitado por línea de rotura a mano alzada.',
        'Acabados superficiales y chaflanes 2×45° especificados.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hatchShaft" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="7" stroke="#0F172A" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="400" height="270" fill="#FFFFFF"/>
          <path d="M 48 110 L 125 110 L 125 90 L 275 90 L 275 106 L 352 106 L 352 164 L 275 164 L 275 180 L 125 180 L 125 160 L 48 160 Z" stroke="#0F172A" stroke-width="2.2" fill="rgba(29,78,216,0.04)"/>
          <line x1="30" y1="135" x2="370" y2="135" stroke="#E11D48" stroke-width="1" stroke-dasharray="10 3 2 3"/>
          <rect x="148" y="90" width="60" height="14" stroke="#1D4ED8" stroke-width="1.6" fill="#FFFFFF"/>
          <path d="M 218 135 A 28 28 0 1 1 206 110 L 206 122 L 222 122 L 222 110 A 28 28 0 0 1 218 135" fill="url(#hatchShaft)" stroke="#1D4ED8" stroke-width="1.6" transform="translate(26, 84)"/>
          <path d="M 308 106 C 314 122, 302 142, 310 164 L 352 164 L 352 146 L 320 146 L 320 124 L 352 124 L 352 106 Z" fill="url(#hatchShaft)"/>
          <rect x="320" y="124" width="32" height="22" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.5"/>
          <text x="178" y="76" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#1D4ED8">CHAVETERO 12×8</text>
          <text x="240" y="252" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#E11D48">SECCIÓN ABATIDA</text>
        </svg>`
    },
    {
      id: 'plano-7',
      category: 'arquitectonicos',
      categoryLabel: 'Planos Arquitectónicos',
      title: 'Pabellón Estudio — Planta de Distribución',
      scale: 'Escala 1:50',
      norm: 'ISO 7519 / NTE',
      projection: 'Planta Arquitectónica (+1.20 m)',
      format: 'A2 Horizontal',
      image: 'assets/imagenes/plano-arquitectura-planta-estudio.jpg',
      excerpt: 'Plano de planta con muros portantes, tabiquería, carpinterías abatibles, mobiliario y ejes estructurales.',
      description: 'Plano de arquitectura seccionado horizontalmente a 1.20 m del nivel de piso terminado. Incluye simbología normalizada de puertas con arco de apertura, ventanas, ejes estructurales alfanuméricos y escala gráfica.',
      highlights: [
        'Jerarquía de grosores: 0.5 mm en muros cortados, 0.18 mm en mobiliario.',
        'Ejes estructurales A–D y 1–3 referenciados en burbujas normalizadas.',
        'Indicación de norte geográfico y escala gráfica en metros.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#E11D48" stroke-width="0.9" stroke-dasharray="6 3">
            <line x1="60" y1="24" x2="60" y2="246"/>
            <line x1="220" y1="24" x2="220" y2="246"/>
            <line x1="340" y1="24" x2="340" y2="246"/>
            <line x1="30" y1="54" x2="370" y2="54"/>
            <line x1="30" y1="216" x2="370" y2="216"/>
          </g>
          <path d="M 54 48 H 346 V 222 H 264 M 224 222 H 54 V 48" stroke="#0F172A" stroke-width="6"/>
          <rect x="108" y="45" width="76" height="6" fill="#FFFFFF" stroke="#1D4ED8" stroke-width="1.3"/>
          <line x1="220" y1="48" x2="220" y2="146" stroke="#0F172A" stroke-width="3.5"/>
          <line x1="220" y1="184" x2="220" y2="222" stroke="#0F172A" stroke-width="3.5"/>
          <line x1="224" y1="222" x2="224" y2="182" stroke="#0891B2" stroke-width="1.5"/>
          <path d="M 224 182 A 40 40 0 0 1 264 222" stroke="#0891B2" stroke-width="1" stroke-dasharray="3 2"/>
          <text x="200" y="254" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#1D4ED8">EJE 1–3: 7.20 m</text>
        </svg>`
    },
    {
      id: 'plano-8',
      category: 'arquitectonicos',
      categoryLabel: 'Planos Arquitectónicos',
      title: 'Detalle Constructivo: Cubierta y Muro',
      scale: 'Escala 1:20',
      norm: 'ISO 128-23 / CTE',
      projection: 'Sección Constructiva',
      format: 'A3 Vertical',
      image: 'assets/imagenes/plano-detalle-constructivo-cubierta.jpg',
      excerpt: 'Encuentro de forjado de cubierta plana invertida, peto de ladrillo, aislamiento térmico y muro cortina.',
      description: 'Sección constructiva a escala de detalle para ejecución en obra. Muestra las distintas capas del cerramiento (hormigón armado, aislante XPS, lámina impermeabilizante y carpintería) con cotas de nivel.',
      highlights: [
        'Tramas diferenciadas por material: hormigón, fábrica cerámica y aislante térmico.',
        'Símbolos triangulares de cota de nivel (+3.40 m).',
        'Detalle de albardilla metálica y rotura de puente térmico.'
      ],
      svg: `
        <svg viewBox="0 0 400 270" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="concrete" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="3" cy="3" r="0.9" fill="#0F172A"/>
              <circle cx="9" cy="8" r="0.8" fill="#0F172A"/>
              <path d="M6 2l2 2-2 1z" fill="#1D4ED8" opacity="0.6"/>
            </pattern>
            <pattern id="brick" width="14" height="8" patternUnits="userSpaceOnUse">
              <path d="M0 4h14M7 0v4M0 4v4M14 4v4" stroke="#E11D48" stroke-width="0.7" opacity="0.6"/>
            </pattern>
          </defs>
          <rect x="52" y="108" width="276" height="36" fill="url(#concrete)" stroke="#0F172A" stroke-width="2"/>
          <rect x="64" y="50" width="44" height="196" fill="url(#brick)" stroke="#0F172A" stroke-width="2"/>
          <rect x="108" y="92" width="220" height="16" fill="rgba(8,145,178,0.14)" stroke="#0891B2" stroke-width="1.3"/>
          <polygon points="58,50 114,50 114,40 58,43" fill="#CBD5E1" stroke="#0F172A" stroke-width="1.6"/>
          <rect x="76" y="168" width="20" height="62" fill="#E0F2FE" stroke="#1D4ED8" stroke-width="1.6"/>
          <polygon points="154,108 162,96 146,96" stroke="#E11D48" stroke-width="1.3" fill="#FFFFFF"/>
          <text x="168" y="91" font-family="JetBrains Mono" font-size="9.5" fill="#E11D48">+3.40 m</text>
          <text x="234" y="130" font-family="JetBrains Mono" font-size="9" fill="#0F172A">FORJADO HA-25</text>
        </svg>`
    }
  ];

  /* ========================================================================
     3. DATOS DE APLICACIONES INDUSTRIALES (aplicaciones.html)
     ======================================================================== */
  const APPLICATIONS_DATA = {
    arquitectura: {
      tag: 'SECTOR 01 // ARQUITECTURA Y EDIFICACIÓN',
      title: 'Arquitectura y Construcción',
      desc: 'Traduce el programa espacial y estructural en documentación gráfica legal y constructiva: desde el anteproyecto hasta los planos de ejecución en obra y modelos coordinados BIM.',
      bullets: [
        'Planos de emplazamiento, plantas de distribución y plantas de cubiertas acotadas.',
        'Alzados de fachada, secciones constructivas y detalles de carpintería o impermeabilización.',
        'Planos de instalaciones (fontanería, climatización, saneamiento) y coordinación BIM (IFC).'
      ],
      tools: ['AutoCAD', 'Revit BIM', 'Archicad', 'ISO 7519'],
      caption: 'Esquema de planta arquitectónica con ejes, cotas y vanos',
      svg: `
        <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="28" y="28" width="244" height="154" stroke="#0F172A" stroke-width="3" fill="#FFFFFF"/>
          <line x1="150" y1="28" x2="150" y2="128" stroke="#0F172A" stroke-width="2.5"/>
          <line x1="150" y1="158" x2="150" y2="182" stroke="#0F172A" stroke-width="2.5"/>
          <path d="M 150 128 A 30 30 0 0 1 180 158" stroke="#0891B2" stroke-width="1.2" stroke-dasharray="3 2"/>
          <line x1="150" y1="158" x2="180" y2="158" stroke="#0891B2" stroke-width="1.4"/>
          <rect x="65" y="25" width="54" height="6" fill="#E0F2FE" stroke="#1D4ED8" stroke-width="1.2"/>
          <line x1="28" y1="196" x2="272" y2="196" stroke="#E11D48" stroke-width="1.2"/>
          <text x="150" y="193" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#E11D48">12.40 m</text>
          <text x="90" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#1D4ED8">SALA A</text>
          <text x="212" y="106" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#1D4ED8">SALA B</text>
        </svg>`
    },
    mecanica: {
      tag: 'SECTOR 02 // MANUFACTURA Y AUTOMOCIÓN',
      title: 'Ingeniería Mecánica e Industrial',
      desc: 'Define con rigor milimétrico piezas mecanizadas, conjuntos móviles, engranajes y moldes. Cada plano incorpora tolerancias dimensionales y geométricas (GD&T) indispensables para la fabricación CNC.',
      bullets: [
        'Planos de conjunto y listas de despiece (BOM) con marcas numeradas.',
        'Ajustes eje-agujero (H7/g6), tolerancias de concentricidad y acabados superficiales (Ra).',
        'Representación normalizada de roscas métricas, chavetas, rodamientos y soldaduras.'
      ],
      tools: ['SolidWorks', 'CATIA', 'Inventor', 'GD&T / ISO 1101'],
      caption: 'Rueda dentada y eje con tolerancias de ajuste y rugosidad',
      svg: `
        <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="115" cy="105" r="56" stroke="#0891B2" stroke-width="1.2" stroke-dasharray="6 3"/>
          <circle cx="115" cy="105" r="46" stroke="#0F172A" stroke-width="2.2" fill="rgba(29,78,216,0.07)"/>
          <circle cx="115" cy="105" r="18" stroke="#0F172A" stroke-width="2" fill="#FFFFFF"/>
          <rect x="109" y="81" width="12" height="8" fill="#FFFFFF" stroke="#E11D48" stroke-width="1.4"/>
          <line x1="45" y1="105" x2="185" y2="105" stroke="#E11D48" stroke-width="1" stroke-dasharray="8 3 2 3"/>
          <line x1="115" y1="35" x2="115" y2="175" stroke="#E11D48" stroke-width="1" stroke-dasharray="8 3 2 3"/>
          <rect x="195" y="72" width="84" height="24" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.4"/>
          <line x1="220" y1="72" x2="220" y2="96" stroke="#0F172A" stroke-width="1.2"/>
          <line x1="256" y1="72" x2="256" y2="96" stroke="#0F172A" stroke-width="1.2"/>
          <text x="207" y="88" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="#1D4ED8">◎</text>
          <text x="238" y="88" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#0F172A">0.02</text>
          <text x="268" y="88" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#E11D48">A</text>
          <text x="236" y="122" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#0F172A">Ra 1.6 µm</text>
        </svg>`
    },
    civil: {
      tag: 'SECTOR 03 // INFRAESTRUCTURA Y TERRITORIO',
      title: 'Ingeniería Civil y Topografía',
      desc: 'Permite proyectar obras lineales, puentes, presas y movimientos de tierra sobre la superficie terrestre mediante planos acotados, curvas de nivel y perfiles longitudinales y transversales.',
      bullets: [
        'Cartografía topográfica con curvas de nivel equidistantes y coordenadas UTM.',
        'Perfiles longitudinales de carreteras y ferrocarriles con rasantes y pendientes (%).',
        'Planos de armados estructurales para pilas, estribos de puentes y obras hidráulicas.'
      ],
      tools: ['Civil 3D', 'QGIS', 'MicroStation', 'Topografía UTM'],
      caption: 'Curvas de nivel topográficas y perfil de rasante vial',
      svg: `
        <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 30 64 Q 110 34, 175 74 T 275 56" stroke="#1D4ED8" stroke-width="1.5"/>
          <path d="M 30 92 Q 115 62, 180 100 T 275 84" stroke="#0891B2" stroke-width="1.5"/>
          <path d="M 30 120 Q 120 92, 185 128 T 275 114" stroke="#1D4ED8" stroke-width="1.8"/>
          <line x1="40" y1="150" x2="264" y2="54" stroke="#E11D48" stroke-width="2" stroke-dasharray="6 3"/>
          <text x="234" y="48" font-family="JetBrains Mono" font-size="9" fill="#1D4ED8">+120m</text>
          <text x="234" y="108" font-family="JetBrains Mono" font-size="9" fill="#0891B2">+100m</text>
          <rect x="44" y="156" width="212" height="32" fill="#FFFFFF" stroke="#0F172A" stroke-width="1.2"/>
          <path d="M 52 178 L 130 166 L 248 176" stroke="#E11D48" stroke-width="1.6"/>
          <text x="150" y="184" text-anchor="middle" font-family="JetBrains Mono" font-size="8.5" fill="#0F172A">PENDIENTE +2.4%</text>
        </svg>`
    },
    electronica: {
      tag: 'SECTOR 04 // HARDWARE Y SISTEMAS ELÉCTRICOS',
      title: 'Electrónica y Electricidad',
      desc: 'Sustituye la geometría física por simbología funcional estandarizada (IEC/IEEE) para documentar circuitos de potencia, automatización industrial y trazado multicapa de tarjetas PCB.',
      bullets: [
        'Diagramas unifilares de subestaciones, cuadros generales y distribución eléctrica.',
        'Esquemas electrónicos con símbolos normalizados de resistencias, condensadores y CIs.',
        'Diseño de pistas de cobre, vías y máscaras de serigrafía en placas impresas (PCB).'
      ],
      tools: ['KiCad', 'Altium Designer', 'EPLAN', 'IEC 60617'],
      caption: 'Esquemático electrónico normalizado con nodos y bus de datos',
      svg: `
        <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 38 66 H 84 L 92 56 L 102 76 L 112 56 L 122 76 L 130 66 H 175" stroke="#0F172A" stroke-width="2"/>
          <line x1="175" y1="42" x2="175" y2="136" stroke="#0891B2" stroke-width="2"/>
          <circle cx="175" cy="66" r="3.5" fill="#E11D48"/>
          <rect x="198" y="54" width="56" height="66" fill="#FFFFFF" stroke="#0F172A" stroke-width="2"/>
          <line x1="175" y1="66" x2="198" y2="66" stroke="#1D4ED8" stroke-width="1.8"/>
          <line x1="175" y1="104" x2="198" y2="104" stroke="#1D4ED8" stroke-width="1.8"/>
          <line x1="112" y1="104" x2="175" y2="104" stroke="#0F172A" stroke-width="1.8"/>
          <line x1="100" y1="92" x2="100" y2="116" stroke="#0F172A" stroke-width="2.2"/>
          <line x1="112" y1="92" x2="112" y2="116" stroke="#0F172A" stroke-width="2.2"/>
          <line x1="38" y1="104" x2="100" y2="104" stroke="#0F172A" stroke-width="1.8"/>
          <path d="M 175 136 V 154 M 162 154 H 188 M 167 160 H 183 M 172 166 H 178" stroke="#0F172A" stroke-width="1.8"/>
          <text x="107" y="48" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#1D4ED8">R1 10kΩ</text>
          <text x="226" y="90" text-anchor="middle" font-family="JetBrains Mono" font-size="9.5" fill="#E11D48">MCU</text>
        </svg>`
    },
    producto: {
      tag: 'SECTOR 05 // DISEÑO INDUSTRIAL',
      title: 'Diseño de Producto',
      desc: 'Conecta el bocetado conceptual en perspectiva con el desarrollo de superficies ergonómicas, envases y carcasas listas para impresión 3D o inyección de plásticos.',
      bullets: [
        'Bocetado rápido en perspectiva de dos puntos de fuga para validación formal.',
        'Estudios antropométricos y secciones de ergonomía para interacción humana.',
        'Modelado de superficies Clase A y preparación de archivos STL/STEP para prototipado.'
      ],
      tools: ['Rhino 3D', 'Fusion 360', 'KeyShot', 'Prototipado 3D'],
      caption: 'Estudio ergonómico de contorno con radios de curvatura y secciones',
      svg: `
        <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 60 144 C 58 84, 114 48, 178 52 C 228 55, 250 90, 240 132 C 232 160, 172 164, 118 160 C 82 157, 62 156, 60 144 Z" fill="rgba(6,182,212,0.1)" stroke="#0F172A" stroke-width="2.2"/>
          <path d="M 110 58 C 118 96, 118 128, 112 160" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="4 3"/>
          <path d="M 178 52 C 188 90, 186 126, 174 162" stroke="#1D4ED8" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle cx="178" cy="52" r="3" fill="#E11D48"/>
          <line x1="178" y1="52" x2="216" y2="32" stroke="#E11D48" stroke-width="1.2"/>
          <text x="220" y="34" font-family="JetBrains Mono" font-size="9" fill="#E11D48">R42.5 G2</text>
          <text x="150" y="186" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="#0F172A">SECCIÓN ERGONÓMICA</text>
        </svg>`
    }
  };

  /* ========================================================================
     4. COORDENADAS DEL CURSOR Y MENÚ MÓVIL
     ======================================================================== */
  const coordReadout = document.getElementById('coordReadout');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  window.addEventListener('mousemove', (e) => {
    if (!coordReadout) return;
    const x = String(Math.round(e.clientX)).padStart(3, '0');
    const y = String(Math.round(e.clientY)).padStart(3, '0');
    coordReadout.textContent = `X: ${x}  Y: ${y}`;
  }, { passive: true });

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
      hamburgerBtn.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.hidden = isExpanded;
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        mobileMenu.hidden = true;
      });
    });
  }

  /* ========================================================================
     5. TABLERO DUAL DEL HERO (index.html)
     ======================================================================== */
  const heroSvg = document.getElementById('heroSvg');
  const heroArtworkWrap = document.getElementById('heroArtworkWrap');
  const modeSvgBtn = document.getElementById('modeSvgBtn');
  const modeImgBtn = document.getElementById('modeImgBtn');
  const constructionGroup = document.getElementById('constructionGroup');
  const dimensionsGroup = document.getElementById('dimensionsGroup');
  const toggleConstructionBtn = document.getElementById('toggleConstructionBtn');
  const toggleDimensionsBtn = document.getElementById('toggleDimensionsBtn');
  const replayDrawBtn = document.getElementById('replayDrawBtn');

  function playHeroDrawing() {
    if (!heroSvg) return;
    heroSvg.classList.remove('is-drawing');
    void heroSvg.offsetWidth;
    heroSvg.classList.add('is-drawing');
  }

  function setHeroBoardMode(mode) {
    if (!heroSvg || !heroArtworkWrap) return;
    const isSvg = mode === 'svg';
    heroSvg.hidden = !isSvg;
    heroArtworkWrap.hidden = isSvg;

    if (modeSvgBtn) {
      modeSvgBtn.classList.toggle('is-active', isSvg);
      modeSvgBtn.setAttribute('aria-pressed', String(isSvg));
    }
    if (modeImgBtn) {
      modeImgBtn.classList.toggle('is-active', !isSvg);
      modeImgBtn.setAttribute('aria-pressed', String(!isSvg));
    }
    if (toggleConstructionBtn) toggleConstructionBtn.disabled = !isSvg;
    if (toggleDimensionsBtn) toggleDimensionsBtn.disabled = !isSvg;
    if (replayDrawBtn) replayDrawBtn.disabled = !isSvg;

    if (isSvg) playHeroDrawing();
  }

  if (heroSvg) playHeroDrawing();
  if (modeSvgBtn) modeSvgBtn.addEventListener('click', () => setHeroBoardMode('svg'));
  if (modeImgBtn) modeImgBtn.addEventListener('click', () => setHeroBoardMode('img'));

  if (toggleConstructionBtn && constructionGroup) {
    toggleConstructionBtn.addEventListener('click', () => {
      const isActive = toggleConstructionBtn.classList.toggle('is-active');
      toggleConstructionBtn.setAttribute('aria-pressed', String(isActive));
      constructionGroup.classList.toggle('is-hidden-layer', !isActive);
    });
  }

  if (toggleDimensionsBtn && dimensionsGroup) {
    toggleDimensionsBtn.addEventListener('click', () => {
      const isActive = toggleDimensionsBtn.classList.toggle('is-active');
      toggleDimensionsBtn.setAttribute('aria-pressed', String(isActive));
      dimensionsGroup.classList.toggle('is-hidden-layer', !isActive);
    });
  }

  if (replayDrawBtn) replayDrawBtn.addEventListener('click', playHeroDrawing);

  /* ========================================================================
     6. LÍNEA DE TIEMPO INTERACTIVA (historia.html)
     ======================================================================== */
  const timelineSteps = document.querySelectorAll('.timeline-step');
  const timelineSpotlight = document.getElementById('timelineSpotlight');
  const eraCards = document.querySelectorAll('.era-card');

  function renderEraSpotlight(eraIndex) {
    const era = HISTORICAL_ERAS[eraIndex] || HISTORICAL_ERAS[0];
    if (!timelineSpotlight) return;

    timelineSpotlight.innerHTML = `
      <div>
        <span class="spotlight__meta font-mono">${era.badge}</span>
        <h3 class="spotlight__title">${era.title}</h3>
        <p class="spotlight__desc">${era.desc}</p>
        <dl class="spotlight__facts">
          <div class="spotlight__fact">
            <dt class="font-mono">REFERENTES CLAVE</dt>
            <dd>${era.figure}</dd>
          </div>
          <div class="spotlight__fact">
            <dt class="font-mono">APORTE TÉCNICO</dt>
            <dd>${era.contribution}</dd>
          </div>
        </dl>
      </div>
      <div class="spotlight__diagram">
        ${era.svg}
        <span class="spotlight__caption font-mono">${era.caption}</span>
      </div>
    `;

    timelineSteps.forEach((btn, idx) => {
      const active = idx === eraIndex;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-selected', String(active));
    });

    eraCards.forEach((card, idx) => {
      card.classList.toggle('is-highlighted', idx === eraIndex);
    });
  }

  if (timelineSpotlight) {
    timelineSteps.forEach((btn) => {
      btn.addEventListener('click', () => renderEraSpotlight(Number(btn.dataset.era)));
    });
    eraCards.forEach((card) => {
      card.addEventListener('click', () => renderEraSpotlight(Number(card.dataset.eraCard)));
    });
    renderEraSpotlight(0);
  }

  /* ========================================================================
     7. GALERÍA FILTRABLE Y MODAL LIGHTBOX (galeria.html)
     ======================================================================== */
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryStatus = document.getElementById('galleryStatus');

  const modal = document.getElementById('planModal');
  const modalCanvas = document.getElementById('modalCanvas');
  const modalCategory = document.getElementById('modalCategory');
  const modalTitle = document.getElementById('modalTitle');
  const modalScale = document.getElementById('modalScale');
  const modalNorm = document.getElementById('modalNorm');
  const modalProjection = document.getElementById('modalProjection');
  const modalFormat = document.getElementById('modalFormat');
  const modalDesc = document.getElementById('modalDesc');
  const modalHighlights = document.getElementById('modalHighlights');
  const modalCounter = document.getElementById('modalCounter');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalPrevBtn = document.getElementById('modalPrevBtn');
  const modalNextBtn = document.getElementById('modalNextBtn');
  const modalBlueprintToggle = document.getElementById('modalBlueprintToggle');
  const modalViewImgBtn = document.getElementById('modalViewImgBtn');
  const modalViewSvgBtn = document.getElementById('modalViewSvgBtn');

  let visiblePlans = [...PLANS_DATA];
  let activeModalIndex = 0;
  let modalRenderMode = 'auto';
  let lastFocusedTrigger = null;

  function scopeModalSvgIds(svgMarkup) {
    return svgMarkup
      .replace(/id="(hatch45|hatchShaft|concrete|brick)"/g, 'id="modal-$1"')
      .replace(/url\(#(hatch45|hatchShaft|concrete|brick)\)/g, 'url(#modal-$1)');
  }

  function renderGallery(filter) {
    if (!galleryGrid) return;

    visiblePlans = filter === 'todos'
      ? [...PLANS_DATA]
      : PLANS_DATA.filter((item) => item.category === filter);

    galleryGrid.innerHTML = visiblePlans.map((plan, index) => {
      const previewMarkup = plan.image
        ? `<img src="${plan.image}" alt="${plan.title} (${plan.scale})" loading="lazy">`
        : `<div style="width:100%; height:100%; display:flex; align-items:center;">${plan.svg}</div>`;

      const typeLabel = plan.image ? 'LÁMINA HD + SVG' : 'VECTOR SVG';

      return `
        <article class="plan-card" tabindex="0" role="button" aria-label="Ampliar plano: ${plan.title}" data-plan-index="${index}">
          <div class="plan-card__preview">
            <div class="plan-card__guide" aria-hidden="true"></div>
            ${previewMarkup}
            <span class="plan-card__badge-type font-mono">${typeLabel}</span>
            <span class="plan-card__zoom">AMPLIAR PLANO &nearr;</span>
          </div>
          <div class="plan-card__body">
            <div class="plan-card__top">
              <span class="plan-card__cat font-mono">${plan.categoryLabel}</span>
              <span class="plan-card__scale font-mono">${plan.scale}</span>
            </div>
            <h3 class="plan-card__title">${plan.title}</h3>
            <p class="plan-card__excerpt">${plan.excerpt}</p>
            <div class="plan-card__meta font-mono">
              <span>NORMA: ${plan.norm}</span>
              <span>${plan.format}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    if (galleryStatus) {
      galleryStatus.textContent = `MOSTRANDO ${visiblePlans.length} DE ${PLANS_DATA.length} LÁMINAS`;
    }

    galleryGrid.querySelectorAll('.plan-card').forEach((card) => {
      const openHandler = () => openPlanModal(Number(card.dataset.planIndex), card);
      card.addEventListener('click', openHandler);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openHandler();
        }
      });
    });
  }

  function renderModalCanvas(plan) {
    const hasImage = Boolean(plan.image);
    if (modalViewImgBtn && modalViewSvgBtn) {
      modalViewImgBtn.hidden = !hasImage;
      modalViewSvgBtn.hidden = !hasImage;
    }

    const useImage = hasImage && modalRenderMode !== 'svg';
    if (modalViewImgBtn && modalViewSvgBtn) {
      modalViewImgBtn.classList.toggle('is-active', useImage);
      modalViewSvgBtn.classList.toggle('is-active', !useImage);
    }

    modalCanvas.innerHTML = useImage
      ? `<img src="${plan.image}" alt="${plan.title} — ${plan.scale}">`
      : scopeModalSvgIds(plan.svg);
  }

  function updateModalContent() {
    const plan = visiblePlans[activeModalIndex];
    if (!plan) return;

    modalCategory.textContent = plan.categoryLabel.toUpperCase();
    modalTitle.textContent = plan.title;
    modalScale.textContent = plan.scale;
    modalNorm.textContent = plan.norm;
    modalProjection.textContent = plan.projection;
    modalFormat.textContent = plan.format;
    modalDesc.textContent = plan.description;
    modalHighlights.innerHTML = plan.highlights.map((h) => `<li>${h}</li>`).join('');
    modalCounter.textContent = `${activeModalIndex + 1} / ${visiblePlans.length}`;

    renderModalCanvas(plan);
  }

  function openPlanModal(index, triggerEl) {
    activeModalIndex = index;
    modalRenderMode = 'auto';
    lastFocusedTrigger = triggerEl || document.activeElement;
    updateModalContent();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    modalCloseBtn.focus();
  }

  function closePlanModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
    if (lastFocusedTrigger && typeof lastFocusedTrigger.focus === 'function') {
      lastFocusedTrigger.focus();
    }
  }

  if (galleryGrid) {
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        renderGallery(btn.dataset.filter);
      });
    });

    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closePlanModal);
    if (modal) {
      modal.querySelectorAll('[data-close-modal]').forEach((el) => {
        el.addEventListener('click', closePlanModal);
      });
    }

    if (modalViewImgBtn) {
      modalViewImgBtn.addEventListener('click', () => {
        modalRenderMode = 'img';
        renderModalCanvas(visiblePlans[activeModalIndex]);
      });
    }

    if (modalViewSvgBtn) {
      modalViewSvgBtn.addEventListener('click', () => {
        modalRenderMode = 'svg';
        renderModalCanvas(visiblePlans[activeModalIndex]);
      });
    }

    if (modalPrevBtn) {
      modalPrevBtn.addEventListener('click', () => {
        activeModalIndex = (activeModalIndex - 1 + visiblePlans.length) % visiblePlans.length;
        modalRenderMode = 'auto';
        updateModalContent();
      });
    }

    if (modalNextBtn) {
      modalNextBtn.addEventListener('click', () => {
        activeModalIndex = (activeModalIndex + 1) % visiblePlans.length;
        modalRenderMode = 'auto';
        updateModalContent();
      });
    }

    if (modalBlueprintToggle && modalCanvas) {
      modalBlueprintToggle.addEventListener('click', () => {
        const active = modalBlueprintToggle.classList.toggle('is-active');
        modalBlueprintToggle.setAttribute('aria-pressed', String(active));
        modalCanvas.classList.toggle('is-blueprint', active);
      });
    }

    document.addEventListener('keydown', (e) => {
      if (!modal || modal.hidden) return;
      if (e.key === 'Escape') closePlanModal();
      if (e.key === 'ArrowLeft') {
        activeModalIndex = (activeModalIndex - 1 + visiblePlans.length) % visiblePlans.length;
        modalRenderMode = 'auto';
        updateModalContent();
      }
      if (e.key === 'ArrowRight') {
        activeModalIndex = (activeModalIndex + 1) % visiblePlans.length;
        modalRenderMode = 'auto';
        updateModalContent();
      }
    });

    renderGallery('todos');
  }

  /* ========================================================================
     8. PESTAÑAS DE APLICACIONES INDUSTRIALES (aplicaciones.html)
     ======================================================================== */
  const appsTabs = document.querySelectorAll('.app-tab');
  const appPanel = document.getElementById('appPanel');
  const sectorMinis = document.querySelectorAll('.sector-mini[data-app]');

  function renderApplication(key) {
    const app = APPLICATIONS_DATA[key];
    if (!app || !appPanel) return;

    appPanel.innerHTML = `
      <div class="app-panel__grid">
        <div>
          <span class="app-panel__tag font-mono">${app.tag}</span>
          <h3 class="app-panel__title">${app.title}</h3>
          <p class="app-panel__desc">${app.desc}</p>
          <ul class="app-panel__list">
            ${app.bullets.map((item) => `<li>${item}</li>`).join('')}
          </ul>
          <div class="app-panel__tools" aria-label="Herramientas y normas habituales">
            ${app.tools.map((tool) => `<span>${tool}</span>`).join('')}
          </div>
        </div>
        <div class="app-panel__visual">
          ${app.svg}
          <div class="app-panel__caption font-mono">${app.caption}</div>
        </div>
      </div>
    `;

    appsTabs.forEach((tab) => {
      const active = tab.dataset.app === key;
      tab.classList.toggle('is-active', active);
      tab.setAttribute('aria-selected', String(active));
    });
  }

  if (appPanel) {
    appsTabs.forEach((tab) => {
      tab.addEventListener('click', () => renderApplication(tab.dataset.app));
    });
    sectorMinis.forEach((card) => {
      card.addEventListener('click', () => {
        renderApplication(card.dataset.app);
        appPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
    renderApplication('arquitectura');
  }

  /* ========================================================================
     9. ANIMACIÓN AL HACER SCROLL (REVEAL)
     ======================================================================== */
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay || 0);
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, delay);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.1 });

    revealItems.forEach((el) => revealObserver.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }
})();
