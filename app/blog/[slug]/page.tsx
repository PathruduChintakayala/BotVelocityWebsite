import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "@/lib/getPosts";

type PostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.metadata.title,
    description: post.metadata.excerpt,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.excerpt,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const PostComponent = post.default;
  const author = post.metadata.author ?? "Bot Velocity Engineering";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    description: post.metadata.excerpt,
    datePublished: post.metadata.date,
    author: {
      "@type": "Organization",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Bot Velocity",
      url: "https://botvelocity.com",
    },
    url: `https://botvelocity.com/blog/${slug}`,
  };

  return (
    <article className="section-light border-t border-neutral-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container-shell py-14">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-sm text-neutral-500 mb-1">
            <span>{new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "numeric" }).format(new Date(post.metadata.date))}</span>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>
          <p className="text-sm text-neutral-500 mb-6">{author}</p>
          <div className="prose-enterprise">
            <PostComponent />
          </div>
        </div>
      </div>
    </article>
  );
}
