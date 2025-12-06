import { useParams } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ServiceData {
  title: string;
  subtitle: string;
  icon: string;
  heroGradient: string;
  aboutTitle: string;
  aboutContent: string;
  featuresTitle: string;
  features: string[];
  pricing: {
    name: string;
    price: string;
    features: string[];
    cta: string;
    highlighted?: boolean;
    isCustom?: boolean;
  }[];
  ctaText: string;
  ctaSubtext: string;
}

const servicesData: Record<string, ServiceData> = {
  essay: {
    title: "Essay & Assignment Writing",
    subtitle: "Professional Academic Writing Services",
    icon: "📝",
    heroGradient: "from-blue-50 to-indigo-50",
    aboutTitle: "About Essay & Assignment Writing",
    aboutContent:
      "Our essay writing service provides professionally written essays for all academic levels. Whether you need help with high school essays, college assignments, or university-level papers, our expert writers deliver original, well-researched content that meets your specific requirements.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Original, plagiarism-free content",
      "Expert writers with subject expertise",
      "Proper citation and referencing",
      "Multiple revision rounds",
      "On-time delivery guarantee",
      "Confidential and secure process",
      "24/7 customer support",
      "Quality assurance checks",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$49",
        features: [
          "500-1000 words",
          "Basic research",
          "Standard formatting",
          "1 revision",
          "5-7 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$99",
        features: [
          "Up to 3,000 words",
          "In-depth research",
          "Premium formatting",
          "2 revisions",
          "3-5 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$199",
        features: [
          "Up to 5,000 words",
          "Expert research",
          "Complete editing",
          "Unlimited revisions",
          "2-3 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Any word count",
          "Specialized topics",
          "Rush delivery",
          "Priority support",
          "Flexible timeline",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Ready to Order Your Essay?",
    ctaSubtext: "Get started today and receive your professionally written essay",
  },
  research: {
    title: "Research Paper Writing",
    subtitle: "In-Depth Research and Academic Excellence",
    icon: "🔬",
    heroGradient: "from-purple-50 to-pink-50",
    aboutTitle: "About Research Paper Writing",
    aboutContent:
      "Our research paper writing service specializes in comprehensive academic research papers. We conduct thorough literature reviews, original analysis, and provide properly cited sources. Perfect for students who need high-quality research papers for their academic programs.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Comprehensive literature review",
      "Original research and analysis",
      "Proper academic citations (APA, MLA, Chicago)",
      "Peer-reviewed source integration",
      "Detailed outlines and drafts",
      "Multiple revision rounds",
      "Plagiarism scanning",
      "Expert academic writers",
    ],
    pricing: [
      {
        name: "Basic",
        price: "$99",
        features: [
          "Up to 5,000 words",
          "Standard research depth",
          "Basic citations",
          "1 revision",
          "7-10 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Standard",
        price: "$249",
        features: [
          "Up to 10,000 words",
          "In-depth research",
          "Multiple sources",
          "2 revisions",
          "5-7 days delivery",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium",
        price: "$499",
        features: [
          "Up to 15,000 words",
          "Expert-level research",
          "20+ peer-reviewed sources",
          "Unlimited revisions",
          "3-5 days delivery",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Any word count",
          "Custom research scope",
          "Specialized topics",
          "Rush delivery available",
          "Dedicated researcher",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Commission Your Research Paper",
    ctaSubtext: "Get a comprehensive research paper written by academic experts",
  },
  thesis: {
    title: "Thesis & Dissertation Assistance",
    subtitle: "Complete Support for Your Academic Journey",
    icon: "🎓",
    heroGradient: "from-green-50 to-emerald-50",
    aboutTitle: "About Thesis & Dissertation Assistance",
    aboutContent:
      "Our thesis and dissertation assistance service provides comprehensive support for graduate-level research projects. From research design and proposal writing to final editing and formatting, we help ensure your thesis meets the highest academic standards.",
    featuresTitle: "What's Included in Our Service",
    features: [
      "Research proposal development",
      "Literature review assistance",
      "Research methodology guidance",
      "Data analysis support",
      "Chapter-by-chapter writing",
      "Comprehensive editing and proofreading",
      "Proper formatting (APA, MLA, Chicago)",
      "Defense preparation materials",
    ],
    pricing: [
      {
        name: "Consulting",
        price: "$299/month",
        features: [
          "Guidance and feedback",
          "Chapter reviews",
          "Weekly consultations",
          "30 days support",
          "Email support",
        ],
        cta: "Start Consulting",
      },
      {
        name: "Complete Package",
        price: "$2,999",
        features: [
          "Full thesis/dissertation writing",
          "Up to 50,000 words",
          "Unlimited revisions",
          "Expert editing",
          "Formatting assistance",
        ],
        cta: "Order Now",
        highlighted: true,
      },
      {
        name: "Premium Package",
        price: "$4,999",
        features: [
          "End-to-end support",
          "Up to 100,000 words",
          "Defense presentation prep",
          "Expert consultation",
          "6 months support",
        ],
        cta: "Order Now",
      },
      {
        name: "Custom",
        price: "Custom",
        features: [
          "Tailored solutions",
          "Custom timeline",
          "Specialized expertise",
          "Ongoing support",
          "Flexible pricing",
        ],
        cta: "Request Quote",
        isCustom: true,
      },
    ],
    ctaText: "Start Your Thesis Journey Today",
    ctaSubtext:
      "Get expert assistance with your thesis or dissertation project from start to finish",
  },
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Service Not Found
          </h1>
          <p className="text-foreground/70 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <a
            href="/services/writing"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
          >
            Back to Services
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${service.heroGradient} py-16 sm:py-24`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 flex justify-center text-5xl">{service.icon}</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {service.title}
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              {service.aboutTitle}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              {service.aboutContent}
            </p>
          </div>
        </div>
      </section>

      {/* Features/What's Included Section */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-16 text-center">
            {service.featuresTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                <CheckCircle className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-foreground/70">{feature}</p>
                </div>
              </div>
            ))}
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
              Choose the package that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pricing.map((plan) => (
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
                      <CheckCircle
                        className="text-primary flex-shrink-0 mt-0.5"
                        size={18}
                      />
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

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            {service.ctaText}
          </h2>
          <p className="text-lg text-white/90 mb-8">{service.ctaSubtext}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
              Order Now <ArrowRight size={20} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Chat with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
