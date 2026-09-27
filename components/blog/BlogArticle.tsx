import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { BlogContentBlock, BlogPost } from "@/lib/blog-posts";
import { blogPostPath, getRelatedBlogPosts } from "@/lib/blog-posts";
import { routes } from "@/lib/site";

type ArticleSection = {
  title?: string;
  blocks: BlogContentBlock[];
};

function groupIntoSections(blocks: BlogContentBlock[]): ArticleSection[] {
  const sections: ArticleSection[] = [];
  let current: ArticleSection = { blocks: [] };

  for (const block of blocks) {
    if (block.type === "h2") {
      if (current.title || current.blocks.length > 0) {
        sections.push(current);
      }
      current = { title: block.text, blocks: [] };
      continue;
    }

    current.blocks.push(block);
  }

  if (current.title || current.blocks.length > 0) {
    sections.push(current);
  }

  return sections;
}

function ParagraphBlock({
  block,
}: {
  block: Extract<BlogContentBlock, { type: "p" }>;
}) {
  if ("parts" in block) {
    return (
      <p className="telvis-article-p">
        {block.parts.map((part, partIndex) =>
          typeof part === "string" ? (
            <span key={partIndex}>{part}</span>
          ) : (
            <Link
              key={partIndex}
              href={part.href}
              className="telvis-article-inline-link"
            >
              {part.label}
            </Link>
          ),
        )}
      </p>
    );
  }

  return <p className="telvis-article-p">{block.text}</p>;
}

function BlockContent({ block }: { block: BlogContentBlock }) {
  switch (block.type) {
    case "p":
      return <ParagraphBlock block={block} />;
    case "h3":
      return <h3 className="telvis-article-h3">{block.text}</h3>;
    case "ul":
      return (
        <ul className="telvis-article-list">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="telvis-article-list is-ordered">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "note":
      return (
        <aside className="telvis-article-note">
          <p>{block.text}</p>
        </aside>
      );
    case "table":
      return (
        <div className="telvis-article-table-card">
          <div className="telvis-article-table-scroll">
            <table className="telvis-table">
              <thead>
                <tr>
                  {block.headers.map((header) => (
                    <th key={header} scope="col">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("-")}>
                    {row.map((cell, cellIndex) =>
                      cellIndex === 0 ? (
                        <th key={`${cell}-${cellIndex}`} scope="row">
                          {cell}
                        </th>
                      ) : (
                        <td key={`${cell}-${cellIndex}`}>{cell}</td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    case "faq":
      return (
        <div className="telvis-faq-list telvis-article-faq">
          {block.items.map((item) => (
            <details
              key={item.question}
              className="telvis-glass telvis-faq-item"
            >
              <summary>
                <span>{item.question}</span>
                <ChevronDown
                  className="telvis-faq-chevron"
                  size={18}
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      );
    default:
      return null;
  }
}

function ContentBlocks({ blocks }: { blocks: BlogContentBlock[] }) {
  const sections = groupIntoSections(blocks);

  return (
    <div className="telvis-article-sections">
      {sections.map((section, sectionIndex) => {
        const isIntro = !section.title;
        const isFaq = section.blocks.some((block) => block.type === "faq");

        return (
          <section
            key={section.title ?? `intro-${sectionIndex}`}
            className={`telvis-glass telvis-article-panel${isIntro ? " is-intro" : ""}${isFaq ? " is-faq" : ""}`}
          >
            {section.title ? (
              <h2 className="telvis-article-h2">{section.title}</h2>
            ) : null}
            <div className="telvis-article-panel-body">
              {section.blocks.map((block, index) => (
                <BlockContent key={`${block.type}-${index}`} block={block} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}

type BlogArticleProps = {
  post: BlogPost;
};

export function BlogArticle({ post }: BlogArticleProps) {
  const relatedPosts = getRelatedBlogPosts(post.slug);

  return (
    <article className="telvis-article">
      <div className="telvis-section-inner telvis-article-inner">
        <nav className="telvis-article-breadcrumb" aria-label="Breadcrumb">
          <Link href={routes.home}>Home</Link>
          <span aria-hidden="true">/</span>
          <Link href={routes.blog}>Blog</Link>
          <span aria-hidden="true">/</span>
          <span className="telvis-article-breadcrumb-current">
            {post.title}
          </span>
        </nav>

        <header className="telvis-glass telvis-article-header-card">
          <h1 className="telvis-h1 telvis-article-title">{post.title}</h1>
          <p className="telvis-article-lead">{post.excerpt}</p>
        </header>

        <div className="telvis-article-hero-media">
          <Image
            src={post.image}
            alt={post.imageAlt}
            width={1200}
            height={675}
            className="telvis-article-hero-image"
            priority
            sizes="(max-width: 900px) 100vw, 880px"
          />
        </div>

        <div className="telvis-article-body">
          <ContentBlocks blocks={post.content} />
        </div>

        {relatedPosts.length > 0 ? (
          <aside
            className="telvis-article-related"
            aria-labelledby="related-posts-heading"
          >
            <div className="telvis-glass telvis-article-related-wrap">
              <h2 id="related-posts-heading" className="telvis-article-h2">
                Related Guides
              </h2>
              <div className="telvis-article-related-grid">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={blogPostPath(related.slug)}
                    className="telvis-article-related-card"
                  >
                    <span className="telvis-article-related-media">
                      <Image
                        src={related.image}
                        alt={related.imageAlt}
                        width={640}
                        height={400}
                        className="telvis-article-related-image"
                        sizes="(max-width: 767px) 100vw, 280px"
                      />
                    </span>
                    <span className="telvis-article-related-copy">
                      <span className="telvis-article-related-title">
                        {related.title}
                      </span>
                      <span className="telvis-article-related-link">
                        Read Guide
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>

              <div className="telvis-article-related-links">
                <Link href={routes.blog}>All Blog Guides</Link>
                <Link href={routes.installation}>Setup Guide</Link>
                <Link href={routes.plans}>IPTV Plans</Link>
                <Link href={routes.contact}>Contact Support</Link>
              </div>
            </div>
          </aside>
        ) : null}
      </div>
    </article>
  );
}
