import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code2, Smartphone } from "lucide-react";

export default function DevelopmentServices() {
  const services = [
    {
      id: "website",
      title: "Website Development",
      description: "Custom websites built with modern technology and best practices",
      icon: "🌐",
    },
    {
      id: "wordpress",
      title: "WordPress Development",
      description: "Professional WordPress sites with custom themes and plugins",
      icon: "📝",
    },
    {
      id: "shopify",
      title: "Shopify Store Development",
      description: "E-commerce stores optimized for conversions and sales",
      icon: "🛍️",
    },
    {
      id: "mobile",
      title: "Mobile Apps Development",
      description: "Native and cross-platform apps for iOS and Android",
      icon: "📱",
    },
  ];

  const pricing = [
    {
      name: "Small Package",
      price: "$1,499",
      features: [
        "5-page website",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "30 days support",
      ],
      cta: "Order Now",
    },
    {
      name: "Medium Package",
      price: "$3,499",
      features: [
        "15-page website",
        "Advanced features",
        "E-commerce capability",
        "Payment integration",
        "90 days support",
      ],
      cta: "Order Now",
      highlighted: true,
    },
    {
      name: "High Package",
      price: "$7,999",
      features: [
        "Unlimited pages",
        "Custom functionality",
        "Advanced analytics",
        "API integrations",
        "6 months support",
      ],
      cta: "Order Now",
    },
    {
      name: "Custom Package",
      price: "Custom",
      features: [
        "Enterprise solutions",
        "Dedicated team",
        "Custom development",
        "24/7 support",
        "Long-term partnership",
      ],
      cta: "Request Quote",
      isCustom: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-sm">
              💻 IT & Development Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Modern Development Solutions
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            From web development to mobile apps, we build scalable, secure, and
            user-friendly digital solutions for your business
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Development Services
            </h2>
            <p className="text-lg text-foreground/70">
              Complete solutions across web and mobile platforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/development/${service.id}`}
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

      {/* Why Choose Us for Development */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Development Team?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Expert Developers
                  </h3>
                  <p className="text-foreground/70">
                    Experienced team with expertise in latest technologies and
                    frameworks
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Scalable Solutions
                  </h3>
                  <p className="text-foreground/70">
                    Built to grow with your business without performance issues
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Security First
                  </h3>
                  <p className="text-foreground/70">
                    Enterprise-grade security and compliance built into every
                    project
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Ongoing Support
                  </h3>
                  <p className="text-foreground/70">
                    Comprehensive support and maintenance after launch
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
              Development Packages
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the package that fits your project requirements
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

      {/* Development Stack Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-foreground/70">
              We use the latest and most reliable technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Web Technologies
              </h3>
              <div className="space-y-2">
                <p className="text-foreground/70">React, Next.js, Vue.js</p>
                <p className="text-foreground/70">Node.js, Express, Django</p>
                <p className="text-foreground/70">PostgreSQL, MongoDB, Firebase</p>
                <p className="text-foreground/70">AWS, Google Cloud, Azure</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-white p-8">
              <h3 className="font-semibold text-lg text-foreground mb-4">
                Mobile Technologies
              </h3>
              <div className="space-y-2">
                <p className="text-foreground/70">React Native, Flutter</p>
                <p className="text-foreground/70">Swift, Kotlin</p>
                <p className="text-foreground/70">Firebase, Supabase</p>
                <p className="text-foreground/70">App Store, Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Development Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Planning & Design",
                description: "Requirements gathering and UI/UX design",
              },
              {
                step: 2,
                title: "Development",
                description: "Agile development with regular updates",
              },
              {
                step: 3,
                title: "Testing & QA",
                description: "Comprehensive testing and bug fixes",
              },
              {
                step: 4,
                title: "Deployment & Support",
                description: "Launch and ongoing maintenance",
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Build Your Next Project?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's turn your ideas into reality with our expert development team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Get Started <ArrowRight size={20} />
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
