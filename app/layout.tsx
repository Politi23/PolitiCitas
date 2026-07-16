import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.titulo,
  description: SITE.descripcion,
  openGraph: {
    title: SITE.titulo,
    description: SITE.descripcion,
    url: SITE.url,
    siteName: SITE.nombre,
    locale: "es_VE",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0d0719",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={bricolage.variable}>
      <body>
        <div className="mesh" aria-hidden="true" />
        <div className="orb orb-1" aria-hidden="true" />
        <div className="orb orb-2" aria-hidden="true" />
        <div className="orb orb-3" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
