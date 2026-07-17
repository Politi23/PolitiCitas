"use client";

import { motion, useReducedMotion } from "motion/react";
import { WA_INFO } from "@/lib/site";
import { Ic, WaIc, type IconName } from "@/components/icons";
import { PhoneDemo } from "@/components/phone-demo";

const EASE = [0.22, 1, 0.36, 1] as const;

const OFICIOS: { icon: IconName; label: string }[] = [
  { icon: "steth", label: "Médicos" },
  { icon: "scissors", label: "Barberías" },
  { icon: "sparkles", label: "Estética y spas" },
  { icon: "brain", label: "Psicólogos" },
  { icon: "smile", label: "Odontólogos" },
  { icon: "paw", label: "Veterinarias" },
  { icon: "calcheck", label: "Y cualquier negocio con citas" },
];

export function Hero() {
  const reduced = useReducedMotion();

  const item = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.75, ease: EASE, delay: 0.08 * i },
        };

  return (
    <header className="hero wrap">
      <div className="hero-grid">
        <div>
          <motion.h1 className="hero-title" {...item(0)}>
            <span className="h1-top">Citas, clientes e ingresos.</span>
            Un sistema a la medida de tu negocio.
          </motion.h1>
          <motion.p className="hero-sub" {...item(1)}>
            Lo desarrollo con tu nombre, tus servicios y tus precios, y te lo
            entrego funcionando en una semana. Con dólares y bolívares a tasa
            BCV, y WhatsApp integrado.
          </motion.p>
          <motion.div className="hero-cta" {...item(2)}>
            <a className="btn btn-wa" href={WA_INFO} target="_blank" rel="noopener">
              <WaIc />
              Pide tu cotización gratis
            </a>
            <a className="link-quiet" href="#cotizacion">
              ¿Qué incluye? →
            </a>
          </motion.div>
          <motion.p className="hero-proof" {...item(3)}>
            <span className="dot-live" />
            En producción: usado a diario por especialistas de salud en
            Venezuela.
          </motion.p>
          <motion.div className="hero-for" {...item(4)}>
            <p className="hero-for-label">Hecho para negocios que viven de las citas:</p>
            <div className="hero-chips">
              {OFICIOS.map((o) => (
                <span key={o.label} className="chip-sm">
                  <Ic name={o.icon} />
                  {o.label}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <PhoneDemo />
      </div>
    </header>
  );
}
