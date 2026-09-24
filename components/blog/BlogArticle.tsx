import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import type { BlogContentBlock, BlogPost } from "@/lib/blog-posts";
import { blogPostPath, getRelatedBlogPosts } from "@/lib/blog-posts";
import { routes } from "@/lib/site";

function ContentBlocks({ blocks }: { blocks: BlogContentBlock[] }) {
  return (
    <>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "p":
            if ("parts" in block) {
              return (
                <p key={key} className="telvis-article-p">
                  {block.parts.map((part, partIndex) =>
                    typeof part === "string" ? (
                      <span key={`${key}-${partIndex}`}>{part}</span>
                    ) : (
                      <Link
                        key={`${key}-${partIndex}`}
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

            return (
              <p key={key} className="telvis-article-p">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={key} className="telvis-article-h2">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} className="telvis-article-h3">
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={key} className="telvis-article-list">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key} className="telvis-article-list is-ordered">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            );
          case "note":
            return (
              <aside key={key} className="telvis-glass telvis-article-note">
                <p>{block.text}</p>
              </aside>
            );
          case "table":
            return (
              <div key={key} className="telvis-glass telvis-table-wrap">
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
              <div key={key} className="telvis-faq-list telvis-article-faq">
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
      })}
    </>
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

        <header className="telvis-article-header">
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
          <aside className="telvis-article-related" aria-labelledby="related-posts-heading">
            <h2 id="related-posts-heading" className="telvis-article-h2">
              Related Guides
            </h2>
            <div className="telvis-article-related-grid">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={blogPostPath(related.slug)}
                  className="telvis-glass telvis-article-related-card"
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
          </aside>
        ) : null}
      </div>
    </article>
  );
}
