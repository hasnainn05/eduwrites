"use client";

import { useScrollAnimation } from "@/client/hooks/useScrollAnimation";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles,
  Briefcase,
  TrendingUp,
  Award,
  BookOpen,
  Zap,
  Users,
  FileText,
  Pencil,
  BarChart3,
  BookMarked,
  MessageCircle,
} from "lucide-react";
import { Canvas3D } from "../client/components/Canvas3D";
import { TiltCard } from "../client/components/TiltCard";

export default function Home() {
  const services = [
    {
      id: "essay",
      title: "Essay Writing",
      description:
        "Professional essay writing for all academic levels and subjects",
      Icon: FileText,
      slug: "essay",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "assignment",
      title: "Assignment Writing",
      description:
        "Complete assignment solutions tailored to your requirements",
      Icon: CheckCircle,
      slug: "assignment",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "thesis",
      title: "Thesis Writing",
      description:
        "Expert guidance and writing support for your thesis project",
      Icon: BookOpen,
      slug: "thesis",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "research",
      title: "Research Paper",
      description: "In-depth research papers with comprehensive analysis",
      Icon: BarChart3,
      slug: "research",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "proofreading",
      title: "Proofreading & Editing",
      description:
        "Polish your academic work with expert proofreading services",
      Icon: Pencil,
      slug: "proofreading",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "dissertation",
      title: "Dissertation Writing",
      description:
        "Complete dissertation support from planning to final submission",
      Icon: BookMarked,
      slug: "dissertation",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Academic Writers",
      description: "Professionals with advanced degrees and proven expertise",
      icon: "👨‍🎓",
    },
    {
      title: "100% Original Content",
      description: "Plagiarism-free work guaranteed with quality checks",
      icon: "✓",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates without compromising on quality",
      icon: "💰",
    },
    {
      title: "On-Time Delivery",
      description:
        "We respect your deadlines with guaranteed timely completion",
      icon: "⏰",
    },
    {
      title: "Unlimited Revisions",
      description: "Get it perfect with as many revisions as you need",
      icon: "🔄",
    },
    {
      title: "24/7 Support",
      description: "Always available to answer your questions and concerns",
      icon: "💬",
    },
  ];

  const testimonials = [
    {
      name: "Alex Chen",
      role: "University Student",
      content:
        "Amazing essay writing service! My paper was well-researched, properly formatted, and delivered on time. Highly recommended!",
      rating: 5,
      avatar: "AC",
    },
    {
      name: "Jamie Rodriguez",
      role: "Graduate Student",
      content:
        "Outstanding thesis assistance. The team understood my research perfectly and delivered exceptional results. Game-changer!",
      rating: 5,
      avatar: "JR",
    },
    {
      name: "Morgan Taylor",
      role: "College Student",
      content:
        "Fantastic proofreading service. My assignment was polished to perfection. The attention to detail was incredible!",
      rating: 5,
      avatar: "MT",
    },
    {
      name: "Casey Williams",
      role: "PhD Candidate",
      content:
        "Excellent research paper support. They helped organize my thoughts and deliver a paper that impressed my professor.",
      rating: 5,
      avatar: "CW",
    },
    {
      name: "Sarah Johnson",
      role: "Master's Student",
      content:
        "The dissertation writing support was exceptional. Professional writers who truly understand academic standards. Worth every penny!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Park",
      role: "Undergraduate Student",
      content:
        "Great help with my research paper. The writers provided excellent insights and the final work exceeded my expectations. Highly satisfied!",
      rating: 5,
      avatar: "MP",
    },
    {
      name: "Emily Watson",
      role: "College Student",
      content:
        "Quick turnaround, professional quality, and responsive support team. This service helped me maintain my GPA. Definitely recommending to friends!",
      rating: 5,
      avatar: "EW",
    },
    {
      name: "David Kumar",
      role: "PhD Researcher",
      content:
        "Exceptional quality in research paper writing. The team's expertise in my field was evident. Perfect collaboration from start to finish.",
      rating: 5,
      avatar: "DK",
    },
  ];

  const scrollRef = useScrollAnimation(0.15);

  return (
    <div ref={scrollRef} className="w-full">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent animation-delay-2000"></div>
        <div className="blur-gradient absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-violet-600 to-transparent animation-delay-4000"></div>
      </div>

      {/* 3D Canvas Background */}
      <div className="fixed inset-0 -z-5 overflow-hidden pointer-events-none h-screen">
        <Canvas3D />
      </div>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 mb-8">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Excellence in Academic Writing
              </span>
            </div>

            <h1 className="heading-3d text-5xl sm:text-7xl font-bold mb-6 leading-tight font-poppins">
              Expert Academic{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Writing
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Elevate your academic success with professional writing support.
              Essays, research papers, theses, and more—all crafted to
              perfection.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-pulse-bounce"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a
                href="/profile"
                className="inline-flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-white/20 hover:shadow-glow transition-all transform hover:scale-105 animate-pulse-bounce"
              >
                <MessageCircle size={20} />
                Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-background/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="heading-3d-light text-3xl sm:text-4xl font-bold text-foreground mb-6 font-poppins scroll-animate">
                Professional Academic Writing Support for Every Challenge
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4 scroll-animate scroll-delay-100">
                Student success starts with quality academic work. At EduWrites,
                we understand the pressures of academic life—tight deadlines,
                complex assignments, and the need for excellence. Whether you're
                struggling with essay writing, research papers, or comprehensive
                dissertations, our expert team is here to help you succeed.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4 scroll-animate scroll-delay-200">
                With over a decade of experience in academic writing, we've
                helped thousands of students worldwide achieve their educational
                goals. Our writers hold advanced degrees in their respective
                fields and are committed to delivering original, high-quality
                work that meets the highest academic standards.
              </p>
              <p className="text-foreground/80 leading-relaxed scroll-animate scroll-delay-300">
                From undergraduate essays to PhD dissertations, we provide
                customized academic writing solutions that are plagiarism-free,
                properly cited, and delivered on time—every time. Your academic
                success is our mission.
              </p>
            </div>

            {/* Right Stats */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl scroll-animate-right scroll-delay-100">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <p className="text-foreground/80 font-medium">
                  Satisfied Students Worldwide
                </p>
                <p className="text-foreground/60 text-sm mt-2">
                  Students trust EduWrites for their most important academic
                  assignments
                </p>
              </div>

              <div className="glass p-6 rounded-xl scroll-animate-right scroll-delay-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-foreground/80 font-medium">
                  Customer Satisfaction Rate
                </p>
                <p className="text-foreground/60 text-sm mt-2">
                  Our commitment to quality and service excellence is reflected
                  in our ratings
                </p>
              </div>

              <div className="glass p-6 rounded-xl scroll-animate-right scroll-delay-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-foreground/80 font-medium">
                  Expert Academic Writers
                </p>
                <p className="text-foreground/60 text-sm mt-2">
                  PhDs and Masters degree holders specializing in various
                  academic fields
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Intro Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-3d-light text-3xl sm:text-4xl font-bold text-foreground mb-6 font-poppins">
            Transform Your Academic Performance
          </h2>
          <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
            We understand that every student faces unique challenges. Our
            comprehensive suite of academic writing services is designed to
            address all your needs—whether it's crafting the perfect essay,
            conducting in-depth research, or completing your dissertation. With
            our expert writers and commitment to excellence, you're not just
            getting a paper; you're getting a partner in your academic success.
          </p>
          <p className="text-base text-foreground/70">
            Choose the service that fits your needs and watch your academic
            performance soar.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-3d text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Academic Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive academic writing solutions tailored to your unique
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <TiltCard
                key={service.id}
                className="h-full scroll-animate scroll-delay-100 service-card-3d"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl transition-all duration-300 h-full flex flex-col"
                >
                  {/* Glass Background */}
                  <div className="absolute inset-0 glass"></div>

                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>

                  {/* Content */}
                  <div className="relative z-10 p-8 flex flex-col h-full">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform">
                      <service.Icon
                        size={48}
                        className="text-cyan-400 group-hover:text-white transition-colors"
                      />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>

                    <p className="text-foreground/70 mb-6 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all mt-auto">
                      Learn More <ArrowRight size={18} />
                    </div>
                  </div>

                  {/* Border Gradient */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors"></div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-3d text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Success Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              See how we've helped students achieve academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Enterprise Leadership Development",
                subtitle: "C-Suite Executive Strategy",
                client: "Fortune 500 Tech Company",
                metric: "3 Executive Promotions",
                description:
                  "Developed comprehensive leadership documentation and strategic white papers for executive team members. Enhanced corporate communication and positioning in industry leadership.",
                color: "from-blue-500 to-cyan-500",
                Icon: Briefcase,
              },
              {
                title: "Academic Research Excellence",
                subtitle: "Peer-Reviewed Publications",
                client: "Stanford University Research Lab",
                metric: "12 Published Papers",
                description:
                  "Supported research documentation and manuscript preparation across multiple disciplines. Contributed to significant breakthroughs in clinical research and academic advancement.",
                color: "from-purple-500 to-pink-500",
                Icon: BookOpen,
              },
              {
                title: "Corporate Innovation Strategy",
                subtitle: "Strategic Documentation",
                client: "Global Consulting Firm",
                metric: "$15M Client Value",
                description:
                  "Elevated consulting deliverables with professionally crafted strategic reports and business documentation. Directly contributed to securing major enterprise contracts.",
                color: "from-green-500 to-emerald-500",
                Icon: TrendingUp,
              },
              {
                title: "Graduate Excellence Program",
                subtitle: "Advanced Degree Completion",
                client: "International MBA Cohort",
                metric: "98% Distinction Rate",
                description:
                  "Supported 200+ graduate students in thesis and dissertation completion. Achieved industry-leading completion rates with distinction-level academic performance.",
                color: "from-yellow-500 to-orange-500",
                Icon: Award,
              },
              {
                title: "Professional Credentialing",
                subtitle: "Certification Support",
                client: "Financial Services Sector",
                metric: "450+ Professionals Certified",
                description:
                  "Helped financial professionals complete advanced certifications while maintaining careers. 99% pass rate with enhanced professional credentials and career advancement.",
                color: "from-indigo-500 to-purple-500",
                Icon: Zap,
              },
              {
                title: "Enterprise Communication",
                subtitle: "Internal & External Reports",
                client: "Healthcare Organization",
                metric: "100+ Strategic Documents",
                description:
                  "Produced compliance documentation, regulatory reports, and strategic communications. Enhanced organizational credibility and regulatory standing with professional documentation.",
                color: "from-rose-500 to-pink-500",
                Icon: Users,
              },
            ].map((project, index) => (
              <div
                key={index}
                className="group relative glass p-8 rounded-2xl border border-white/10 hover:border-white/30 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 scroll-animate"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                {/* Gradient Background Effect */}
                <div
                  className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 rounded-full blur-3xl transition-all duration-500`}
                ></div>

                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <project.Icon size={28} className="text-white" />
                    </div>
                    <div
                      className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${project.color} bg-opacity-20 border border-white/20`}
                    >
                      {project.metric}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-foreground/80 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-foreground/60 mb-1">
                        Client Organization
                      </p>
                      <p className="text-sm font-semibold text-foreground">
                        {project.client}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-foreground/70 mb-6">
              Your next success story could be here. Let us help you achieve
              your academic goals.
            </p>
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all transform hover:scale-105"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Education Levels & Fields of Study Section */}
      <section className="relative py-24 sm:py-40 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/3 via-white/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="heading-3d text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Coverage Across All Levels & Disciplines
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              From high school essays to PhD dissertations, we support every
              academic level and discipline
            </p>
          </div>

          {/* Education Levels */}
          <div className="mb-32">
            <h3 className="heading-3d-light text-3xl font-bold text-foreground mb-12 text-center">
              Education Levels
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  level: "High School",
                  description: "Essays, reports, projects",
                  icon: "🎒",
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  level: "Undergraduate",
                  description: "Essays, assignments, projects",
                  icon: "🎓",
                  color: "from-purple-500 to-pink-500",
                },
                {
                  level: "Master's Degree",
                  description: "Thesis, research papers, projects",
                  icon: "📚",
                  color: "from-green-500 to-emerald-500",
                },
                {
                  level: "PhD & Doctorate",
                  description: "Dissertations, research papers",
                  icon: "🏆",
                  color: "from-orange-500 to-red-500",
                },
                {
                  level: "Professional",
                  description: "Certifications, reports, publications",
                  icon: "💼",
                  color: "from-indigo-500 to-purple-500",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group glass p-8 rounded-2xl border border-white/15 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white/8 to-white/4 scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-foreground text-lg mb-3">
                    {item.level}
                  </h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Top Universities Section */}
          <div className="mb-32">
            <h3 className="heading-3d-light text-3xl font-bold text-foreground mb-12 text-center">
              Trusted by Top University Students
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  region: "United States",
                  icon: "🇺🇸",
                  universities: [
                    "Harvard",
                    "Stanford",
                    "MIT",
                    "Yale",
                    "Princeton",
                    "UC Berkeley",
                  ],
                  color: "from-blue-500 to-cyan-500",
                },
                {
                  region: "United Kingdom",
                  icon: "🇬🇧",
                  universities: [
                    "Oxford",
                    "Cambridge",
                    "LSE",
                    "Imperial",
                    "UCL",
                    "Edinburgh",
                  ],
                  color: "from-purple-500 to-pink-500",
                },
                {
                  region: "Europe",
                  icon: "🇪🇺",
                  universities: [
                    "ETH Zurich",
                    "Sorbonne",
                    "TU Munich",
                    "Amsterdam",
                    "Copenhagen",
                    "Uppsala",
                  ],
                  color: "from-green-500 to-emerald-500",
                },
                {
                  region: "International",
                  icon: "🌍",
                  universities: [
                    "University of Toronto",
                    "University of Melbourne",
                    "NUS Singapore",
                    "University of Tokyo",
                    "ANU",
                    "Seoul National",
                  ],
                  color: "from-orange-500 to-yellow-500",
                },
              ].map((region, idx) => (
                <div
                  key={idx}
                  className="group glass p-8 rounded-2xl border border-white/15 hover:border-white/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-3 bg-gradient-to-br from-white/8 to-white/4 scroll-animate"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{region.icon}</span>
                    <h4 className="font-bold text-foreground text-xl group-hover:text-cyan-300 transition-colors duration-300">
                      {region.region}
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {region.universities.map((uni, uIdx) => (
                      <div key={uIdx} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></span>
                        <span className="text-sm text-foreground/85">
                          {uni}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Language Support */}
          <div>
            <h3 className="heading-3d-light text-3xl font-bold text-foreground mb-12 text-center">
              Multi-Language Support
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {[
                { lang: "English (US)", flag: "🇺🇸" },
                { lang: "English (UK)", flag: "🇬🇧" },
                { lang: "French", flag: "🇫🇷" },
                { lang: "German", flag: "🇩🇪" },
                { lang: "Italian", flag: "🇮🇹" },
                { lang: "Dutch", flag: "🇳🇱" },
              ].map((lang, idx) => (
                <div
                  key={idx}
                  className="group glass p-6 rounded-2xl border border-white/15 hover:border-cyan-400/60 transition-all duration-300 text-center transform hover:scale-110 hover:-translate-y-2 bg-gradient-to-br from-white/8 to-white/4 hover:from-cyan-500/10 hover:to-cyan-500/5 scroll-animate"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <p className="text-5xl mb-3 transform group-hover:scale-130 transition-transform duration-300">
                    {lang.flag}
                  </p>
                  <p className="font-semibold text-foreground text-sm group-hover:text-cyan-300 transition-colors duration-300">
                    {lang.lang}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Fields of Study - All Disciplines */}
          <div className="mt-32">
            <h3 className="heading-3d-light text-3xl font-bold text-foreground mb-8 text-center">
              All Fields of Study
            </h3>
            <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-base leading-relaxed">
              Comprehensive coverage of all academic disciplines
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {[
                { category: "Computer Science & IT", icon: "💻" },
                { category: "Business & Finance", icon: "💼" },
                { category: "Engineering", icon: "⚙️" },
                { category: "Medicine & Healthcare", icon: "🏥" },
                { category: "Law & Legal Studies", icon: "⚖️" },
                { category: "Psychology & Social Sciences", icon: "🧠" },
                { category: "Environmental Science", icon: "🌍" },
                { category: "Humanities & Literature", icon: "📚" },
                { category: "Arts & Design", icon: "🎨" },
              ].map((field, idx) => (
                <div
                  key={idx}
                  className="glass p-4 rounded-lg border border-white/15 hover:border-cyan-400/60 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group bg-gradient-to-br from-white/8 to-white/4 text-center scroll-animate"
                  style={{ animationDelay: `${(idx % 5) * 0.08}s` }}
                >
                  <span className="text-2xl block mb-2 group-hover:scale-125 transition-transform duration-300">
                    {field.icon}
                  </span>
                  <h4 className="text-xs font-semibold text-foreground group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                    {field.category}
                  </h4>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-12 p-8 glass rounded-xl border border-white/15 text-center bg-gradient-to-br from-white/8 to-white/4">
              <h3 className="text-lg font-bold text-foreground mb-3">
                Can't Find Your Field?
              </h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto text-sm leading-relaxed">
                Our expert writers cover virtually every academic discipline. If
                your field isn't listed, we still support it.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 glass border border-cyan-400/60 text-cyan-400 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400/15 transition-all duration-300 transform hover:scale-105"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-3d text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Why Choose EduWrites?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine expertise, reliability, and dedication to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group scroll-animate"
                style={{ animationDelay: `${(index % 3) * 0.1}s` }}
              >
                <div className="flex-shrink-0 text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <h3 className="font-bold text-foreground mb-3 text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-5 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real feedback from students who've transformed their academic
              journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TiltCard key={index} className="h-full scroll-animate">
                <div
                  className="glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-float h-full"
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 shadow-glow">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-foreground/60 mt-1">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-foreground/80 leading-relaxed">
                    {testimonial.content}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 blur-gradient bg-gradient-to-r from-purple-600 to-transparent opacity-40 top-0 left-0"></div>
        <div className="absolute inset-0 blur-gradient bg-gradient-to-l from-cyan-600 to-transparent opacity-40 bottom-0 right-0"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-poppins">
            Ready to Boost Your Academic Success?
          </h2>

          <p className="text-lg text-foreground/80 mb-12">
            Join thousands of students who've improved their grades and academic
            standing with our expert writing services. Let's make your success a
            reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-pulse-bounce"
            >
              Order Now <ArrowRight size={20} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 glass text-foreground px-10 py-4 rounded-xl font-semibold hover:bg-white/20 hover:shadow-glow transition-all transform hover:scale-105 animate-pulse-bounce"
            >
              Live Chat Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
