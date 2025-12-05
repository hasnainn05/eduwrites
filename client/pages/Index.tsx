import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap } from "lucide-react";

export default function Home() {
  const services = [
    {
      id: "writing",
      title: "Writing Services",
      description: "Professional writing solutions for essays, research papers, and theses",
      icon: "📝",
      color: "from-blue-500 to-blue-600",
      link: "/services/writing",
    },
    {
      id: "design",
      title: "Graphics & Design",
      description:
        "Creative design services including logos, posters, and UI/UX design",
      icon: "🎨",
      color: "from-purple-500 to-purple-600",
      link: "/services/design",
    },
    {
      id: "marketing",
      title: "Marketing Services",
      description:
        "Drive growth with SEO, email marketing, and ecommerce solutions",
      icon: "📈",
      color: "from-pink-500 to-pink-600",
      link: "/services/marketing",
    },
    {
      id: "development",
      title: "IT & Development",
      description:
        "Web, mobile, and WordPress development services for your business",
      icon: "💻",
      color: "from-green-500 to-green-600",
      link: "/services/development",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Team",
      description: "Experienced professionals with proven track records",
      icon: "👥",
    },
    {
      title: "Affordable Pricing",
      description: "Competitive rates without compromising quality",
      icon: "💰",
    },
    {
      title: "Quick Turnaround",
      description: "Fast delivery without sacrificing excellence",
      icon: "⚡",
    },
    {
      title: "24/7 Support",
      description: "Always available to assist your needs",
      icon: "🛟",
    },
    {
      title: "Customized Solutions",
      description: "Tailored services to fit your unique requirements",
      icon: "🎯",
    },
    {
      title: "Quality Guaranteed",
      description: "100% satisfaction with rigorous quality control",
      icon: "✓",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      content:
        "The team delivered exceptional results. My website looks professional and performs beautifully. Highly recommended!",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content:
        "Outstanding SEO services. Our organic traffic increased by 150% within 3 months. Great ROI!",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emma Davis",
      role: "Student",
      content:
        "Fantastic writing service. My essay was well-researched, properly formatted, and delivered on time.",
      rating: 5,
      avatar: "ED",
    },
    {
      name: "David Williams",
      role: "Startup Founder",
      content:
        "The app development team understood our vision perfectly. They delivered a product that exceeded expectations.",
      rating: 5,
      avatar: "DW",
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
              Comprehensive digital services tailored to accelerate your growth.
              From design to development, marketing to content creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services/writing"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Get Started <ArrowRight size={20} />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We offer comprehensive solutions across multiple categories to meet
              all your digital needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className="group relative overflow-hidden rounded-xl border border-border bg-white p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                ></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight size={20} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We're committed to delivering exceptional value and results for every
              client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-lg border border-border bg-white hover:border-primary hover:shadow-md transition-all"
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
        className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Real feedback from satisfied clients who've transformed their
              business with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-colors"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center font-bold text-white flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-300">{testimonial.role}</p>
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
                <p className="text-gray-200">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Join hundreds of satisfied clients who've already transformed their
            business with our digital services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/services/writing"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
            >
              Hire Us Now <ArrowRight size={20} />
            </Link>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Live Chat Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
