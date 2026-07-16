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
      <div className="hero-grid">
        <div>
          <motion.h1 {...item(0)}>
            Tu agenda, tus clientes y tus ingresos.{" "}
            <em>Una app hecha para tu negocio.</em>
          </motion.h1>
          <motion.p className="hero-sub" {...item(1)}>
            Desarrollo sistemas de gestión a la medida para médicos, barberos y
            cualquier negocio que viva de las citas. Con tu nombre, tus
            servicios y tus precios: dólares y bolívares a tasa BCV, y WhatsApp
            integrado.
          </motion.p>
          <motion.div className="hero-cta" {...item(2)}>
            <a className="btn btn-wa" href={WA_INFO} target="_blank" rel="noopener">
              <WaIc />
              Pide tu cotización gratis
            </a>
            <a className="btn btn-ghost" href="#cotizacion">
              ¿Qué incluye?
            </a>
          </motion.div>
          <motion.p className="hero-proof" {...item(3)}>
            <span className="dot-live" />
            En producción: usado a diario por especialistas de salud en
            Venezuela.
          </motion.p>
        </div>
        <PhoneDemo />
      </div>
    </header>
  );
}
