/**
 * PostTitle — rendu du H1 article avec accent orange optionnel
 *
 * Usage dans app/blog/[slug]/page.tsx :
 *
 *   import { PostTitle } from "@/components/PostTitle";
 *   ...
 *   <PostTitle title={post.title} titleAccent={post.titleAccent} />
 *
 * Résultat si titleAccent existe :
 *   Le fil rouge multipotentiel : <span style orange>quand la dispersion révèle une mission</span>
 *
 * Résultat si titleAccent absent :
 *   Le fil rouge multipotentiel
 */

interface PostTitleProps {
  title: string;
  titleAccent?: string;
  className?: string;
}

export function PostTitle({ title, titleAccent, className }: PostTitleProps) {
  if (!titleAccent) {
    return <h1 className={className}>{title}</h1>;
  }

  return (
    <h1 className={className}>
      {title}
      {" : "}
      <span style={{ color: "var(--orange)" }}>{titleAccent}</span>
    </h1>
  );
}
