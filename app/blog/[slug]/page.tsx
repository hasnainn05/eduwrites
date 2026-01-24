"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { blogCategories, blogContent } from "@/lib/blogData";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const blog = blogCategories.find((b) => b.slug === params.slug);
  const content = blogContent[params.slug as keyof typeof blogContent];

  if (!blog || !content) {
    notFound();
  }

  // Generate list of related posts
  const relatedPosts = blogCategories
    .filter((b) => b.country === blog.country && b.slug !== params.slug)
    .slice(0, 3);

  return (
    <div className="w-full min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent animate-blob"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-semibold"
        >
          <ArrowLeft size={18} />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-xl border-2 border-border p-8 sm:p-12 mb-12 shadow-sm">
          {/* Title and Meta */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">{blog.flag}</span>
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  blog.type === "Thesis"
                    ? "bg-blue-500/20 text-blue-600"
                    : "bg-purple-500/20 text-purple-600"
                }`}
              >
                {blog.type} Writing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
              {blog.title}
            </h1>

            <p className="text-lg text-foreground/70 mb-6">
              {content.description}
            </p>

            {/* Article Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-foreground/60 border-t border-border pt-6">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>EduWrites Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>8 min read</span>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-sm sm:prose max-w-none text-foreground">
            <div
              dangerouslySetInnerHTML={{ __html: content.content }}
              className="space-y-6"
            />
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-foreground">Share:</span>
              <div className="flex gap-3">
                <button className="p-2 rounded-lg bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-all" title="Share on Facebook">
                  <Share2 size={18} />
                </button>
                <button className="p-2 rounded-lg bg-cyan-500/10 text-cyan-600 hover:bg-cyan-500/20 transition-all" title="Share on Twitter">
                  <Share2 size={18} />
                </button>
                <button className="p-2 rounded-lg bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-all" title="Share on LinkedIn">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-xl p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Professional Writing Support?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Our expert writers specialize in {blog.type.toLowerCase()} writing for {blog.country} universities. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Start Your {blog.type}
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              More {blog.country} Resources
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group p-6 border-2 border-border rounded-xl card-bg hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{post.flag}</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        post.type === "Thesis"
                          ? "bg-blue-500/20 text-blue-600"
                          : "bg-purple-500/20 text-purple-600"
                      }`}
                    >
                      {post.type}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
