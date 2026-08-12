import { ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";
import { CardReveal, CardRevealPart } from "@/components/ui/CardReveal";
import { GlassIcon } from "@/components/ui/GlassIcon";
import { SectionHeader, TitleAccent } from "@/components/ui/SectionHeader";
import { staggerDelay } from "@/lib/motion";
import type { BlogCategory } from "@/lib/blog-data";

type BlogCategorySectionProps = {
  category: BlogCategory;
};

function CategoryTitle({ title, accent }: { title: string; accent: string }) {
  const index = title.indexOf(accent);
  if (index === -1) {
    return <>{title}</>;
  }

  return (
    <>
      {title.slice(0, index)}
      <TitleAccent>{accent}</TitleAccent>
      {title.slice(index + accent.length)}
    </>
  );
}

export function BlogCategorySection({ category }: BlogCategorySectionProps) {
  return (
    <section
      id={category.id}
      className="telvis-section"
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="telvis-section-inner">
        <SectionHeader
          id={`${category.id}-heading`}
          eyebrow={category.eyebrow}
          title={
            <CategoryTitle title={category.title} accent={category.accent} />
          }
          align="center"
        />

        <div className="telvis-feature-grid">
          {category.articles.map((article, index) => (
            <CardReveal
              key={article.title}
              as="article"
              delay={staggerDelay(index)}
              className="telvis-glass telvis-feature-tile"
            >
              <CardRevealPart variant="icon">
                <GlassIcon icon={BookOpen} />
              </CardRevealPart>
              <CardRevealPart variant="content" as="h3" className="telvis-info-title">
                {article.title}
              </CardRevealPart>
              <CardRevealPart variant="content" as="p" className="telvis-info-body">
                {article.body}
              </CardRevealPart>
              <CardRevealPart variant="content">
                <Link href={article.href} className="telvis-text-link">
                  {article.cta ?? "Read Guide"}
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    style={{ marginLeft: 6, display: "inline" }}
                  />
                </Link>
              </CardRevealPart>
            </CardReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
