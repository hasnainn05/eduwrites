import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Clock, DollarSign } from "lucide-react";

export default function WritingServices() {
  const services = [
    {
      id: "essay",
      title: "Essay & Assignment Writing",
      description:
        "Professional essay writing for all academic levels and subjects",
      icon: "📝",
    },
    {
      id: "research",
      title: "Research Paper Writing",
      description: "In-depth research papers with proper citations and sources",
      icon: "🔬",
    },
    {
      id: "thesis",
      title: "Thesis & Dissertation Assistance",
      description:
        "Complete support for thesis and dissertation projects from planning to completion",
      icon: "🎓",
    },
  ];

  const pricing = [
    {
      name: "Small Package",
      price: "$99",
      features: [
        "Up to 3,000 words",
        "Basic research",
        "Standard formatting",
        "1 revision round",
        "5-7 days delivery",
      ],
      cta: "Order Now",
    },
    {
      name: "Medium Package",
      price: "$249",
      features: [
        "Up to 7,500 words",
        "Comprehensive research",
        "Premium formatting",
        "2 revision rounds",
        "3-5 days delivery",
      ],
      cta: "Order Now",
      highlighted: true,
    },
    {
      name: "High Package",
      price: "$499",
      features: [
        "Up to 15,000 words",
        "Expert research",
        "Complete editing",
        "Unlimited revisions",
        "2-3 days delivery",
      ],
      cta: "Order Now",
    },
    {
      name: "Custom Package",
      price: "Custom",
      features: [
        "Any word count",
        "Specialized research",
        "Custom requirements",
        "Priority support",
        "Negotiable timeline",
      ],
      cta: "Request Quote",
      isCustom: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sidebar-background to-sidebar-background/80 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-sidebar-primary/20 text-sidebar-primary font-semibold text-sm">
              📝 Writing Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Professional Writing Services
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Expert writers ready to help with essays, research papers, and
            dissertations tailored to your specific needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-foreground/70">
              Choose from our comprehensive writing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/writing/${service.id}`}
                className="group rounded-xl border border-sidebar-border bg-card p-8 hover:border-sidebar-primary hover:shadow-lg transition-all"
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

      {/* Why Choose Us for Writing */}
      <section className="py-16 sm:py-24 bg-sidebar-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Writing Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Expert Writers
                  </h3>
                  <p className="text-foreground/70">
                    Experienced professionals with advanced degrees in various
                    fields
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Original Content
                  </h3>
                  <p className="text-foreground/70">
                    100% plagiarism-free work with proper citations and
                    references
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-foreground/70">
                    Quick turnaround times without compromising on quality
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Unlimited Revisions
                  </h3>
                  <p className="text-foreground/70">
                    We'll work with you until you're completely satisfied
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the package that fits your needs
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

      {/* Process Section */}
      <section className="py-16 sm:py-24 bg-sidebar-background/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Place Your Order",
                description: "Select a package and provide your requirements",
              },
              {
                step: 2,
                title: "Writer Assignment",
                description:
                  "We match you with the perfect expert for your project",
              },
              {
                step: 3,
                title: "Quality Writing",
                description: "Your writer crafts original, high-quality content",
              },
              {
                step: 4,
                title: "Receive & Review",
                description:
                  "Get your finished work and request revisions if needed",
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
    </div>
  );
}
