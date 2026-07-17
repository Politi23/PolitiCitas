"use client";

import { motion, useReducedMotion } from "motion/react";
import { WA_INFO } from "@/lib/site";
import { WaIc } from "@/components/icons";
import { PhoneDemo } from "@/components/phone-demo";

const EASE = [0.22, 1, 0.36, 1] as const;

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
      <motion.h1 className="hero-title" {...item(0)}>
        <span className="h1-top">Citas, clientes e ingresos.</span>
        Un sistema a la medida de tu negocio.
      </motion.h1>

      <div className="hero-row">
        <div className="hero-copy">
          <motion.p className="hero-sub" {...item(1)}>
            Lo desarrollo con tu nombre, tus servicios y tus precios, y te lo
            entrego funcionando en una semana.
          </motion.p>
          <motion.p className="hero-specs" {...item(2)}>
            Dólares y bolívares a tasa BCV
            <span aria-hidden="true"> · </span>
            WhatsApp integrado
            <span aria-hidden="true"> · </span>
            Para médicos, barberos y más
          </motion.p>
          <motion.div className="hero-cta" {...item(3)}>
            <a className="btn btn-wa" href={WA_INFO} target="_blank" rel="noopener">
              <WaIc />
              Pide tu cotización gratis
            </a>
            <a className="link-quiet" href="#cotizacion">
              ¿Qué incluye? →
            </a>
          </motion.div>
          <motion.p className="hero-proof" {...item(4)}>
            <span className="dot-live" />
            En producción: usado a diario por especialistas de salud en
            Venezuela.
          </motion.p>
        </div>

        <div className="hero-demo">
          <PhoneDemo />
        </div>
      </div>
    </header>
  );
}
