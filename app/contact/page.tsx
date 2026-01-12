'use client';

import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      description: "Send us a message anytime",
      contact: "info@ardelis.com",
      link: "mailto:info@ardelis.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      description: "Call us during business hours",
      contact: "+1 (234) 567-890",
      link: "tel:+1234567890",
    },
    {
      icon: <MapPin size={24} />,
      title: "Office",
      description: "Visit us in person",
      contact: "123 Business Ave, Suite 100",
      link: "#",
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      description: "We're available 24/7",
      contact: "Round the clock support",
      link: "#",
    },
  ];

  const faqItems = [
    {
      question: "How quickly can you complete my order?",
      answer: "We offer various turnaround times from rush (24 hours) to standard (7-10 days). The timeline depends on the complexity and length of your assignment. You can specify your deadline when placing an order.",
    },
    {
      question: "Is my work guaranteed to be plagiarism-free?",
      answer: "Yes, 100%. All our work is original and written from scratch. We use plagiarism detection software to verify every submission before delivery.",
    },
    {
      question: "Can I communicate with my assigned writer?",
      answer: "Absolutely. You can send messages to your assigned writer through our platform to provide feedback, ask questions, or make adjustments to your order.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We offer unlimited revisions within 14 days of delivery. If you're still not satisfied, we offer a full refund or a complete rewrite with a different writer.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer: "Your privacy is our top priority. We use industry-standard encryption and never share your personal information. All transactions are secure and confidential.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
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
              Get in Touch with{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Ardelis
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Have questions about our services? Want to discuss your academic needs? We're here to help. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="glass p-8 rounded-2xl hover:bg-white/20 transition-all transform hover:scale-105 hover:-translate-y-2 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-3">
                  {method.description}
                </p>
                <p className="text-base font-semibold text-cyan-400">
                  {method.contact}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="glass p-12 rounded-2xl text-center">
              <div className="text-6xl mb-6">✓</div>
              <h2 className="text-3xl font-bold text-foreground mb-4 font-poppins">
                Message Sent Successfully!
              </h2>
              <p className="text-foreground/80 mb-6">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="glass p-8 sm:p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-foreground mb-2 font-poppins">
                Send us a Message
              </h2>
              <p className="text-foreground/70 mb-8">
                Fill out the form below and we'll respond to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground/90 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/90 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/90 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/90 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full gradient-primary text-white py-4 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-16 text-center font-poppins">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="glass rounded-xl p-6 hover:bg-white/20 transition-all group cursor-pointer"
              >
                <summary className="flex gap-4 items-start text-lg font-semibold text-foreground hover:text-cyan-400 transition-colors">
                  <MessageSquare size={20} className="flex-shrink-0 mt-1 text-cyan-400" />
                  <span>{item.question}</span>
                </summary>
                <p className="text-foreground/80 mt-4 ml-6 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 blur-gradient bg-gradient-to-r from-purple-600 to-transparent opacity-40 top-0 left-0 -z-10"></div>
        <div className="absolute inset-0 blur-gradient bg-gradient-to-l from-cyan-600 to-transparent opacity-40 bottom-0 right-0 -z-10"></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8 font-poppins">
            Ready to Get Started?
          </h2>

          <p className="text-lg text-foreground/80 mb-12">
            Don't let academic stress hold you back. Let Ardelis help you achieve your academic goals.
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
