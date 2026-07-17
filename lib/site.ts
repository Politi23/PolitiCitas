export const SITE = {
  nombre: "PolitiWebStudio",
  titulo: "PolitiWebStudio — Sistemas de citas a la medida de tu negocio",
  descripcion:
    "Desarrollo sistemas de gestión de citas, clientes e ingresos para médicos, barberos y negocios de servicios en Venezuela. Dólares y bolívares a tasa BCV, WhatsApp integrado, listo en una semana.",
  url: "https://citas.politiwebstudio.com",
  instagram: "https://www.instagram.com/politiwebstudio/",
  web: "https://politiwebstudio.com",
};

const WA_NUM = "584127782232";

export const waLink = (mensaje: string) =>
  `https://wa.me/${WA_NUM}?text=${encodeURIComponent(mensaje)}`;

export const WA_INFO = waLink(
  "Hola PolitiWeb, quiero información sobre el sistema de citas para mi negocio"
);

export const WA_COTIZAR = waLink(
  "Hola PolitiWeb, quiero una cotización del sistema de citas para mi negocio"
);

export type Perfil = {
  app: string;
  saludo: string;
  nombre: string;
  personas: string;
  serv1: string;
  serv2: string;
  serv3: string;
};

export const PERFILES: Record<string, Perfil> = {
  consultorio: {
    app: "DoctorHub",
    saludo: "Bienvenida",
    nombre: "Dra. Gómez",
    personas: "Pacientes",
    serv1: "Control prenatal",
    serv2: "Ecografía",
    serv3: "Consulta · Zelle",
  },
  barberia: {
    app: "Kings Barber",
    saludo: "Bienvenido",
    nombre: "Luis Mendoza",
    personas: "Clientes",
    serv1: "Corte + barba",
    serv2: "Cerquillo y cejas",
    serv3: "Corte clásico · Pago Móvil",
  },
  spa: {
    app: "Bella Spa",
    saludo: "Bienvenida",
    nombre: "Karla Núñez",
    personas: "Clientas",
    serv1: "Manicure semipermanente",
    serv2: "Limpieza facial",
    serv3: "Pedicure spa · Efectivo",
  },
};
