import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | EduWrites - Thesis & Dissertation Writing Services",
  description:
    "Explore our comprehensive blog covering thesis and dissertation writing services for universities worldwide.",
  keywords: [
    "blog",
    "thesis writing",
    "dissertation writing",
    "academic writing",
  ],
  alternates: {
    canonical: "https://eduwrites.com/blog",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
