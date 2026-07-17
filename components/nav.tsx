import Image from "next/image";
import { WA_INFO } from "@/lib/site";
import { WaIc } from "@/components/icons";

export function Nav() {
  return (
    <nav className="topnav">
      <div className="wrap nav-in">
        <a className="logo" href="#">
          <Image src="/logo.png" alt="" width={34} height={34} className="logo-img" priority />
          PolitiWebStudio
        </a>
        <div className="nav-links">
          <a href="#funciones">Funciones</a>
          <a href="#proceso">Cómo trabajo</a>
          <a href="#cotizacion">Cotización</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="btn btn-wa btn-sm" href={WA_INFO} target="_blank" rel="noopener">
          <WaIc />
          Cotizar
        </a>
      </div>
    </nav>
  );
}
