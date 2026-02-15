type PostMetadata = {
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  tags?: string[];
};

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  rawDate: string;
  author: string;
  readingTime: string;
  tags: string[];
};

type PostModule = {
  default: React.ComponentType;
  metadata: PostMetadata;
};

const postLoaders: Record<string, () => Promise<PostModule>> = {
  "ai-automation-production-failures": () =>
    import("@/content/blog/ai-automation-production-failures.mdx"),
  "deterministic-orchestration-control-plane": () =>
    import("@/content/blog/deterministic-orchestration-control-plane.mdx"),
  "governance-layer-for-ai-systems": () =>
    import("@/content/blog/governance-layer-for-ai-systems.mdx"),
};

// Rough word counts for reading time estimation (MDX content word counts)
const wordCounts: Record<string, number> = {
  "ai-automation-production-failures": 800,
  "deterministic-orchestration-control-plane": 900,
  "governance-layer-for-ai-systems": 850,
};

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(date));
}

function calculateReadingTime(slug: string): string {
  const words = wordCounts[slug] ?? 600;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function getPosts(): Promise<Post[]> {
  const posts = await Promise.all(
    Object.entries(postLoaders).map(async ([slug, load]) => {
      const postModule = await load();
      return {
        slug,
        title: postModule.metadata.title,
        excerpt: postModule.metadata.excerpt,
        rawDate: postModule.metadata.date,
        date: postModule.metadata.date,
        author: postModule.metadata.author ?? "Bot Velocity Engineering",
        readingTime: calculateReadingTime(slug),
        tags: postModule.metadata.tags ?? [],
      };
    }),
  );

  return posts
    .sort(
      (a, b) =>
        new Date(b.rawDate).getTime() - new Date(a.rawDate).getTime(),
    )
    .map((post) => ({ ...post, date: formatDate(post.rawDate) }));
}

export function getPostSlugs(): string[] {
  return Object.keys(postLoaders);
}

export async function getPostBySlug(slug: string) {
  const loader = postLoaders[slug];
  if (!loader) {
    return null;
  }
  const postModule = await loader();
  return {
    ...postModule,
    readingTime: calculateReadingTime(slug),
    tags: postModule.metadata.tags ?? [],
  };
}
