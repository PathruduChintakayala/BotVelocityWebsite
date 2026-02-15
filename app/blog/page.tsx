import type { Metadata } from "next";
import { BlogCard } from "@/components/BlogCard";
import { Section } from "@/components/Section";
import { getPosts } from "@/lib/getPosts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical analysis on orchestration, evaluation, and governance for enterprise AI systems.",
};

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <Section
      variant="light"
      title="Bot Velocity Engineering Journal"
      description="Technical analysis on orchestration, evaluation, and governance for enterprise AI systems."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} {...post} variant="light" />
        ))}
      </div>
    </Section>
  );
}
