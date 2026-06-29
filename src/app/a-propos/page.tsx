import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./a-propos.css";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Consultante en communication stratégique, fondatrice de Websait, psychologue et femme MultiPote ®. L'histoire d'une femme qui a appris que ne pas rentrer dans la case était sa force.",
};

export default function AProposPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="ap-hero" aria-labelledby="ap-titre">
        <div className="ap-hero__inner">

          <div className="ap-hero__text">
            <p className="ap-eyebrow">À propos</p>
            <h1 className="ap-h1" id="ap-titre">
              Je ne rentrais<br />
              dans <em>aucune case.</em>
            </h1>
            <blockquote className="ap-hero__quote">
              Pendant des années, j&apos;ai cru que c&apos;était un défaut.<br />
              C&apos;est devenu ma façon de travailler.
            </blockquote>
            <div className="ap-hero__stats">
              <div className="ap-hero__stat">
                <span className="ap-stat-num">Top 20</span>
                <span className="ap-stat-label">Marketing &amp; Sales Belgique</span>
              </div>
              <div className="ap-hero__stat">
                <span className="ap-stat-num">Top 10</span>
                <span className="ap-stat-label">LinkedIn Growth Belgique</span>
              </div>
              <div className="ap-hero__stat">
                <span className="ap-stat-num">+20 ans</span>
                <span className="ap-stat-label">d&apos;expertise en communication</span>
              </div>
            </div>
          </div>

          <div className="ap-hero__portrait">
            <Image
              src="/images/hanane-risayindi-portrait.jpeg"
              alt="Hanane Risayindi, consultante en communication stratégique et fondatrice de Websait, assise dans un fauteuil doré"
              fill
              priority
              sizes="(max-width: 768px) 0px, 480px"
              style={{ objectFit: "cover", objectPosition: "center 10%" }}
            />
            <div className="ap-hero__portrait-fade" aria-hidden="true" />
          </div>

        </div>
      </section>

      {/* ── SECTION 1 — Le décalage ── */}
      <section className="ap-section ap-section--cream" aria-labelledby="s1">
        <div className="ap-section__inner">
          <p className="ap-eyebrow">Le point de départ</p>
          <h2 className="ap-h2" id="s1">
            Celle qui regardait le monde<br />
            <em>à travers une autre fenêtre.</em>
          </h2>
          <div className="ap-body">
            <p>Pendant une grande partie de ma jeunesse, j&apos;étais introvertie, effacée, extrêmement timide.</p>
            <p>J&apos;avais des amis. Mais je ne me sentais pas vraiment connectée à eux. J&apos;avais l&apos;impression de regarder le monde à travers une fenêtre différente.</p>
            <p>Celle qu&apos;on oublie dans les groupes. Celle qui parle peu. Celle qui observe beaucoup.</p>
          </div>
          <blockquote className="ap-pull-quote">
            Pourtant, j&apos;étais aussi celle qui écoutait vraiment. Qui trouvait les mots pour désamorcer ce que les autres n&apos;arrivaient pas à nommer.
          </blockquote>
          <div className="ap-body">
            <p>Je comprenais ce qui se jouait derrière les silences. Je savais aider les autres à trouver leur place.</p>
            <p>La mienne restait plus difficile à trouver.</p>
            <p>J&apos;avais trop d&apos;intérêts. Trop d&apos;idées. Trop de passions. Trop de questions. Je ne rentrais dans aucune case.</p>
            <p>Et comme beaucoup de femmes MultiPote ®, j&apos;ai parfois essayé de me réduire pour être plus facile à comprendre.</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — L'écriture ── */}
      <section className="ap-section ap-section--dark" aria-labelledby="s2">
        <div className="ap-section__inner ap-section__inner--split">

          <div className="ap-section__text">
            <p className="ap-eyebrow ap-eyebrow--light">2003 — le premier territoire</p>
            <h2 className="ap-h2 ap-h2--light" id="s2">
              L&apos;écriture m&apos;a offert<br />
              <em>un espace pour exister.</em>
            </h2>
            <div className="ap-body ap-body--light">
              <p>Tout a changé sur une plateforme naissante : Facebook.</p>
              <p>Pour la première fois, l&apos;écriture m&apos;a offert un espace où je pouvais exister sans être interrompue par ma timidité. Je pouvais prendre le temps de formuler ma pensée. Partager mes réflexions. Exprimer ce que j&apos;avais toujours gardé à l&apos;intérieur.</p>
              <p>Mon journal intime devenait un carnet d&apos;échange public.</p>
              <p>Mes amis d&apos;école découvraient une facette de moi qu&apos;ils n&apos;avaient jamais vue. Une Hanane qui réfléchissait. Qui ressentait profondément. Qui osait prendre sa place.</p>
            </div>
            <div className="ap-highlight">
              <p>L&apos;écriture ne sert pas uniquement à raconter. <strong>Elle sert à se rencontrer.</strong></p>
            </div>
          </div>

          <div className="ap-section__aside">
            <div className="ap-carnet-wrap">
              <Image
                src="/images/heure-juste-carnet-portrait.jpeg"
                alt="L'Heure Juste — carnet Still Room ouvert sur la première semaine"
                width={600}
                height={800}
                className="ap-carnet-img"
              />
              <p className="ap-carnet-caption">L'Heure Juste · Still Room</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 3 — La perte ── */}
      <section className="ap-section ap-section--cream" aria-labelledby="s3">
        <div className="ap-section__inner">
          <p className="ap-eyebrow">Ce que la perte m&apos;a appris</p>
          <h2 className="ap-h2" id="s3">
            À l&apos;aube de mes 40 ans,<br />
            <em>je reprends mon clavier.</em>
          </h2>
          <div className="ap-body">
            <p>Je me retrouve veuve.</p>
            <p>Je perds mon repère le plus précieux. Celui avec qui je construisais ma vie.</p>
            <p>Après des mois isolée du monde, je crée une page. J&apos;y partage mes pensées les plus profondes.</p>
            <p>Je n&apos;écris pas pour créer un produit. J&apos;écris pour survivre. Pour comprendre ce que je traverse. Pour remettre un peu d&apos;ordre dans le chaos.</p>
          </div>
          <blockquote className="ap-pull-quote">
            Des centaines. Puis des milliers de personnes me lisent. Elles se reconnaissent dans mes mots. Et sans le savoir, elles m&apos;aident à revenir dans le monde des vivants.
          </blockquote>
          <div className="ap-highlight ap-highlight--dark-vine">
            <p>L&apos;écriture sert à mettre de la lumière sur ce qui est encore flou. <strong>Elle fait émerger notre identité quand nous avons perdu le contact avec elle.</strong></p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — Parcours ── */}
      <section className="ap-section ap-section--cream-light" aria-labelledby="s4">
        <div className="ap-section__inner">
          <p className="ap-eyebrow">Le parcours</p>
          <h2 className="ap-h2" id="s4">
            La psychologie. Le digital.<br />
            <em>L&apos;alchimie entre les deux.</em>
          </h2>
          <div className="ap-body">
            <p>Diplômée en psychologie, j&apos;entre dans le digital par la création de sites web. Je fonde Websait, et me spécialise progressivement en communication stratégique et positionnement LinkedIn.</p>
            <p>J&apos;ai accompagné plus de 150 entrepreneurs et dirigeants en Belgique — à Bruxelles, Namur, et au-delà.</p>
          </div>

          <div className="ap-parcours-grid">
            <div className="ap-parcours-cell">
              <span className="ap-parcours-cell__label">Héritage</span>
              <p>Père égyptien musulman, mère chrétienne. Depuis l&apos;enfance, j&apos;ai appris à concilier des mondes qui semblent s&apos;opposer.</p>
            </div>
            <div className="ap-parcours-cell">
              <span className="ap-parcours-cell__label">Formation</span>
              <p>Psychologie clinique. Le comportement humain, l&apos;empathie, la connexion — au cœur de tout ce que je construis.</p>
            </div>
            <div className="ap-parcours-cell">
              <span className="ap-parcours-cell__label">Création</span>
              <p>Peinture, bijoux, écriture. L&apos;esthétique n&apos;est pas un accessoire dans mon travail. C&apos;est une manière de penser.</p>
            </div>
            <div className="ap-parcours-cell">
              <span className="ap-parcours-cell__label">Business</span>
              <p>Fondatrice de Websait. Communication stratégique, positionnement LinkedIn, accompagnement des multipotentiels.</p>
            </div>
          </div>

          <div className="ap-highlight ap-highlight--orange-left" style={{ marginTop: "3rem" }}>
            <p>Psychologie et technique. Art et digital. Intuition et stratégie. <strong>Cette capacité d&apos;alchimie définit ma façon de travailler bien plus que n&apos;importe quel titre.</strong></p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — Pourquoi ce site ── */}
      <section className="ap-section ap-section--dark" aria-labelledby="s5">
        <div className="ap-section__inner">
          <p className="ap-eyebrow ap-eyebrow--light">Pourquoi ce site existe</p>
          <h2 className="ap-h2 ap-h2--light" id="s5">
            Quand une femme MultiPote ® prend conscience de son unicité,<br />
            <em>quelque chose change profondément.</em>
          </h2>
          <div className="ap-body ap-body--light">
            <p>Je crois que l&apos;identité est le socle de tout.</p>
            <p>Elle cesse de chercher sa place. Elle commence à l&apos;occuper.</p>
            <p>Ce site est l&apos;endroit où j&apos;explore cela à voix haute. Les mécanismes. Les contradictions. Les déclics. Les coulisses.</p>
            <p>Tout ce qui ne rentre pas dans une case — et qui, pourtant, fait sens.</p>
          </div>
          <blockquote className="ap-pull-quote ap-pull-quote--light">
            Ce qui vous semblait être trop est précisément ce qui fait votre force.
          </blockquote>
        </div>
      </section>

      {/* ── CTA WEBSAIT — identique à home ── */}
      <section className="home-cta-websait" aria-label="Lien vers Websait">
        <div className="container">
          <div className="home-cta-websait__inner">
            <div>
              <p className="section-eyebrow">Pour aller plus loin</p>
              <h2 className="section-h2" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
                Prêt à structurer<br /><em>votre positionnement ?</em>
              </h2>
              <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: "480px" }}>
                Les réflexions de ce site trouvent leur prolongement concret sur Websait — audit, formation LinkedIn, architecture digitale pour multipotentiels.
              </p>
            </div>
            <a
              href="https://websait.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Découvrir Websait →
            </a>
          </div>
        </div>
      </section>

      {/* ── BLOG CTA ── */}
      <section className="ap-blog-cta" aria-label="Vers le blog">
        <div className="container">
          <p className="ap-eyebrow ap-eyebrow--center">Continuer la lecture</p>
          <h2 className="section-h2" style={{ textAlign: "center", marginBottom: "2rem" }}>
            Explorer les contenus
          </h2>
          <div className="ap-blog-cta__links">
            <Link href="/blog" className="btn-primary">Lire le blog</Link>
            <Link href="/vlog" className="btn-ghost">Voir le vlog</Link>
          </div>
        </div>
      </section>
    </>
  );
}
