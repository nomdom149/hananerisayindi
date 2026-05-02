import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, getRecentPosts } from "@/lib/mdx";
import "@/app/blog/blog.css";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const ogUrl = `https://hananerisayindi.be/api/og?title=${encodeURIComponent(post.seoTitle)}&excerpt=${encodeURIComponent(post.excerpt)}&date=${encodeURIComponent(post.date)}&rt=${encodeURIComponent(post.readTime)}`;

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://hananerisayindi.be/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.metaDescription,
      url: `https://hananerisayindi.be/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: ["Hanane Risayindi"],
      locale: "fr_BE",
      images: [{ url: ogUrl, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.metaDescription,
      images: [ogUrl],
    },
  };
}

function ArticleJsonLd({ post }: { post: NonNullable<ReturnType<typeof getPostBySlug>> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": post.type === "video" ? "VideoObject" : "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Hanane Risayindi",
      url: "https://hananerisayindi.be/a-propos",
      jobTitle: "Consultante en communication, Top 10 LinkedIn Growth BE",
      sameAs: [
        "https://www.linkedin.com/in/hananeas/",
        "https://websait.com/hanane-risayindi",
      ],
    },
    inLanguage: "fr-BE",
    keywords: post.tags.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://hananerisayindi.be/blog/${post.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Composants MDX custom — mappent les classes Websait
const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="article-h2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="article-h3" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLElement>) => (
    <blockquote {...props} />
  ),
  hr: () => <div className="art-divider" />,
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRecentPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3);

  const categoryLabel = post.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <>
      <ArticleJsonLd post={post} />

      {/* ── BREADCRUMB ── */}
      <div className="breadcrumb">
        <a href="/">Accueil</a>
        <span>›</span>
        <a href="/blog">Blog</a>
        <span>›</span>
        <a href={`/themes/${post.category}`}>{categoryLabel}</a>
        <span>›</span>
        <span style={{ color: "var(--dark-vine)" }}>{post.title}</span>
      </div>

      {/* ── HERO dark-vine ── */}
      <section className="article-hero">
        <span className="article-pillar">
          {post.type === "video" ? "▶ Vidéo" : "✦ Article"} · {categoryLabel}
        </span>
        <h1>{post.title}</h1>
        <div className="article-meta">
          <span>{post.date}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>{post.readTime}</span>
          <span className="meta-dot" aria-hidden="true" />
          <span>Hanane Risayindi</span>
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} style={{ opacity: 0.4 }}>· {tag}</span>
          ))}
        </div>
      </section>

      {/* ── CORPS ── */}
      <main className="article-body">

        {/* Intro encadrée */}
<p className="intro-seo">{post.excerpt}</p>

{/* Image article verticale — si coverImage définie */}
{post.coverImage && (
  <div className="img-seo-wrap">
    <div className="img-seo-photo">
      <img
        src={post.coverImage}
        alt={`${post.title} — Hanane Risayindi`}
        title={post.seoTitle}
        loading="lazy"
        width={338}
        height={600}
      />
    </div>
    <figcaption className="img-seo-caption">
      {post.excerpt}<br />
      <span>© Hanane Risayindi</span>
    </figcaption>
  </div>
)}

{/* Lien vidéo si applicable */}
{post.type === "video" && post.videoUrl && (
          <div className="insight">
            <a href={post.videoUrl} target="_blank" rel="noopener noreferrer">
              ▶ Voir la vidéo sur Instagram →
            </a>
          </div>
        )}

        {/* Contenu MDX */}
        <div>
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>

        <div className="art-divider" />

       

        {/* ── CTA dark-vine ── */}
        {post.relatedServices && post.relatedServices.length > 0 && (
          <section className="cta-wrap" aria-labelledby="cta-heading">
            <p className="cta-eyebrow">Pour aller plus loin</p>
            <h2 className="cta-h2" id="cta-heading">
              Ce contenu vous a parlé ?<br />
              <em>Passons à l&apos;étape suivante.</em>
            </h2>
            <p className="cta-sub">
              Les réflexions de ce site trouvent leur prolongement concret sur Websait
              — positionnement, LinkedIn, architecture digitale.
            </p>
            <div className="cta-buttons">
              {post.relatedServices.map((service) => (
                <a
                  key={service.url}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-main"
                >
                  {service.label} →
                </a>
              ))}
            </div>
          </section>
        )}

        {/* ── MAILLAGE ── */}
        {related.length > 0 && (
          <nav className="maillage-wrap" aria-label="Articles connexes">
            <p className="maillage-eyebrow">À lire aussi</p>
            <div className="maillage-grid">
              {related.map((r) => (
                <a key={r.slug} href={`/blog/${r.slug}`} className="maillage-card">
                  <div className="mc-title">{r.title}</div>
                  <div className="mc-desc">{r.excerpt.slice(0, 80)}…</div>
                </a>
              ))}
            </div>
          </nav>
        )}

      </main>

      {/* Script FAQ accordion */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.querySelectorAll('.faq-btn').forEach(btn => {
              btn.addEventListener('click', () => {
                const item = btn.closest('.faq-item');
                const isOpen = item.classList.contains('open');
                document.querySelectorAll('.faq-item.open').forEach(i => {
                  i.classList.remove('open');
                  i.querySelector('.faq-btn').setAttribute('aria-expanded','false');
                });
                if (!isOpen) {
                  item.classList.add('open');
                  btn.setAttribute('aria-expanded','true');
                }
              });
            });
          `,
        }}
      />
    </>
  );
}