import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog — Multipotentialité, identité et rapport au travail",
  description:
    "Réflexions de Hanane Risayindi sur la multipotentialité, l'identité professionnelle et le rapport au travail. Articles pour entrepreneurs multipotentiels, Belgique.",
  alternates: { canonical: "https://hananerisayindi.be/blog" },
  openGraph: {
    title: "Blog — Hanane Risayindi",
    description: "Réflexions sur la multipotentialité, l'identité et le rapport au travail.",
    url: "https://hananerisayindi.be/blog",
  },
};

const CATEGORIES = [
  { slug: "all",               label: "Tout" },
  { slug: "multipotentialite", label: "Multipotentialité" },
  { slug: "identite",          label: "Identité" },
  { slug: "rapport-au-travail",label: "Rapport au travail" },
  { slug: "vulnerabilite",     label: "Vulnérabilité" },
  { slug: "declics",           label: "Déclics" },
];

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { cat?: string };
}) {
  const activecat = searchParams?.cat || "all";
  const allPosts  = getAllPosts();
  const posts     = activecat === "all"
    ? allPosts
    : allPosts.filter((p) => p.category === activecat);

  return (
    <>
      {/* ── HERO avec animation géométries sacrées ── */}
      <section className="blog-hero" style={{ position: "relative", overflow: "hidden" }}>

        {/* SVG animation — géométries sacrées fond crème */}
        <div className="blog-hero-geometry" aria-hidden="true">
          <svg
            viewBox="0 0 680 520"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <style>{`
                @keyframes rCW   {from{transform-origin:340px 260px;transform:rotate(0deg)}to{transform-origin:340px 260px;transform:rotate(360deg)}}
                @keyframes rCCW  {from{transform-origin:340px 260px;transform:rotate(0deg)}to{transform-origin:340px 260px;transform:rotate(-360deg)}}
                @keyframes rSlow {from{transform-origin:340px 260px;transform:rotate(0deg)}to{transform-origin:340px 260px;transform:rotate(360deg)}}
                @keyframes bPulse{0%,100%{opacity:.35}50%{opacity:.75}}
                @keyframes bGlow {0%,100%{opacity:.2;r:18}50%{opacity:.55;r:25}}
                @keyframes bDot  {0%,100%{opacity:.65;r:4.5}50%{opacity:1;r:6}}
                @keyframes bRing {0%,100%{opacity:.07}50%{opacity:.16}}
                @keyframes bFloat{0%,100%{opacity:.2}50%{opacity:.5}}
                @keyframes bMeta {from{transform-origin:340px 260px;transform:rotate(0deg)}to{transform-origin:340px 260px;transform:rotate(360deg)}}
                .bo1{animation:rCW   30s linear infinite}
                .bo2{animation:rCCW  46s linear infinite}
                .bo3{animation:rSlow 65s linear infinite}
                .bo4{animation:rCCW  88s linear infinite}
                .bo5{animation:rCW  115s linear infinite}
                .bom{animation:bMeta 200s linear infinite}
                .bri{animation:bRing  5s ease-in-out infinite}
                .br2{animation:bRing  7s ease-in-out infinite;animation-delay:1.8s}
                .br3{animation:bRing  9s ease-in-out infinite;animation-delay:3.5s}
                .bpu{animation:bPulse 4s ease-in-out infinite}
                .bp2{animation:bPulse 5s ease-in-out infinite;animation-delay:.9s}
                .bp3{animation:bPulse 3.5s ease-in-out infinite;animation-delay:1.7s}
                .bgc{animation:bGlow  4.5s ease-in-out infinite}
                .bdc{animation:bDot   4s ease-in-out infinite}
                .bfl{animation:bFloat 6s ease-in-out infinite}
              `}</style>
            </defs>

            {/* Fleur de Vie */}
            <g opacity="0.08" stroke="#C8581A" strokeWidth="0.45" fill="none">
              <circle cx="340" cy="260" r="56"/>
              <circle cx="396" cy="260" r="56"/>
              <circle cx="368" cy="211" r="56"/>
              <circle cx="312" cy="211" r="56"/>
              <circle cx="284" cy="260" r="56"/>
              <circle cx="312" cy="309" r="56"/>
              <circle cx="368" cy="309" r="56"/>
              <circle cx="340" cy="260" r="112"/>
            </g>

            {/* Métatron lignes */}
            <g opacity="0.055" stroke="#B56A3A" strokeWidth="0.4" fill="none">
              <line x1="340" y1="148" x2="340" y2="372"/>
              <line x1="245" y1="204" x2="435" y2="316"/>
              <line x1="245" y1="316" x2="435" y2="204"/>
              <line x1="228" y1="260" x2="452" y2="260"/>
              <line x1="340" y1="148" x2="435" y2="316"/>
              <line x1="340" y1="148" x2="245" y2="316"/>
              <line x1="340" y1="372" x2="435" y2="204"/>
              <line x1="340" y1="372" x2="245" y2="204"/>
              <line x1="245" y1="204" x2="245" y2="316"/>
              <line x1="435" y1="204" x2="435" y2="316"/>
              <line x1="245" y1="204" x2="435" y2="204"/>
              <line x1="245" y1="316" x2="435" y2="316"/>
            </g>

            {/* Sri Yantra — triangles imbriqués */}
            <g opacity="0.06" stroke="#C8581A" strokeWidth="0.5" fill="none">
              <polygon points="340,175 430,315 250,315"/>
              <polygon points="340,345 250,205 430,205"/>
              <polygon points="340,195 415,310 265,310"/>
              <polygon points="340,325 265,210 415,210"/>
            </g>

            {/* Losanges rotatifs */}
            <g className="bom">
              <polygon points="340,145 480,260 340,375 200,260" fill="none" stroke="#C8581A" strokeWidth="0.35" opacity="0.07"/>
              <polygon points="340,168 462,260 340,352 218,260" fill="none" stroke="#B56A3A" strokeWidth="0.3" opacity="0.06"/>
            </g>

            {/* Orbites */}
            <circle cx="340" cy="260" r="70"  fill="none" stroke="#C8581A" strokeWidth="0.45" opacity="0.13" className="bri"/>
            <circle cx="340" cy="260" r="105" fill="none" stroke="#B56A3A" strokeWidth="0.35" opacity="0.1"  strokeDasharray="3 7"/>
            <circle cx="340" cy="260" r="140" fill="none" stroke="#C8581A" strokeWidth="0.3"  opacity="0.09" className="br2"/>
            <circle cx="340" cy="260" r="178" fill="none" stroke="#8B7D74" strokeWidth="0.28" opacity="0.07" strokeDasharray="2 9"/>
            <circle cx="340" cy="260" r="215" fill="none" stroke="#B56A3A" strokeWidth="0.25" opacity="0.06" className="br3"/>
            <circle cx="340" cy="260" r="248" fill="none" stroke="#8B7D74" strokeWidth="0.2"  opacity="0.05"/>

            {/* Satellite orbite 1 */}
            <g className="bo1">
              <circle cx="410" cy="260" r="5" fill="#C8581A" opacity="0.55" className="bpu"/>
              <circle cx="410" cy="260" r="10" fill="#C8581A" opacity="0.07"/>
            </g>

            {/* Satellite orbite 2 */}
            <g className="bo2">
              <rect x="438" y="253" width="14" height="14" transform="rotate(45 445 260)" fill="none" stroke="#B56A3A" strokeWidth="0.9" opacity="0.6" className="bp2"/>
              <circle cx="235" cy="260" r="3" fill="#E8A070" opacity="0.45" className="bfl"/>
            </g>

            {/* Satellite orbite 3 */}
            <g className="bo3">
              <circle cx="480" cy="260" r="4" fill="#B56A3A" opacity="0.45" className="bpu"/>
              <rect x="196" y="254" width="12" height="12" transform="rotate(45 202 260)" fill="none" stroke="#C8581A" strokeWidth="0.8" opacity="0.45" className="bp3"/>
              <circle cx="438" cy="381" r="3" fill="#B56A3A" opacity="0.35" className="bfl"/>
            </g>

            {/* Satellite orbite 4 */}
            <g className="bo4">
              <rect x="511" y="253" width="14" height="14" transform="rotate(45 518 260)" fill="none" stroke="#8B7D74" strokeWidth="0.7" opacity="0.4" className="bp2"/>
              <circle cx="162" cy="260" r="2.5" fill="#C8581A" opacity="0.3" className="bfl"/>
              <circle cx="452" cy="414" r="3" fill="#B56A3A" opacity="0.28" className="bpu"/>
            </g>

            {/* Satellite orbite 5 */}
            <g className="bo5">
              <circle cx="555" cy="260" r="3" fill="#8B7D74" opacity="0.28" className="bfl"/>
              <rect x="122" y="254" width="12" height="12" transform="rotate(45 128 260)" fill="none" stroke="#8B7D74" strokeWidth="0.6" opacity="0.24" className="bp3"/>
            </g>

            {/* Point focal */}
            <circle cx="340" cy="260" r="24" fill="#C8581A" opacity="0.07" className="bgc"/>
            <circle cx="340" cy="260" r="6"  fill="#C8581A" opacity="0.65" className="bdc"/>
            <circle cx="340" cy="260" r="2.5" fill="#211214" opacity="0.7"/>
            <g opacity="0.2" stroke="#C8581A" strokeWidth="0.7">
              <line x1="340" y1="238" x2="340" y2="252"/>
              <line x1="340" y1="268" x2="340" y2="282"/>
              <line x1="320" y1="260" x2="333" y2="260"/>
              <line x1="347" y1="260" x2="360" y2="260"/>
            </g>

            {/* Points décoratifs */}
            <circle cx="135" cy="88"  r="2"   fill="#C8581A" opacity="0.15"/>
            <circle cx="565" cy="75"  r="1.5" fill="#B56A3A" opacity="0.13"/>
            <circle cx="600" cy="415" r="2"   fill="#E8A070" opacity="0.13"/>
            <circle cx="82"  cy="445" r="1.5" fill="#8B7D74" opacity="0.12"/>
            <circle cx="585" cy="165" r="1.5" fill="#C8581A" opacity="0.14"/>
            <circle cx="102" cy="165" r="1.2" fill="#B56A3A" opacity="0.11"/>
          </svg>
        </div>

        {/* Contenu hero */}
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <p className="section-eyebrow">Contenus</p>
          <h1 className="blog-hero__title">
            Réflexions sur<br/>
            <em>qui on est</em>
            dans ce fonctionnement satellitaire
          </h1>
          <p className="blog-hero__sub">
            Articles sur la multipotentialité, l&apos;identité professionnelle
            et le rapport au travail. Sans conseils génériques.
          </p>
        </div>
      </section>

      {/* ── FILTRES ── */}
      <div className="blog-filters">
        <div className="container">
          <div className="blog-filters__inner">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.slug === "all" ? "/blog" : `/blog?cat=${cat.slug}`}
                className={`blog-filter-btn${activecat === cat.slug ? " blog-filter-btn--active" : ""}`}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRILLE ── */}
      <section className="blog-grid-section">
        <div className="container">
          {posts.length === 0 ? (
            <p className="blog-empty">Aucun contenu dans cette catégorie pour l&apos;instant.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="home-card">
                  <div className="home-card__body">
                    <div className="home-card__meta">
                      <span className={`home-card__type home-card__type--${post.type}`}>
                        {post.type === "video" ? "▶ Vidéo" : "✦ Article"}
                      </span>
                      <span>{post.category.replace(/-/g, " ")}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="home-card__title">{post.title}</h2>
                    <p className="home-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__footer">
                      <span className="blog-card__date">{post.date}</span>
                      <span className="home-card__link">Lire →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}