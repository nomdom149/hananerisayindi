import Link from "next/link";
import type { Metadata } from "next";
import { getRecentPosts } from "@/lib/mdx";
import "./home.css";

export const metadata: Metadata = {
  title: "Hanane Risayindi — Pensée · Identité · Visibilité",
  description: "Hub éditorial de Hanane Risayindi. Multipotentialité, identité, stratégie de visibilité. Belgique.",
};

const THEMES = [
  { slug: "multipotentialite", label: "Multipotentialité", num: "01" },
  { slug: "identite",          label: "Identité",          num: "02" },
  { slug: "rapport-au-travail",label: "Rapport au travail",num: "03" },
  { slug: "vulnerabilite",     label: "Vulnérabilité",     num: "04" },
  { slug: "declics",           label: "Déclics",           num: "05" },
];

export default function HomePage() {
  const recentPosts = getRecentPosts(3);

  return (
    <>
      {/* HERO */}
      <section className="home-hero" aria-label="Hanane Risayindi">
        <div className="hero-geometry" aria-hidden="true">
          <svg viewBox="0 0 700 600" xmlns="http://www.w3.org/2000/svg" className="hero-geometry__svg">
            <defs>
              <radialGradient id="coreDot" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C8581A" stopOpacity="0.9"/>
                <stop offset="45%" stopColor="#E8A070" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="glowMid" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#C8581A" stopOpacity="0.1"/>
                <stop offset="100%" stopColor="#FAF8F3" stopOpacity="0"/>
              </radialGradient>
            </defs>
            <ellipse cx="350" cy="300" rx="240" ry="200" fill="url(#glowMid)"/>
            <g opacity="0.12" stroke="#C8581A" strokeWidth="0.8" fill="none">
              <circle cx="350" cy="300" r="58"/>
              <circle cx="408" cy="300" r="58"/>
              <circle cx="379" cy="250" r="58"/>
              <circle cx="321" cy="250" r="58"/>
              <circle cx="292" cy="300" r="58"/>
              <circle cx="321" cy="350" r="58"/>
              <circle cx="379" cy="350" r="58"/>
              <circle cx="350" cy="300" r="116"/>
            </g>
            <g opacity="0.07" stroke="#B56A3A" strokeWidth="0.6" fill="none">
              <line x1="350" y1="184" x2="350" y2="416"/>
              <line x1="249" y1="242" x2="451" y2="358"/>
              <line x1="249" y1="358" x2="451" y2="242"/>
              <line x1="234" y1="300" x2="466" y2="300"/>
              <line x1="350" y1="184" x2="451" y2="358"/>
              <line x1="350" y1="184" x2="249" y2="358"/>
              <line x1="350" y1="416" x2="451" y2="242"/>
              <line x1="350" y1="416" x2="249" y2="242"/>
            </g>
            <circle cx="350" cy="300" r="90"  fill="none" stroke="#C8581A" strokeWidth="0.6" opacity="0.18" className="ring-pulse"/>
            <circle cx="350" cy="300" r="135" fill="none" stroke="#B56A3A" strokeWidth="0.4" opacity="0.13" strokeDasharray="4 7"/>
            <circle cx="350" cy="300" r="178" fill="none" stroke="#C8581A" strokeWidth="0.35" opacity="0.11" className="ring-pulse-2"/>
            <circle cx="350" cy="300" r="220" fill="none" stroke="#8B7D74" strokeWidth="0.3" opacity="0.09" strokeDasharray="2 9"/>
            <g className="orb-1">
              <circle cx="440" cy="300" r="5.5" fill="#C8581A" opacity="0.7" className="sat-pulse"/>
              <circle cx="440" cy="300" r="11" fill="#C8581A" opacity="0.08"/>
            </g>
            <g className="orb-2">
              <circle cx="485" cy="300" r="4.5" fill="#B56A3A" opacity="0.6" className="sat-pulse-2"/>
              <circle cx="215" cy="300" r="3" fill="#E8A070" opacity="0.45"/>
            </g>
            <g className="orb-3">
              <circle cx="528" cy="300" r="4" fill="#E8A070" opacity="0.5" className="sat-pulse"/>
              <circle cx="172" cy="300" r="3" fill="#C8581A" opacity="0.35"/>
              <circle cx="465" cy="455" r="3.5" fill="#B56A3A" opacity="0.4"/>
            </g>
            <ellipse cx="350" cy="300" rx="32" ry="32" fill="url(#coreDot)" opacity="0.5" className="core-pulse"/>
            <circle cx="350" cy="300" r="8" fill="#C8581A" opacity="0.8" className="core-dot"/>
            <circle cx="350" cy="300" r="3" fill="#211214" opacity="0.9"/>
            <g opacity="0.25" stroke="#C8581A" strokeWidth="0.8">
              <line x1="350" y1="274" x2="350" y2="291"/>
              <line x1="350" y1="309" x2="350" y2="326"/>
              <line x1="324" y1="300" x2="341" y2="300"/>
              <line x1="359" y1="300" x2="376" y2="300"/>
            </g>
          </svg>
        </div>
        <div className="hero-inner">
          <div className="hero-left">
            <p className="hero-eyebrow">Identité · Multipotentialité · Stratégie</p>
            <h1 className="hero-h1">
              Penser clairement<br/>
              ce qu&apos;on <em>est.</em>
            </h1>
            <div className="hero-divider"/>
            <p className="hero-sub">
              Un espace pour les entrepreneurs multipotentiels qui refusent de se réduire à une seule case — et qui veulent bâtir une présence à leur mesure.
            </p>
            <div className="hero-actions">
              <Link href="/blog" className="btn-primary">Lire les contenus</Link>
              <Link href="/a-propos" className="btn-ghost">Qui est Hanane ?</Link>
            </div>
          </div>
          <div className="hero-right"/>
        </div>
      </section>

      {/* MANIFESTE — dark-vine-2 */}
      <section className="home-manifeste" aria-label="Manifeste">
        <div className="container">
          <div className="home-manifeste__inner">
            <p className="section-eyebrow section-eyebrow--light section-eyebrow--center">Le terrain</p>
            <h2 className="section-h2 section-h2--light" style={{textAlign:"center", marginBottom:"2.5rem"}}>
              Tu as tout pour être visible.<br/><em>Et pourtant.</em>
            </h2>
            <div className="home-manifeste__body">
              <p>Les profils multipotentiels accumulent les compétences, les expériences, les angles d&apos;attaque. Ils ont souvent plus de profondeur que la moyenne. Et ils restent flous aux yeux des autres — parfois même aux leurs.</p>
              <p>Un message diffus. Une posture qui ne s&apos;est jamais vraiment solidifiée, parce que choisir une case semblait trahir tout le reste. Ce site explore ces mécanismes — sans conseils génériques, avec de la profondeur et du recul.</p>
            </div>
            <p className="home-manifeste__signature">— Hanane Risayindi</p>
          </div>
        </div>
      </section>

      {/* DERNIERS CONTENUS — vrais articles MDX */}
      <section className="home-contenus" aria-label="Derniers contenus">
        <div className="container">
          <div className="home-section-header">
            <div>
              <p className="section-eyebrow">Contenus récents</p>
              <h2 className="section-h2">Dernières réflexions</h2>
            </div>
            <Link href="/blog" className="btn-ghost">Tout voir →</Link>
          </div>
          {recentPosts.length === 0 ? (
            <p style={{color:"var(--muted)", fontStyle:"italic"}}>Les premiers articles arrivent bientôt.</p>
          ) : (
            <div className="home-contenus__grid">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="home-card">
                  <div className="home-card__body">
                    <div className="home-card__meta">
                      <span className={`home-card__type home-card__type--${post.type}`}>
                        {post.type === "video" ? "▶ Vidéo" : "✦ Article"}
                      </span>
                      <span>{post.category.replace(/-/g," ")}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="home-card__title">{post.title}</h3>
                    <p className="home-card__excerpt">{post.excerpt}</p>
                    <span className="home-card__link">Lire →</span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* THÈMES */}
      <section className="home-themes" aria-label="Thèmes éditoriaux">
        <div className="container">
          <div style={{textAlign:"center", marginBottom:"3rem"}}>
            <p className="section-eyebrow section-eyebrow--center">Territoires</p>
            <h2 className="section-h2">Explorer par thème</h2>
          </div>
          <div className="home-themes__grid">
            {THEMES.map((theme) => (
              <Link key={theme.slug} href={`/themes/${theme.slug}`} className="home-theme-card">
                <span className="home-theme-card__count">{theme.num}</span>
                <span className="home-theme-card__label">{theme.label}</span>
                <span className="home-theme-card__arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WEBSAIT */}
      <section className="home-cta-websait" aria-label="Lien vers Websait">
        <div className="container">
          <div className="home-cta-websait__inner">
            <div>
              <p className="section-eyebrow">Pour aller plus loin</p>
              <h2 className="section-h2" style={{fontSize:"clamp(1.8rem,3vw,2.5rem)"}}>
                Prêt à structurer<br/><em>votre positionnement ?</em>
              </h2>
              <p style={{color:"var(--muted)", marginTop:"1rem", maxWidth:"480px"}}>
                Les réflexions de ce site trouvent leur prolongement concret sur Websait — audit, formation LinkedIn, architecture digitale pour multipotentiels.
              </p>
            </div>
            <a href="https://websait.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Découvrir Websait →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}