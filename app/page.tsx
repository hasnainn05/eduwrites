'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Sparkles } from "lucide-react";

export default function Home() {
  const services = [
    {
      id: "essay",
      title: "Essay Writing",
      description:
        "Professional essay writing for all academic levels and subjects",
      icon: "📝",
      slug: "essay",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: "assignment",
      title: "Assignment Writing",
      description: "Complete assignment solutions tailored to your requirements",
      slug: "essay",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "thesis",
      title: "Thesis & Dissertation",
      description: "Expert guidance and writing support for your thesis project",
      slug: "thesis",
      color: "from-orange-500 to-red-500",
    },
    {
      id: "research",
      title: "Research Paper",
      description: "In-depth research papers with comprehensive analysis",
      slug: "research",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "proofreading",
      title: "Proofreading & Editing",
      description: "Polish your academic work with expert proofreading services",
      slug: "essay",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: "dissertation",
      title: "Dissertation Writing",
      description: "Complete dissertation support from planning to final submission",
      slug: "thesis",
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
      description: "We respect your deadlines with guaranteed timely completion",
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
  ];

  return (
    <div className="w-full">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent animation-delay-2000"></div>
        <div className="blur-gradient absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-br from-violet-600 to-transparent animation-delay-4000"></div>
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
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 leading-tight font-poppins">
              Expert Academic{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Writing
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
              Elevate your academic success with professional writing support. 
              Essays, research papers, theses, and more—all crafted to perfection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 glass text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
              >
                Chat with Us
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-poppins">
                Professional Academic Writing Support for Every Challenge
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Student success starts with quality academic work. At Ardelis, we understand the pressures of academic life—tight deadlines, complex assignments, and the need for excellence. Whether you're struggling with essay writing, research papers, or comprehensive dissertations, our expert team is here to help you succeed.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                With over a decade of experience in academic writing, we've helped thousands of students worldwide achieve their educational goals. Our writers hold advanced degrees in their respective fields and are committed to delivering original, high-quality work that meets the highest academic standards.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                From undergraduate essays to PhD dissertations, we provide customized academic writing solutions that are plagiarism-free, properly cited, and delivered on time—every time. Your academic success is our mission.
              </p>
            </div>

            {/* Right Stats */}
            <div className="space-y-6">
              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <p className="text-foreground/80 font-medium">Satisfied Students Worldwide</p>
                <p className="text-foreground/60 text-sm mt-2">Students trust Ardelis for their most important academic assignments</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <p className="text-foreground/80 font-medium">Customer Satisfaction Rate</p>
                <p className="text-foreground/60 text-sm mt-2">Our commitment to quality and service excellence is reflected in our ratings</p>
              </div>

              <div className="glass p-6 rounded-xl">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-foreground/80 font-medium">Expert Academic Writers</p>
                <p className="text-foreground/60 text-sm mt-2">PhDs and Masters degree holders specializing in various academic fields</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Our Academic Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive academic writing solutions tailored to your unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                {/* Glass Background */}
                <div className="absolute inset-0 glass"></div>

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-8">
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={18} />
                  </div>
                </div>

                {/* Border Gradient */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/30 transition-colors"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Why Choose Ardelis?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We combine expertise, reliability, and dedication to your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
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
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins mb-6">
              What Our Students Say
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real feedback from students who've transformed their academic journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
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
            Join thousands of students who've improved their grades and academic standing 
            with our expert writing services. Let's make your success a reality.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Order Now <ArrowRight size={20} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 glass text-foreground px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Live Chat Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
