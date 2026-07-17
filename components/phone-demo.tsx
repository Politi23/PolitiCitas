"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { useState } from "react";
import { PERFILES } from "@/lib/site";
import { Ic, type IconName } from "@/components/icons";

const TABS: { id: keyof typeof PERFILES; label: string; icon: IconName }[] = [
  { id: "consultorio", label: "Consultorio", icon: "steth" },
  { id: "barberia", label: "Barbería", icon: "scissors" },
  { id: "spa", label: "Spa", icon: "sparkles" },
];

function Swap({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={text}
          style={{ display: "inline-block" }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function PhoneDemo() {
  const [activo, setActivo] = useState<keyof typeof PERFILES>("consultorio");
  const reduced = useReducedMotion();
  const p = PERFILES[activo];

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), { stiffness: 120, damping: 16 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 120, damping: 16 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType === "touch") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <div className="demo-col">
      <div className="seg" role="group" aria-label="Elige un tipo de negocio para la demostración">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            aria-pressed={activo === t.id}
            onClick={() => setActivo(t.id)}
          >
            {activo === t.id && (
              <motion.span
                className="seg-pill"
                layoutId="seg-pill"
                transition={
                  reduced
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 400, damping: 32 }
                }
              />
            )}
            <Ic name={t.icon} />
            <span className="seg-label">{t.label}</span>
          </button>
        ))}
      </div>

      <div className="phone-float" style={{ perspective: 900 }}>
        <motion.div
          className="phone"
          aria-label="Vista previa de la aplicación"
          onPointerMove={onMove}
          onPointerLeave={onLeave}
          style={reduced ? undefined : { rotateX, rotateY }}
          initial={reduced ? false : { opacity: 0, y: 34, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
        >
          <div className="screen">
            <div className="s-top">
              <Swap className="s-app" text={p.app} />
              <span className="s-ic">
                <Ic name="chart" />
              </span>
            </div>
            <div className="g-card s-hello">
              <div className="cap">
                <Swap text={p.saludo} />
              </div>
              <div className="h1">
                <Swap text={p.nombre} />
              </div>
              <div className="cap">martes, 15 de julio</div>
              <span className="s-bcv">
                <Ic name="trend" /> BCV <b>142,35 Bs</b>
              </span>
            </div>
            <div className="s-stats">
              <div className="g-card s-stat">
                <div className="n">248</div>
                <div className="l">
                  <Swap text={p.personas} />
                </div>
              </div>
              <div className="g-card s-stat">
                <div className="n">6</div>
                <div className="l">Citas hoy</div>
              </div>
            </div>
            <div className="g-card">
              <div className="s-sec">
                Citas de hoy <span>Ver todas →</span>
              </div>
              <div className="s-cita">
                <div className="s-bar" />
                <div>
                  <div className="who">María Fernández</div>
                  <div className="what">
                    <Swap text={p.serv1} />
                  </div>
                </div>
                <div className="hr">9:30 AM</div>
              </div>
              <div className="s-cita">
                <div className="s-bar" />
                <div>
                  <div className="who">Carla Rodríguez</div>
                  <div className="what">
                    <Swap text={p.serv2} />
                  </div>
                </div>
                <div className="hr">11:00 AM</div>
              </div>
            </div>
            <div className="g-card">
              <div className="s-sec">Últimos ingresos</div>
              <div className="s-pay">
                <div>
                  <div className="who">Ana Torres</div>
                  <div className="what">
                    <Swap text={p.serv3} />
                  </div>
                </div>
                <div className="amt">$40.00</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
