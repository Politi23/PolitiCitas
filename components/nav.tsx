import { WA_INFO } from "@/lib/site";
import { WaIc } from "@/components/icons";

export function Nav() {
  return (
    <nav className="topnav">
      <div className="wrap nav-in">
        <a className="logo" href="#">
          <span className="logo-mark">P</span>PolitiWeb Studio
        </a>
        <a className="btn btn-wa btn-sm" href={WA_INFO} target="_blank" rel="noopener">
          <WaIc />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
