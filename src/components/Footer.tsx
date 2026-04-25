import Link from "next/link";
import "@/styles/footer.css";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>

      {/* ── FOOTER 1 — Liens navigation centrés ── */}
      <div className="footer-1">
        <div className="footer-1__inner">
          <Link href="/"         className="footer-1__link">Accueil</Link>
          <Link href="/a-propos" className="footer-1__link">À propos</Link>
          <Link href="/blog"     className="footer-1__link">Blog</Link>
          <Link href="/vlog"     className="footer-1__link">Vlog</Link>
          <Link href="/themes/multipotentialite" className="footer-1__link">Multipotentialité</Link>
          <Link href="/themes/identite"          className="footer-1__link">Identité</Link>
          <Link href="/themes/visibilite"        className="footer-1__link">Visibilité</Link>
          <Link href="/contact"  className="footer-1__link">Contact</Link>
        </div>
      </div>

      {/* ── FOOTER 2 — Logo + coordonnées + légaux ── */}
      <div className="footer-2">
        <div className="footer-2__inner">

          {/* Colonne gauche */}
          <div className="footer-2__brand">
            <div className="footer-2__logo">
              <div className="footer-2__logo-circle">HR</div>
              <span className="footer-2__logo-name">Hanane Risayindi</span>
            </div>
            <address className="footer-2__coords">
              Belgique<br/>
              <span className="footer-2__coords-label">Email : </span>
              <a href="mailto:hello@hananerisayindi.be">hello@hananerisayindi.be</a><br/>
              <span className="footer-2__coords-label">LinkedIn : </span>
              <a href="https://linkedin.com/in/hananeas" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/hananeas
              </a>
            </address>
          </div>

          {/* Colonne droite */}
          <div className="footer-2__legal">
            <p className="footer-2__legal-title">Mentions légales</p>
            <ul className="footer-2__legal-list">
              <li>
                <a href="/docs/mentions-legales.pdf" target="_blank" className="footer-2__legal-link">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/docs/politique-confidentialite.pdf" target="_blank" className="footer-2__legal-link">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/docs/cgv.pdf" target="_blank" className="footer-2__legal-link">
                  Conditions générales de vente
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── FOOTER 3 — Copyright centré ── */}
      <div className="footer-3">
        <div className="footer-3__inner">
          <span className="footer-3__copy">© {year} Hanane Risayindi</span>
          <span className="footer-3__dot" aria-hidden="true" />
          <span className="footer-3__copy">Belgique</span>
          <span className="footer-3__dot" aria-hidden="true" />
          <span className="footer-3__copy">Conçu & développé par</span>
          <a href="https://websait.com" target="_blank" rel="noopener noreferrer" className="footer-3__link">
            Hanane Risayindi · Websait
          </a>
        </div>
      </div>

    </footer>
  );
}