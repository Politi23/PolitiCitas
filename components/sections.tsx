import { SITE, WA_COTIZAR, WA_INFO } from "@/lib/site";
import { Ic, WaIc, type IconName } from "@/components/icons";
import { Reveal, RevealStagger, StaggerItem } from "@/components/reveal";
import { Counter } from "@/components/counter";

/* ── Para quién ── */
const OFICIOS: { icon: IconName; label: string }[] = [
  { icon: "steth", label: "Médicos y especialistas" },
  { icon: "scissors", label: "Barberías" },
  { icon: "sparkles", label: "Estética y spas" },
  { icon: "brain", label: "Psicólogos" },
  { icon: "smile", label: "Odontólogos" },
  { icon: "paw", label: "Veterinarias" },
  { icon: "calcheck", label: "Y cualquier negocio con citas" },
];

export function Who() {
  return (
    <section className="who wrap">
      <RevealStagger className="who-track" gap={0.05}>
        {OFICIOS.map((o) => (
          <StaggerItem key={o.label} className="who-chip">
            <Ic name={o.icon} />
            {o.label}
          </StaggerItem>
        ))}
      </RevealStagger>
      <Reveal className="who-note">
        Si tu día se organiza por citas y necesitas saber cuánto entra y cuánto
        sale, esto es para ti.
      </Reveal>
    </section>
  );
}

/* ── Doble moneda ── */
const MONEY_POINTS = [
  "Tasa BCV actualizada sola, todos los días",
  "Cada pago guarda la tasa del día en que se cobró, así tus totales históricos nunca se dañan",
  "Efectivo, Zelle, Pago Móvil, transferencia, PayPal, Binance, con pagos divididos en dos métodos",
  "Totales del mes y del año en USD reales, no estimados",
];

export function Money() {
  return (
    <section className="wrap">
      <div className="money">
        <Reveal>
          <h2>Dólares y bolívares sin sacar la calculadora</h2>
          <p>
            Los sistemas genéricos no entienden cómo se cobra en Venezuela. El
            tuyo sí: cada pago se registra en su moneda y se convierte
            automáticamente con la tasa BCV del día.
          </p>
          <ul className="money-points">
            {MONEY_POINTS.map((punto) => (
              <li key={punto}>
                <Ic name="check" />
                {punto}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal className="receipt" delay={0.1}>
          <div className="rrow">
            <span className="rl">Ingresos del mes (USD)</span>
            <span className="rv green">
              <Counter value={1240} prefix="$" />
            </span>
          </div>
          <div className="rrow">
            <span className="rl">Ingresos del mes (Bs)</span>
            <span className="rv sky">
              <Counter value={48350} suffix=" Bs" />
            </span>
          </div>
          <div className="rrow">
            <span className="rl">Egresos del negocio</span>
            <span className="rv">
              <Counter value={310} prefix="$" />
            </span>
          </div>
          <div className="rrow">
            <span className="rl">Balance neto en USD</span>
            <span className="rv green">
              <Counter value={1269.6} prefix="+$" />
            </span>
          </div>
          <p className="receipt-cap">
            Conversión con la tasa BCV guardada en cada pago: así se veía tu mes
            de verdad.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Funciones ── */
const FEATS: { icon: IconName; titulo: string; texto: string; wide?: boolean }[] = [
  {
    icon: "calendar",
    titulo: "Agenda de citas",
    texto:
      "Cita rápida en tres toques, estados (atendida, cancelada, no asistió), reagendado con un botón y vista de los próximos 7 días.",
    wide: true,
  },
  {
    icon: "chat",
    titulo: "WhatsApp integrado",
    texto:
      "Escríbele a tus clientes con un toque y reactiva a los que tienen meses sin venir, con mensajes con tu nombre y tu estilo.",
    wide: true,
  },
  {
    icon: "users",
    titulo: "Fichas de clientes",
    texto: "Historial completo de citas y pagos por persona, con teléfono y cédula venezolanos.",
  },
  {
    icon: "file",
    titulo: "Reportes en PDF",
    texto: "Reporte mensual o anual de ingresos y egresos, listo para imprimir o enviar.",
  },
  {
    icon: "chart",
    titulo: "Estadísticas",
    texto: "Tus mejores meses, servicios más pedidos y comparativas para decidir con datos.",
  },
  {
    icon: "phone",
    titulo: "Se instala como app",
    texto: "Directo en tu teléfono, sin tiendas de aplicaciones y sin descargas de nadie más.",
    wide: true,
  },
  {
    icon: "lock",
    titulo: "Tus datos son tuyos",
    texto: "Base de datos propia y exclusiva para tu negocio, con acceso solo para ti.",
    wide: true,
  },
];

export function Features() {
  return (
    <section className="wrap">
      <Reveal className="sec-head">
        <h2>Todo lo que tu negocio necesita, nada que no uses</h2>
        <p>
          No es una plantilla con mil menús: cada función existe porque un
          negocio real la usa todos los días.
        </p>
      </Reveal>
      <RevealStagger className="feats" gap={0.06}>
        {FEATS.map((f) => (
          <StaggerItem key={f.titulo} className={f.wide ? "feat wide" : "feat"}>
            <div className="fic">
              <Ic name={f.icon} />
            </div>
            <h3>{f.titulo}</h3>
            <p>{f.texto}</p>
          </StaggerItem>
        ))}
      </RevealStagger>
    </section>
  );
}

/* ── Proceso ── */
const PASOS = [
  {
    titulo: "Conversamos",
    texto:
      "Me escribes por WhatsApp y me cuentas cómo trabaja tu negocio: tus servicios, tus precios, cómo cobras.",
  },
  {
    titulo: "La hago tuya",
    texto:
      "Desarrollo tu sistema sobre mi plataforma probada: tu nombre, tu logo, tus servicios y tu dominio propio.",
  },
  {
    titulo: "Te la entrego lista",
    texto:
      "Instalada en tu teléfono, con tus datos cargados y una capacitación para que la domines desde el día uno.",
  },
];

export function Steps() {
  return (
    <section className="wrap">
      <Reveal className="sec-head">
        <h2>De la primera conversación a tu app funcionando</h2>
      </Reveal>
      <RevealStagger className="steps" gap={0.1}>
        {PASOS.map((paso) => (
          <StaggerItem key={paso.titulo} className="step">
            <h3>{paso.titulo}</h3>
            <p>{paso.texto}</p>
          </StaggerItem>
        ))}
      </RevealStagger>
      <Reveal className="steps-note">
        Tiempo típico de entrega: <b>una semana</b>.
      </Reveal>
    </section>
  );
}

/* ── Cotización ── */
const INCLUYE = [
  "Personalización completa: tu marca, tus servicios y tus precios",
  "Dominio propio e instalación en tus equipos",
  "Capacitación para ti y tu equipo",
  "Hosting, respaldos automáticos y soporte directo por WhatsApp",
  "Actualizaciones y tasa BCV al día",
];

export function Quote() {
  return (
    <section className="wrap" id="cotizacion">
      <Reveal className="sec-head">
        <h2>Cada negocio es diferente. Tu precio también.</h2>
        <p>
          No vendo paquetes genéricos: tu sistema se cotiza según lo que tu
          negocio realmente necesita. La cotización es gratis, sin compromiso, y
          te respondo el mismo día.
        </p>
      </Reveal>
      <Reveal className="quote">
        <div>
          <h3>Tu sistema siempre incluye</h3>
          <ul>
            {INCLUYE.map((punto) => (
              <li key={punto}>
                <Ic name="check" />
                {punto}
              </li>
            ))}
          </ul>
        </div>
        <div className="quote-cta">
          <div className="fin">
            <Ic name="card" />
            <span>
              <strong>Financiamiento disponible:</strong> puedes pagar tu
              sistema por partes, según lo acordemos en la cotización.
            </span>
          </div>
          <a className="btn btn-wa" href={WA_COTIZAR} target="_blank" rel="noopener">
            <WaIc />
            Pide tu cotización gratis
          </a>
          <p className="quote-sub">
            Pagos en dólares, Binance (USDT) o bolívares a la tasa Binance del
            día.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

/* ── FAQ ── */
const PREGUNTAS = [
  {
    q: "¿Cuánto cuesta?",
    a: "Depende de las funciones que tu negocio necesite, por eso cada sistema se cotiza aparte. Escríbeme por WhatsApp, cuéntame cómo trabajas y te paso tu precio el mismo día, gratis y sin compromiso. Además hay opciones de financiamiento para pagar por partes.",
  },
  {
    q: "¿Tengo que descargarla de Play Store o App Store?",
    a: "No. Es una aplicación web progresiva (PWA): se instala directo desde el navegador en tu teléfono, tablet o computadora, y funciona como cualquier app. Sin tiendas, sin actualizaciones manuales.",
  },
  {
    q: "¿Dónde quedan mis datos? ¿Puede verlos alguien más?",
    a: "Cada cliente tiene su propia base de datos exclusiva, protegida con usuario y contraseña. Tus pacientes o clientes, tus citas y tus números son solo tuyos, y se respaldan automáticamente.",
  },
  {
    q: "No soy médico ni barbero, ¿me sirve?",
    a: "Si tu negocio agenda citas y cobra por servicios, sí: psicólogos, odontólogos, veterinarias, estudios de tatuaje, entrenadores, técnicos… El sistema se adapta a tu vocabulario y a tus servicios.",
  },
  {
    q: "¿Y si necesito algo que la app no hace?",
    a: "Para eso es a la medida. En la cotización revisamos lo que tu negocio necesita y te digo qué está incluido y qué llevaría desarrollo adicional, con su precio claro antes de empezar.",
  },
  {
    q: "¿Cómo se paga?",
    a: "Efectivo, Zelle, transferencia, Pago Móvil o Binance (USDT), en dólares o bolívares. Los pagos en bolívares se calculan a la tasa Binance del día. Y si lo necesitas, hay opciones de financiamiento: acordamos las partes en la cotización, antes de empezar.",
  },
];

export function Faq() {
  return (
    <section className="wrap">
      <Reveal className="sec-head">
        <h2>Preguntas frecuentes</h2>
      </Reveal>
      <Reveal className="faq">
        {PREGUNTAS.map((p) => (
          <details key={p.q}>
            <summary>{p.q}</summary>
            <p>{p.a}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

/* ── CTA final + Footer ── */
export function CtaFinal() {
  return (
    <section className="wrap">
      <Reveal className="cta-final">
        <h2>Tu negocio merece más que un cuaderno y la memoria</h2>
        <p>
          Cuéntame cómo trabajas y te muestro tu sistema andando. La primera
          conversación no cuesta nada.
        </p>
        <a className="btn btn-wa" href={WA_INFO} target="_blank" rel="noopener">
          <WaIc />
          Escríbeme por WhatsApp
        </a>
        <p className="cta-sub">{SITE.telefonoDisplay} · Respondo el mismo día</p>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="wrap">
      <div className="foot">
        <span>© 2026 PolitiWeb Studio · Hecho en Venezuela</span>
        <div className="foot-links">
          <a href={SITE.web} target="_blank" rel="noopener">
            politiwebstudio.com
          </a>
          <a href={SITE.instagram} target="_blank" rel="noopener">
            Instagram
          </a>
          <a href={waLinkFooter} target="_blank" rel="noopener">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}

const waLinkFooter = "https://wa.me/584127782232";
