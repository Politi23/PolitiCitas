# CLAUDE.md — PolitiCitas (landing de PolitiWebStudio)

Guía para Claude Code al trabajar en este repo. Lee también `PRODUCT.md` (contexto de negocio y diseño).

## Qué es
Landing page de venta, en español, de **PolitiWebStudio**: un desarrollador web de Puerto
Cabello, Venezuela, que vende **sistemas de gestión de citas a la medida** para médicos,
barberos, spas, psicólogos y cualquier negocio que agende citas. El producto base es una PWA
(la app "DoctorHub", que vive en el repo hermano `../doctorhub`) que se personaliza por cliente,
pero **la landing NO revela que hay una base prehecha**: se vende como desarrollo a medida.

## Comandos
```bash
npm run dev     # desarrollo (Turbopack). OJO: el puerto 3000 suele estar ocupado en la máquina
                # del usuario; Next elige otro, o usar: npx next dev -p 3111
npm run build   # build de producción — correr SIEMPRE antes de commitear
```

## Stack
Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Motion (`motion/react`).
Todo pre-renderizado estático (SSG). Fuente **Bricolage Grotesque** auto-hospedada vía `next/font`.

## Estructura
- `lib/site.ts` — **fuente única de contenido/datos**: nombre de marca, links, mensajes de
  WhatsApp, y los `PERFILES` de la demo (consultorio/barbería/spa). Editar textos aquí primero.
- `app/layout.tsx` — metadata (OG, título), fuente, `<body>`.
- `app/globals.css` — **todo el design system** (tokens en `:root`, clases de componentes). Sin CSS-in-JS.
- `app/page.tsx` — ensambla las secciones en orden.
- `components/` — `nav`, `hero`, `phone-demo` (la demo interactiva), `sections` (todas las
  secciones + footer), `reveal` (animaciones de scroll), `counter`, `icons`.

## Reglas de marca y contenido (NO romper)
- **La marca se escribe `PolitiWebStudio`**, todo junto, sin espacios. Nunca "PolitiWeb Studio".
- **El número de teléfono NUNCA es visible en la página.** Vive solo en `WA_NUM` dentro de
  `lib/site.ts` como destino de los links `wa.me` — ese constante es obligatorio para que los
  botones de WhatsApp funcionen, NO borrarlo. Lo que se prohíbe es mostrarlo como texto.
- **Sin precios publicados.** Todo manda a cotizar por WhatsApp; el usuario cierra la venta en
  la conversación. Se menciona que hay financiamiento (pago por partes) y pagos vía Binance/tasa
  Binance para bolívares.
- **Ubicación: Puerto Cabello, Venezuela** (no Caracas).
- La app real tiene un asistente IA, pero **la landing NO lo menciona** (es un extra para revelar
  en la cotización).

## Reglas de diseño (el usuario es exigente con esto)
- **Íconos SVG inline siempre, nunca emojis.** Sprite de paths en `components/icons.tsx` (`<Ic name="..."/>`).
- **Paleta plana: sin degradados, sin brillos/glows, sin glassmorphism.** Fondo violeta oscuro
  sólido (`#0d0719`), superficies planas con borde de 1px, acento violeta (`#7c3aed`/`#a78bfa`),
  verde WhatsApp (`#25d366`) reservado solo para CTAs.
- **Anti-genérico / anti-"IA".** El usuario rechaza patrones de plantilla: nada de titulares con
  una palabra en color de acento, nada de dos botones gemelos, nada de grillas de tarjetas
  idénticas, nada de eyebrows en mayúsculas sobre cada sección. Al diseñar/ajustar UI, usar la
  skill **impeccable** (`/impeccable ...`) y correr su detector: `node ../../.claude/skills/impeccable/scripts/detect.mjs --json app components` (ajustar ruta según dónde esté instalada).
- **La animación del teléfono demo es sagrada** — al usuario le gusta: tilt 3D con el cursor,
  selector con pill animado (layoutId), crossfade de textos al cambiar de perfil. No quitarla.
- Respetar `prefers-reduced-motion` en toda animación nueva.

## Deploy
- GitHub: `Politi23/PolitiCitas` (rama `main`). Cada `git push` → Vercel auto-deploya.
- `vercel.json` fuerza `"framework": "nextjs"`.
- Dominio en vivo: **https://citas.politiwebstudio.com** (SSL activo).
- DNS: se administra en **Cloudflare** (no en Hostinger, aunque el dominio sea de ahí). El
  subdominio `citas` es un CNAME → `cname.vercel-dns.com` en modo **DNS only** (nube gris).
- Los commits de este usuario **no llevan** línea `Co-Authored-By: Claude`.

## Pendiente
- **Imagen Open Graph** (`app/opengraph-image.png`, 1200×630) para la tarjeta al compartir por
  WhatsApp. Aún no existe. Idea: fondo de la landing + titular + mockup del teléfono.
