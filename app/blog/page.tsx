"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogCategories, countries } from "@/lib/blogData";

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-background">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/30 to-transparent animate-blob"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-transparent animate-blob animation-delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 font-poppins">
            Blog & Resources
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Comprehensive guides and resources for thesis and dissertation writing services across universities worldwide
          </p>
        </div>

        {/* Blog Posts organized by Country */}
        {countries.map((country) => {
          const countryBlogs = blogCategories.filter(
            (blog) => blog.country === country.name
          );

          return (
            <div key={country.name} className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="text-3xl">{country.flag}</span>
                {country.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {countryBlogs.map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/blog/${blog.slug}`}
                    className="group relative p-6 border-2 border-border rounded-xl card-bg hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    {/* Background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-3">
                        <div className="text-4xl">{blog.flag}</div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            blog.type === "Thesis"
                              ? "bg-blue-500/20 text-blue-600"
                              : "bg-purple-500/20 text-purple-600"
                          }`}
                        >
                          {blog.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {blog.title}
                      </h3>

                      <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                        Professional {blog.type.toLowerCase()} writing services tailored for {blog.country} universities and academic standards.
                      </p>

                      <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
                        Read More
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Divider between countries */}
              <div className="border-b border-border/30 my-12"></div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/20 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Need Professional Writing Assistance?
          </h2>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Our expert writers are ready to help you with your thesis or dissertation. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
            <Link
              href="/#pricing"
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
