import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";

export default function DesignServices() {
  const services = [
    {
      id: "logo",
      title: "Logo Design",
      description: "Professional logo design that represents your brand identity",
      icon: "🎯",
    },
    {
      id: "poster",
      title: "Poster & Flyer Design",
      description: "Eye-catching promotional materials for your campaigns",
      icon: "📄",
    },
    {
      id: "tshirt",
      title: "T-Shirt Design",
      description: "Custom t-shirt designs for merchandise and apparel",
      icon: "👕",
    },
    {
      id: "ui-ux",
      title: "App & Website UI/UX Design",
      description: "Beautiful, user-friendly interfaces for web and mobile applications",
      icon: "🎨",
    },
  ];

  const pricing = [
    {
      name: "Small Package",
      price: "$299",
      features: [
        "1 Design Concept",
        "Up to 3 revisions",
        "High-resolution files",
        "Standard delivery",
        "5-7 days delivery",
      ],
      cta: "Order Now",
    },
    {
      name: "Medium Package",
      price: "$699",
      features: [
        "3 Design Concepts",
        "Unlimited revisions",
        "Multiple file formats",
        "Priority delivery",
        "3-5 days delivery",
      ],
      cta: "Order Now",
      highlighted: true,
    },
    {
      name: "High Package",
      price: "$1,299",
      features: [
        "5 Design Concepts",
        "Unlimited revisions",
        "Complete branding package",
        "Premium support",
        "2-3 days delivery",
      ],
      cta: "Order Now",
    },
    {
      name: "Custom Package",
      price: "Custom",
      features: [
        "Custom design solutions",
        "Unlimited revisions",
        "Extended consultation",
        "24/7 priority support",
        "Negotiable timeline",
      ],
      cta: "Request Quote",
      isCustom: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-purple-100 text-purple-700 font-semibold text-sm">
              🎨 Graphics & Design Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Professional Design Services
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Creative design solutions tailored to bring your vision to life. From
            logos to UI/UX design, we deliver visually stunning work
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Design
            </h2>
            <p className="text-lg text-foreground/70">
              Comprehensive design services across multiple categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/design/${service.id}`}
                className="group rounded-xl border border-border bg-white p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Design */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Design Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Creative Excellence
                  </h3>
                  <p className="text-foreground/70">
                    Award-winning designers with years of industry experience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Unique Concepts
                  </h3>
                  <p className="text-foreground/70">
                    100% original designs tailored to your brand identity
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Quick Turnaround
                  </h3>
                  <p className="text-foreground/70">
                    Fast delivery without compromising on quality and creativity
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Multiple Revisions
                  </h3>
                  <p className="text-foreground/70">
                    We'll refine until you're completely satisfied with the design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the package that fits your design needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-primary bg-gradient-to-br from-primary/5 to-secondary/5 md:scale-105 shadow-lg"
                    : "border-border bg-white hover:border-primary hover:shadow-md"
                } ${plan.isCustom ? "border-secondary bg-gradient-to-br from-secondary/5 to-secondary/10" : ""}`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-foreground/70 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-lg font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg"
                      : plan.isCustom
                        ? "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Discovery & Brief",
                description: "We understand your vision, goals, and target audience",
              },
              {
                step: 2,
                title: "Concept Development",
                description: "Creative brainstorming and initial design concepts",
              },
              {
                step: 3,
                title: "Refinement",
                description:
                  "Revisions and improvements based on your feedback",
              },
              {
                step: 4,
                title: "Final Delivery",
                description:
                  "High-resolution files in multiple formats ready to use",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-foreground/70">
              Showcase of our latest design projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Brand Identity", category: "Logo Design" },
              { title: "Marketing Campaign", category: "Poster Design" },
              { title: "Mobile App Interface", category: "UI/UX Design" },
              { title: "Product Packaging", category: "Brand Design" },
              { title: "Website Redesign", category: "UI/UX Design" },
              { title: "Social Media Assets", category: "Graphic Design" },
            ].map((project, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-gradient-to-br from-slate-100 to-slate-200 p-8 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's bring your design ideas to life with our professional design
            team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Start Your Project <ArrowRight size={20} />
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
