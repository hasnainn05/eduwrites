import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, TrendingUp, BarChart3 } from "lucide-react";

export default function MarketingServices() {
  const services = [
    {
      id: "seo",
      title: "SEO",
      description: "Improve your search engine rankings with strategic optimization",
      icon: "🔍",
    },
    {
      id: "ecommerce-seo",
      title: "Ecommerce SEO",
      description: "Boost your online store visibility and sales with targeted SEO",
      icon: "🛒",
    },
    {
      id: "email",
      title: "Email Marketing",
      description: "Create targeted email campaigns that convert and engage",
      icon: "📧",
    },
  ];

  const pricing = [
    {
      name: "Small Package",
      price: "$399",
      features: [
        "Basic SEO optimization",
        "Keyword research",
        "On-page optimization",
        "Monthly reporting",
        "1-3 month commitment",
      ],
      cta: "Order Now",
    },
    {
      name: "Medium Package",
      price: "$899",
      features: [
        "Advanced SEO strategy",
        "Backlink building",
        "Content optimization",
        "Bi-weekly reports",
        "3-6 month commitment",
      ],
      cta: "Order Now",
      highlighted: true,
    },
    {
      name: "High Package",
      price: "$1,699",
      features: [
        "Complete marketing audit",
        "Competitive analysis",
        "Advanced link building",
        "Weekly reports",
        "6-12 month commitment",
      ],
      cta: "Order Now",
    },
    {
      name: "Custom Package",
      price: "Custom",
      features: [
        "Customized strategy",
        "Multiple channels",
        "Dedicated account manager",
        "Real-time analytics",
        "Flexible commitment",
      ],
      cta: "Request Quote",
      isCustom: true,
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-orange-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 flex justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-pink-100 text-pink-700 font-semibold text-sm">
              📈 Marketing Services
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Grow Your Business with Strategic Marketing
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Drive more traffic, increase conversions, and boost your revenue with
            our comprehensive marketing solutions
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Marketing Solutions
            </h2>
            <p className="text-lg text-foreground/70">
              Comprehensive strategies to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/marketing/${service.id}`}
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

      {/* Why Choose Us for Marketing */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Marketing Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Data-Driven Results
                  </h3>
                  <p className="text-foreground/70">
                    We use advanced analytics to track performance and optimize
                    continuously
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Proven Strategies
                  </h3>
                  <p className="text-foreground/70">
                    Our team has years of experience delivering results across
                    industries
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    ROI Focused
                  </h3>
                  <p className="text-foreground/70">
                    We focus on measurable results and maximum return on investment
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl border border-border">
              <div className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    Regular Reporting
                  </h3>
                  <p className="text-foreground/70">
                    Transparent reports and regular updates on your campaign
                    performance
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
              Marketing Packages
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the package that matches your goals and budget
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

      {/* Marketing Process Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Marketing Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: 1,
                title: "Analysis",
                description: "Analyze your market, competitors, and target audience",
              },
              {
                step: 2,
                title: "Strategy",
                description: "Develop a customized marketing strategy and roadmap",
              },
              {
                step: 3,
                title: "Implementation",
                description: "Execute campaigns across chosen channels",
              },
              {
                step: 4,
                title: "Optimization",
                description: "Monitor, measure, and optimize for better results",
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

      {/* Results Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Results We Deliver
            </h2>
            <p className="text-lg text-foreground/70">
              Real metrics from successful campaigns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "150%+", label: "Average Traffic Increase" },
              { metric: "45%+", label: "Conversion Rate Boost" },
              { metric: "3.2x", label: "Average ROI" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-secondary/5 p-8 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                  {item.metric}
                </div>
                <p className="text-lg text-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Let's create a marketing strategy that drives real results for your
            business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Start Today <ArrowRight size={20} />
            </button>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
