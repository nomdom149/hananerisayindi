import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentType = "article" | "video" | "note";

export type Category =
  | "multipotentialite"
  | "identite"
  | "visibilite"
  | "rapport-au-travail"
  | "declics"
  | "positionnement"
  | "linkedin";

export interface RelatedService {
  label: string;
  url: string;
}

export interface Post {
  slug: string;
  title: string;
  date: string;
  updatedAt?: string;
  type: ContentType;
  category: Category;
  tags: string[];
  excerpt: string;
  seoTitle: string;
  metaDescription: string;
  readTime: string;
  videoUrl?: string;
  coverImage?: string;
  relatedServices?: RelatedService[];
  content: string;
}

// ── Lit tous les posts d'un dossier ──
function getPostsFromDir(dir: string): Post[] {
  const fullDir = path.join(CONTENT_DIR, dir);

  if (!fs.existsSync(fullDir)) return [];

  const files = fs.readdirSync(fullDir).filter((f) => f.endsWith(".mdx"));

  return files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(fullDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug: data.slug || slug,
      title: data.title || "",
      date: data.date || "",
      updatedAt: data.updatedAt || data.date || "",
      type: data.type || "article",
      category: data.category || "multipotentialite",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
      seoTitle: data.seoTitle || data.title || "",
      metaDescription: data.metaDescription || data.excerpt || "",
      readTime: data.readTime || rt.text,
      videoUrl: data.videoUrl || undefined,
      coverImage: data.coverImage || undefined,
      relatedServices: data.relatedServices || [
        {
          label: "Clarifier votre positionnement",
          url: "https://websait.com/audit4pro",
        },
        {
          label: "Structurer votre LinkedIn",
          url: "https://websait.com/linkedin4pro",
        },
      ],
      content,
    };
  });
}

// ── Tous les posts (articles + vidéos + notes) ──
export function getAllPosts(): Post[] {
  const articles = getPostsFromDir("articles");
  const videos   = getPostsFromDir("videos");

  return [...articles, ...videos].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// ── Articles uniquement ──
export function getArticles(): Post[] {
  return getPostsFromDir("articles").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// ── Vidéos uniquement ──
export function getVideos(): Post[] {
  return getPostsFromDir("videos").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

// ── Un post par slug (cherche dans articles puis videos) ──
export function getPostBySlug(slug: string): Post | null {
  const all = getAllPosts();
  return all.find((p) => p.slug === slug) ?? null;
}

// ── Posts par catégorie ──
export function getPostsByCategory(category: Category): Post[] {
  return getAllPosts().filter((p) => p.category === category);
}

// ── Posts récents (N derniers) ──
export function getRecentPosts(n = 3): Post[] {
  return getAllPosts().slice(0, n);
}

// ── Tous les slugs (pour generateStaticParams) ──
export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

// ── Slugs vidéos ──
export function getVideoSlugs(): string[] {
  return getVideos().map((p) => p.slug);
}