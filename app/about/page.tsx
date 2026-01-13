'use client';

import { CheckCircle, Users, Award, Zap } from "lucide-react";
import Link from "next/link";
import { TiltCard } from "@/client/components/TiltCard";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We deliver high-quality academic writing that meets the highest standards.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integrity",
      description: "Our work is original, plagiarism-free, and written with complete transparency.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reliability",
      description: "We meet deadlines, respect your requirements, and provide 24/7 support.",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Happy Students" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "50+", label: "Expert Writers" },
    { number: "24/7", label: "Customer Support" },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Founder & Director",
      bio: "PhD in Education with 15+ years of academic writing experience",
    },
    {
      name: "Prof. Michael Chen",
      role: "Quality Manager",
      bio: "Expert in academic standards and research methodology",
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Writer",
      bio: "Specializes in essays, research papers, and dissertations",
    },
    {
      name: "James Wilson",
      role: "Customer Success",
      bio: "Dedicated to ensuring every student gets the support they need",
    },
  ];

  return (
    <div className="w-full">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 font-poppins leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Ardelis EduWrites
              </span>
            </h1>

            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Empowering students worldwide with expert academic writing services since 2015.
              We believe every student deserves access to high-quality academic support.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <TiltCard className="h-full">
            <div className="glass p-12 rounded-2xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To provide accessible, ethical, and high-quality academic writing support that helps
                students achieve their educational goals. We empower learners by offering professional
                assistance with essays, research papers, theses, and other academic work while
                maintaining the highest standards of integrity and originality.
              </p>
            </div>
          </TiltCard>

          {/* Vision */}
          <TiltCard className="h-full">
            <div className="glass p-12 rounded-2xl h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-poppins">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To be the most trusted and reliable academic writing service globally, recognized for
                delivering exceptional quality, maintaining ethical standards, and genuinely supporting
                student success. We aim to create a world where every student has access to the
                academic support they need to excel.
              </p>
            </div>
          </TiltCard>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Core Values
            </h2>
            <p className="text-lg text-foreground/70">
              These principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="text-cyan-400 mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-foreground/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass p-8 rounded-2xl text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-3 font-poppins">
                  {stat.number}
                </div>
                <p className="text-foreground/80 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Why Choose Ardelis EduWrites?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Expert writers with advanced degrees",
              "100% original, plagiarism-free content",
              "On-time delivery guarantee",
              "Unlimited revisions policy",
              "Affordable pricing for all budgets",
              "24/7 customer support",
              "Confidential and secure process",
              "Quality assurance checks",
            ].map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl flex gap-4 items-start hover:bg-white/20 transition-all"
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1 w-6 h-6" />
                <p className="text-foreground/90 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Meet Our Team
            </h2>
            <p className="text-lg text-foreground/70">
              Dedicated professionals committed to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <TiltCard key={index} className="h-full">
                <div
                  className="glass p-6 rounded-2xl text-center hover:bg-white/20 transition-all h-full flex flex-col justify-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-cyan-400 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-foreground/80">{member.bio}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 blur-gradient bg-gradient-to-r from-purple-600 to-transparent opacity-40 top-0 left-0 -z-10"></div>
        <div className="absolute inset-0 blur-gradient bg-gradient-to-l from-cyan-600 to-transparent opacity-40 bottom-0 right-0 -z-10"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-poppins">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-foreground/80 mb-12">
            Let Ardelis help you achieve your academic goals. Place an order today and experience
            the difference quality academic writing can make.
          </p>

          <Link
            href="/order"
            className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105"
          >
            Place an Order Now
          </Link>
        </div>
      </section>
    </div>
  );
}
