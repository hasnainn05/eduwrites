import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog Post | EduWrites",
  description: "Professional thesis and dissertation writing services",
  keywords: ["blog", "thesis", "dissertation", "writing"],
};

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
