import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function Home() {
  const services = [
    {
      id: "essay",
      title: "Essay Writing",
      description:
        "Professional essay writing for all academic levels and subjects",
      icon: "📝",
      slug: "essay",
    },
    {
      id: "assignment",
      title: "Assignment Writing",
      description: "Complete assignment solutions tailored to your requirements",
      slug: "essay",
    },
    {
      id: "thesis",
      title: "Thesis & Dissertation",
      description: "Expert guidance and writing support for your thesis project",
      slug: "thesis",
    },
    {
      id: "research",
      title: "Research Paper",
      description: "In-depth research papers with comprehensive analysis",
      slug: "research",
    },
    {
      id: "proofreading",
      title: "Proofreading & Editing",
      description: "Polish your academic work with expert proofreading services",
      slug: "essay",
    },
    {
      id: "dissertation",
      title: "Dissertation Writing",
      description: "Complete dissertation support from planning to final submission",
      slug: "thesis",
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sidebar-background to-sidebar-background/80 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sidebar-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-sidebar-accent/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-sidebar-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Expert Academic Writing{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Professional academic writing support for essays, research papers,
              theses, and more. Get expert help from experienced academic writers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center gap-2 border-2 border-sidebar-primary text-sidebar-primary px-8 py-3 rounded-lg font-semibold hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors"
              >
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Academic Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive academic writing solutions for all your educational
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/writing/${service.slug}`}
                className="group relative overflow-hidden rounded-xl border border-sidebar-border bg-card p-6 hover:border-sidebar-primary hover:shadow-lg transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sidebar-primary/5 to-sidebar-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 text-sm">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all text-sm">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-sidebar-background to-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Academic Services?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We're dedicated to helping students succeed with quality, ethical
              academic support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg border border-sidebar-border bg-card hover:border-sidebar-primary hover:shadow-md transition-all"
              >
                <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground/70">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 sm:py-24 bg-sidebar-background border-y border-sidebar-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Students Say
            </h2>
            <p className="text-lg text-sidebar-foreground/70 max-w-2xl mx-auto">
              Real feedback from students who've improved their grades with our
              support
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card border border-sidebar-border rounded-xl p-8 hover:border-sidebar-primary transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sidebar-primary to-sidebar-accent rounded-full flex items-center justify-center font-bold text-sidebar-primary-foreground flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-sidebar-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-sidebar-foreground/60">
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
                <p className="text-sidebar-foreground/70">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-sidebar-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Boost Your Academic Success?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join thousands of students who've improved their grades with our
            expert academic writing services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Order Now <ArrowRight size={20} />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-sidebar-primary text-sidebar-primary px-8 py-3 rounded-lg font-semibold hover:bg-sidebar-primary hover:text-sidebar-primary-foreground transition-colors"
            >
              Live Chat Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
