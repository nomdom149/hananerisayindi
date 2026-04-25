import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/mdx";
import "./blog.css";

export const metadata: Metadata = {
  title: "Blog — Multipotentialité, identité et rapport au travail",
  description:
    "Réflexions de Hanane Risayindi sur la multipotentialité, l'identité professionnelle et le rapport au travail. Articles et vidéos pour entrepreneurs multipotentiels, Belgique.",
  openGraph: {
    title: "Blog — Hanane Risayindi",
    description:
      "Réflexions sur la multipotentialité, l'identité et le rapport au travail.",
    url: "https://hananerisayindi.be/blog",
  },
  alternates: {
    canonical: "https://hananerisayindi.be/blog",
  },
};

const CATEGORIES = [
  { slug: "all",              label: "Tout" },
  { slug: "multipotentialite", label: "Multipotentialité" },
  { slug: "identite",          label: "Identité" },
  { slug: "rapport-au-travail",label: "Rapport au travail" },
  { slug: "vulnérabilite",     label: "Vulnérabilité" },
  { slug: "declics",           label: "Déclics" },
];

export default function BlogPage({
  searchParams,
}: {
  searchParams?: { cat?: string };
}) {
  const activecat = searchParams?.cat || "all";
  const allPosts  = getAllPosts();

  const posts =
    activecat === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === activecat);

  return (
    <>
      {/* ── HERO ── */}
      <section className="blog-hero">
        <div className="container">
          <p className="section-eyebrow">Contenus</p>
          <h1 className="blog-hero__title">
            Réflexions sur<br/>
            <em>qui on est dans ce fonctionnement satellitaire.</em>
          </h1>
          <p className="blog-hero__sub">
            Articles et vidéos sur la multipotentialité, l'identité professionnelle
            et le rapport au travail. 
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
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="home-card"
                >
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
