# PRODUCT.md — Landing de venta PolitiWebStudio

## Qué es
Landing page de una sola página, en español, para vender sistemas de gestión de citas
"a medida" a negocios venezolanos (médicos, barberos, spas, psicólogos, estética).
El producto real es un template white-label (React PWA) ya probado en producción con
médicos reales; la landing vende el servicio de personalización + mensualidad.

- **Register:** brand (la landing ES el producto de diseño; debe demostrar la calidad
  visual de la app que se vende).
- **Audiencia:** dueños de negocios de servicios en Venezuela, mayormente en móvil,
  llegando desde Instagram o WhatsApp. Poca paciencia, alta desconfianza — la prueba
  visual (mockup real de la app) y el CTA de WhatsApp lo son todo.
- **Escena física:** un barbero o una doctora revisando Instagram de noche en su
  teléfono, pantalla brillante en un cuarto oscuro → tema oscuro obligado, botones
  grandes, todo legible a un brazo de distancia.

## Voz de marca
Tres palabras: **directa, tecnológica, cercana** (español venezolano, tuteo).

## Sistema visual
- Herencia deliberada del producto: fondo violeta profundo con orbes de malla
  animados y tarjetas "liquid glass" — el vidrio se usa con propósito (el mockup
  del teléfono demuestra la app real), no como decoración por defecto.
- Acento de conversión: verde WhatsApp (#25D366) reservado EXCLUSIVAMENTE para CTAs.
- Tipografía: Bricolage Grotesque (Google Fonts, fallback system-ui).

## Conversión
- CTA único: WhatsApp con mensaje precargado (número solo en lib/site.ts, nunca visible en la página).
- Sin precios publicados: todo manda a cotizar por WhatsApp (el usuario cierra la venta
  en la conversación). Se menciona que hay opciones de financiamiento (pago por partes).
- Pieza distintiva: el mockup cambia su terminología en vivo (Consultorio /
  Barbería / Spa) — demuestra el pitch "la misma base, tu negocio".

## Stack
Next.js 15 (App Router, React 19, TypeScript) + Tailwind CSS 4 + Motion.
- Fuente Bricolage Grotesque auto-hospedada vía `next/font` (sin CDN externo).
- Todo pre-renderizado estático (SSG). Contenido y datos en `lib/site.ts`.
- Design system del producto en `app/globals.css`; secciones en `components/`.
- Efectos: entrada orquestada del hero, tilt 3D del teléfono (desactivado en touch
  y con `prefers-reduced-motion`), contadores animados, selector con pill animado
  (layoutId), reveals con stagger.

## Deploy
GitHub `Politi23/PolitiCitas` → Vercel detecta Next.js automáticamente →
dominio `citas.politiwebstudio.com` (CNAME en Hostinger a cname.vercel-dns.com).
Correr local: `npm run dev`.
