'use client';

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import { useState } from "react";

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
  const params = useParams();
  const slug = params.slug as string;
  const service = slug ? servicesData[slug] : null;

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [orderForm, setOrderForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    wordCount: "",
    deadline: "",
    budget: "",
    academicLevel: "undergraduate",
    assignmentDetails: "",
    attachments: "" as File | null,
  });

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "attachments") {
      const file = (e.target as HTMLInputElement).files?.[0] || null;
      setOrderForm((prev) => ({ ...prev, attachments: file }));
    } else {
      setOrderForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Order submitted:", orderForm, "Plan:", selectedPlan);
    alert("Order submitted successfully! We'll contact you shortly.");
    setSelectedPlan(null);
    setOrderForm({
      fullName: "",
      email: "",
      phone: "",
      wordCount: "",
      deadline: "",
      budget: "",
      academicLevel: "undergraduate",
      assignmentDetails: "",
      attachments: null,
    });
  };

  if (!service) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center glass p-12 rounded-2xl max-w-md mx-4">
          <h1 className="text-4xl font-bold text-foreground mb-4 font-poppins">
            Service Not Found
          </h1>
          <p className="text-foreground/70 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blur-gradient absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600 to-transparent"></div>
        <div className="blur-gradient absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500 to-transparent animation-delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-24 sm:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 flex justify-center text-7xl animate-float">
            {service.icon}
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold text-foreground mb-6 font-poppins">
            {service.title}
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">392</div>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">292</div>
              <p className="text-foreground/70">Customer Reviews</p>
            </div>
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">4.9</div>
              <p className="text-foreground/70">Average Rating</p>
            </div>
            <div className="glass p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <p className="text-foreground/70">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="glass p-12 rounded-2xl">
            <h2 className="text-4xl font-bold text-foreground mb-8 font-poppins">
              {service.aboutTitle}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {service.aboutContent}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              At Ardelis, we pride ourselves on delivering exceptional quality and maintaining the highest standards of academic integrity. Every piece of work goes through rigorous quality assurance checks to ensure it meets your expectations and exceeds academic requirements. Our team is dedicated to your success and committed to providing you with work that truly makes a difference in your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Why Choose This Service?</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-foreground/80">Expert writers with advanced degrees in relevant fields</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-foreground/80">100% plagiarism-free original work guaranteed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-foreground/80">On-time delivery with revision guarantees</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span className="text-foreground/80">Flexible turnaround times to fit your schedule</span>
                </li>
              </ul>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-4 font-poppins">Our Process</h3>
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">1.</span>
                  <span className="text-foreground/80"><strong>Submit Details:</strong> Share your requirements and specifications</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">2.</span>
                  <span className="text-foreground/80"><strong>Expert Assignment:</strong> We match you with the best writer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">3.</span>
                  <span className="text-foreground/80"><strong>Quality Check:</strong> Multiple rounds of review for excellence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 font-bold">4.</span>
                  <span className="text-foreground/80"><strong>Delivery:</strong> Receive your work on time, every time</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center font-poppins">
            {service.featuresTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="glass p-6 rounded-xl flex gap-4 items-start hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-1"
              >
                <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1 w-5 h-5" />
                <p className="text-foreground/90 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 font-poppins">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-foreground/70">
              Choose the perfect plan for your academic needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl transition-all duration-300 transform hover:scale-110 hover:-translate-y-4 overflow-hidden group ${
                  plan.highlighted ? "lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                {/* Glass Background */}
                <div className={`absolute inset-0 ${plan.highlighted ? "glass-dark" : "glass"}`}></div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {plan.highlighted && (
                    <div className="absolute top-4 right-4">
                      <span className="gradient-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-glow">
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-foreground mb-4 pt-4">
                    {plan.name}
                  </h3>

                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-cyan-400 flex-shrink-0 mt-0.5 w-4 h-4"
                          size={16}
                        />
                        <span className="text-foreground/80 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3 rounded-lg font-bold transition-all transform hover:scale-105 ${
                      plan.highlighted
                        ? "gradient-primary text-white shadow-glow hover:shadow-glow"
                        : "border-2 border-white/20 text-foreground hover:border-white/40 hover:bg-white/10"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>

                {/* Border Gradient */}
                <div
                  className={`absolute inset-0 rounded-2xl pointer-events-none ${
                    plan.highlighted
                      ? "border border-white/30 group-hover:border-white/50"
                      : "border border-white/10 group-hover:border-white/30"
                  } transition-colors`}
                ></div>
              </div>
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
            {service.ctaText}
          </h2>

          <p className="text-lg text-foreground/80 mb-12">
            {service.ctaSubtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105"
            >
              Order Now <ArrowRight size={20} />
            </Link>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 glass text-foreground px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all"
            >
              Chat with Us
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-poppins">
              Student Success Stories
            </h2>
            <p className="text-foreground/70">Join thousands of satisfied students</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                author: "Sarah Mitchell",
                rating: 5,
                text: "Exceptional service! The essay was well-researched, original, and delivered on time. Highly recommend.",
                course: "English Literature",
              },
              {
                author: "Ahmed Hassan",
                rating: 5,
                text: "Outstanding research paper! The writer understood my topic perfectly. This exceeded my expectations.",
                course: "Business Management",
              },
              {
                author: "Emma Rodriguez",
                rating: 5,
                text: "Professional, reliable, and excellent quality. The customer service was incredibly responsive to my questions. Will definitely use again!",
                course: "Psychology",
              },
              {
                author: "James Chen",
                rating: 4,
                text: "Great work on my thesis proposal. The structure was clear and well-organized. Minor revisions were made quickly without extra cost.",
                course: "Computer Science",
              },
              {
                author: "Lisa Anderson",
                rating: 5,
                text: "My assignment was complex, but the writer broke it down perfectly. The quality of analysis was truly impressive and helped me learn.",
                course: "History",
              },
              {
                author: "David Kumar",
                rating: 5,
                text: "Fast turnaround without compromising quality. The writer delivered exactly what I needed. Great value for the price!",
                course: "Economics",
              },
            ].map((review, index) => (
              <div
                key={index}
                className="glass p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">★</span>
                  ))}
                  {[...Array(5 - review.rating)].map((_, i) => (
                    <span key={i} className="text-foreground/20 text-lg">★</span>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-foreground/90 mb-6 leading-relaxed text-base">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="border-t border-white/10 pt-4">
                  <p className="font-semibold text-foreground text-sm">{review.author}</p>
                  <p className="text-foreground/60 text-xs">{review.course}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-8 sm:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-foreground font-poppins">
                Complete Your Order: {selectedPlan}
              </h2>
              <button
                onClick={() => setSelectedPlan(null)}
                className="p-2 hover:bg-white/20 rounded-full transition-all"
              >
                <X size={24} className="text-foreground" />
              </button>
            </div>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={orderForm.fullName}
                    onChange={handleOrderChange}
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={orderForm.email}
                    onChange={handleOrderChange}
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={orderForm.phone}
                    onChange={handleOrderChange}
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400"
                  />
                  <select
                    name="academicLevel"
                    value={orderForm.academicLevel}
                    onChange={handleOrderChange}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                  >
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="masters">Master's Level</option>
                    <option value="phd">PhD Level</option>
                  </select>
                </div>
              </div>

              {/* Order Details */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Order Details</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="wordCount"
                    placeholder="Word Count *"
                    value={orderForm.wordCount}
                    onChange={handleOrderChange}
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="date"
                    name="deadline"
                    value={orderForm.deadline}
                    onChange={handleOrderChange}
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="number"
                    name="budget"
                    placeholder="Budget ($) *"
                    value={orderForm.budget}
                    onChange={handleOrderChange}
                    required
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400"
                  />
                  <input
                    type="file"
                    name="attachments"
                    onChange={handleOrderChange}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:border-cyan-400"
                    accept=".pdf,.doc,.docx,.txt"
                  />
                </div>
              </div>

              {/* Assignment Details */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">Assignment Details</h3>
                <textarea
                  name="assignmentDetails"
                  placeholder="Describe your assignment, requirements, and specifications..."
                  value={orderForm.assignmentDetails}
                  onChange={handleOrderChange}
                  required
                  rows={4}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 gradient-primary text-white py-3 rounded-lg font-bold hover:shadow-glow transition-all"
                >
                  Submit Order <ArrowRight size={18} className="ml-2" />
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedPlan(null)}
                  className="px-6 py-3 border-2 border-white/20 text-foreground rounded-lg font-semibold hover:bg-white/10 transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
