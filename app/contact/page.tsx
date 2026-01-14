"use client";

import Link from "next/link";
import { Mail, MessageCircle, MapPin, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "@/client/components/TiltCard";
import { Canvas3DWrapper } from "@/client/components/Canvas3DWrapper";
import SupportModal from "@/components/SupportModal";

export default function Contact() {
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      description: "Send us a message anytime",
      contact: "info@eduwrites.com",
      link: "mailto:info@eduwrites.com",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "WhatsApp",
      description: "Chat with us on WhatsApp",
      contact: "+1 365 8291551",
      link: "https://wa.me/13658291551",
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
      answer:
        "We offer various turnaround times from rush (24 hours) to standard (7-10 days). The timeline depends on the complexity and length of your assignment. You can specify your deadline when placing an order.",
    },
    {
      question: "Is my work guaranteed to be plagiarism-free?",
      answer:
        "Yes, 100%. All our work is original and written from scratch. We use plagiarism detection software to verify every submission before delivery.",
    },
    {
      question: "Can I communicate with my assigned writer?",
      answer:
        "Absolutely. You can send messages to your assigned writer through our platform to provide feedback, ask questions, or make adjustments to your order.",
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer:
        "We offer unlimited revisions within 14 days of delivery. If you're still not satisfied, we offer a full refund or a complete rewrite with a different writer.",
    },
    {
      question: "How do you ensure confidentiality?",
      answer:
        "Your privacy is our top priority. We use industry-standard encryption and never share your personal information. All transactions are secure and confidential.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.",
    },
  ];

  return (
    <div className="w-full">
      {/* 3D Canvas Background */}
      <Canvas3DWrapper />

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
                EduWrites
              </span>
            </h1>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto mb-8">
              Have questions about our services? Want to discuss your academic
              needs? We're here to help. Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const isExternal = method.link.startsWith("http");
              return (
                <TiltCard key={index} className="h-full">
                  <a
                    href={method.link}
                    {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                    className="glass p-8 rounded-2xl hover:bg-white/20 transition-all text-center group h-full flex flex-col justify-center"
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
                </TiltCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section - Now using Support Modal */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="glass p-8 sm:p-12 rounded-2xl">
            <h2 className="text-3xl font-bold text-foreground mb-2 font-poppins">
              Send us a Message
            </h2>
            <p className="text-foreground/70 mb-8">
              Fill out the form below and we'll respond to you within 24
              hours.
            </p>

            <button
              onClick={() => setIsSupportModalOpen(true)}
              className="w-full gradient-primary text-white py-4 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105 duration-300 flex items-center justify-center gap-2 animate-pulse-bounce"
            >
              Open Support Form <ArrowRight size={20} />
            </button>
          </div>
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
                  <MessageSquare
                    size={20}
                    className="flex-shrink-0 mt-1 text-cyan-400"
                  />
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
            Don't let academic stress hold you back. Let EduWrites help
            you achieve your academic goals.
          </p>

          <Link
            href="/order"
            className="inline-flex items-center justify-center gap-2 gradient-primary text-white px-10 py-4 rounded-xl font-bold hover:shadow-glow transition-all transform hover:scale-105"
          >
            Place an Order Now
          </Link>
        </div>
      </section>

      {/* Support Modal */}
      <SupportModal
        isOpen={isSupportModalOpen}
        onClose={() => setIsSupportModalOpen(false)}
      />
    </div>
  );
}
